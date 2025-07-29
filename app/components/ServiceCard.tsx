interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      {/* Icon */}
      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg className="h-4 w-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover effect */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
          Saiba mais →
        </div>
      </div>
    </div>
  );
} 