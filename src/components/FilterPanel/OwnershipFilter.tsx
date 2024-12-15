import React from 'react';
import { User, Building2, Users, UserCheck, Briefcase, UsersRound } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const ownershipTypes = [
  { icon: <User className="w-4 h-4" />, label: 'Owner' },
  { icon: <Building2 className="w-4 h-4" />, label: 'Builder' },
  { icon: <Users className="w-4 h-4" />, label: 'Developer' },
  { icon: <UserCheck className="w-4 h-4" />, label: 'Agent' },
  { icon: <Briefcase className="w-4 h-4" />, label: 'Institutional Ownership' },
  { icon: <UsersRound className="w-4 h-4" />, label: 'Joint Ownership' },
];

export default function OwnershipFilter() {
  return (
    <FilterSection title="Ownership Type">
      <div className="grid grid-cols-2 gap-4">
        {ownershipTypes.map((type, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="flex items-center gap-2 text-sm text-gray-600">
              {type.icon}
              {type.label}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}