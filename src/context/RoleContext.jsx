import { createContext, useContext, useState, useEffect } from 'react';
import { ROLES, roleProfiles, getHireMailtoUrl } from '../data/portfolioData';

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [selectedRole, setSelectedRole] = useState(() => {
    try {
      const saved = localStorage.getItem('anissa_active_role');
      if (saved && roleProfiles[saved]) return saved;
    } catch {
      // fallback
    }
    return ROLES.ALL;
  });

  const selectRole = (roleKey) => {
    if (roleProfiles[roleKey]) {
      setSelectedRole(roleKey);
      try {
        localStorage.setItem('anissa_active_role', roleKey);
      } catch {
        // ignore
      }
    }
  };

  const activeProfile = roleProfiles[selectedRole] || roleProfiles.all;
  const currentHireMailtoUrl = getHireMailtoUrl(selectedRole);

  return (
    <RoleContext.Provider
      value={{
        selectedRole,
        selectRole,
        activeProfile,
        currentHireMailtoUrl,
        rolesList: Object.values(roleProfiles),
      }}
    >
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
