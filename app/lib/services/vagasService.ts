import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';
import { Vaga } from '../../types/vaga';
import { Candidatura } from '../../types/candidatura';

const VAGAS_COLLECTION = 'vagas';
const CANDIDATURAS_COLLECTION = 'candidaturas';

// ============ SERVIÇOS DE VAGAS ============

export async function getAllVagas(): Promise<Vaga[]> {
  try {
    const q = query(collection(db, VAGAS_COLLECTION), orderBy('titulo', 'asc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Vaga));
  } catch (error) {
    console.error('Erro ao buscar vagas:', error);
    throw error;
  }
}

export async function getVagaById(id: string): Promise<Vaga | null> {
  try {
    const docRef = doc(db, VAGAS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Vaga;
    }
    return null;
  } catch (error) {
    console.error('Erro ao buscar vaga:', error);
    throw error;
  }
}

export async function createVaga(vaga: Omit<Vaga, 'id'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, VAGAS_COLLECTION), vaga);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao criar vaga:', error);
    throw error;
  }
}

export async function updateVaga(id: string, vaga: Partial<Omit<Vaga, 'id'>>): Promise<void> {
  try {
    const docRef = doc(db, VAGAS_COLLECTION, id);
    await updateDoc(docRef, vaga);
  } catch (error) {
    console.error('Erro ao atualizar vaga:', error);
    throw error;
  }
}

export async function deleteVaga(id: string): Promise<void> {
  try {
    const docRef = doc(db, VAGAS_COLLECTION, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Erro ao deletar vaga:', error);
    throw error;
  }
}

// ============ SERVIÇOS DE CANDIDATURAS ============

export async function createCandidatura(
  candidatura: Omit<Candidatura, 'id' | 'dataAplicacao' | 'curriculoUrl' | 'curriculoNome'>,
  curriculoFile: File
): Promise<string> {
  try {
    // Upload do currículo
    /* const timestamp = Date.now();
    const fileName = `curriculos/${candidatura.vagaId}/${timestamp}_${curriculoFile.name}`;
    const storageRef = ref(storage, fileName);
    
    await uploadBytes(storageRef, curriculoFile);
    const curriculoUrl = await getDownloadURL(storageRef); */
    const curriculoUrl = '';

    // Salvar candidatura no Firestore
    const candidaturaData = {
      ...candidatura,
      curriculoUrl,
      curriculoNome: curriculoFile.name,
      dataAplicacao: Timestamp.now(),
      status: 'pendente' as const
    };

    const docRef = await addDoc(collection(db, CANDIDATURAS_COLLECTION), candidaturaData);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao criar candidatura:', error);
    throw error;
  }
}

export async function getAllCandidaturas(): Promise<Candidatura[]> {
  try {
    const q = query(collection(db, CANDIDATURAS_COLLECTION), orderBy('dataAplicacao', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        dataAplicacao: data.dataAplicacao?.toDate() || new Date()
      } as Candidatura;
    });
  } catch (error) {
    console.error('Erro ao buscar candidaturas:', error);
    throw error;
  }
}

export async function getCandidaturasByVaga(vagaId: string): Promise<Candidatura[]> {
  try {
    const q = query(
      collection(db, CANDIDATURAS_COLLECTION),
      where('vagaId', '==', vagaId),
      orderBy('dataAplicacao', 'desc')
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        dataAplicacao: data.dataAplicacao?.toDate() || new Date()
      } as Candidatura;
    });
  } catch (error) {
    console.error('Erro ao buscar candidaturas por vaga:', error);
    throw error;
  }
}

export async function updateCandidaturaStatus(
  id: string, 
  status: Candidatura['status']
): Promise<void> {
  try {
    const docRef = doc(db, CANDIDATURAS_COLLECTION, id);
    await updateDoc(docRef, { status });
  } catch (error) {
    console.error('Erro ao atualizar status da candidatura:', error);
    throw error;
  }
}

export async function deleteCandidatura(id: string): Promise<void> {
  try {
    const docRef = doc(db, CANDIDATURAS_COLLECTION, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Erro ao deletar candidatura:', error);
    throw error;
  }
}

