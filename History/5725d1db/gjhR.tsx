"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Definição dos tipos do contexto
interface VsContextType {
  aboutMe: boolean;
  toggleAboutMe: () => void;
  myHobbys: boolean;
  toggleMyHobbys: () => void;
}

// Criando o contexto
const VsContext = createContext<VsContextType | undefined>(undefined);

// Criando o Provider do contexto
export function VsProvider({ children }: { children: ReactNode }) {
  const [aboutMe, setAboutMe] = useState(false);
  const [myHobbys, setMyHobbys] = useState(false);

  const toggleAboutMe = () => setAboutMe((prev) => !prev);
  const toggleMyHobbys = () => setMyHobbys((prev) => !prev);

  return (
    <VsContext.Provider value={{ aboutMe, toggleAboutMe, myHobbys, toggleMyHobbys }}>
      {children}
    </VsContext.Provider>
  );
}

// Hook para consumir o contexto
export function useVsContext() {
  const context = useContext(VsContext);
  if (!context) {
    throw new Error("useVsContext deve ser usado dentro de VsProvider");
  }
  return context;
}
