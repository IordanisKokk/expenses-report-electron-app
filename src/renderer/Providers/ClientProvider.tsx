import React, { createContext, useState, useContext, useMemo } from 'react';
import { Client } from '../Models/client';

interface ClientContextType {
  clients: Client[];
  addClient: (name: string, email: string, company: string) => void;
  removeClient: (index: number) => void;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

// Custom hook to use the client context
export const useClientContext = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error('useClientContext must be used within a ClientProvider');
  }
  return context;
};

// Client Provider component
export function ClientProvider({ children }: { children: React.ReactNode }) {
  // State to manage client data
  const [clients, setClients] = useState<Client[]>([]);
  // Value object for the context provider
  const value = useMemo<ClientContextType>(() => {
    const addClient = (name: string, email: string, company: string) => {
      setClients([...clients, { name, email, company }]);
    };

    // Function to remove a client
    const removeClient = (index: number) => {
      const newClients = [...clients];
      newClients.splice(index, 1);
      setClients(newClients);
    };

    return {
      clients,
      addClient,
      removeClient,
    };
  }, [clients]);

  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  );
}
