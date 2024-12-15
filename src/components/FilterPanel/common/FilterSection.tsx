import React from 'react';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ title, children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);