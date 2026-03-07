"use client";

import { createContext, useState, useContext } from "react";

type ContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
  image: File | undefined;
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
};

export const AppContext = createContext<ContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [image, setImage] = useState<File | undefined>(undefined);
  return (
    <AppContext.Provider value={{ step, setStep, image, setImage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
}
