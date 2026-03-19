"use client";

import { createContext, useState, useContext } from "react";

type ContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
  image: {
    front: File | null;
    side: File | null;
    back: File | null;
  };
  setImage: React.Dispatch<
    React.SetStateAction<{
      front: File | null;
      side: File | null;
      back: File | null;
    }>
  >;
  results: {
    front: string | null;
    side: string | null;
    back: string | null;
  };
  setResults: React.Dispatch<
    React.SetStateAction<{
      front: string | null;
      side: string | null;
      back: string | null;
    }>
  >;
};

export const AppContext = createContext<ContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState<1 | 2 | 3>(2);
  const [results, setResults] = useState<{
    front: string | null;
    side: string | null;
    back: string | null;
  }>({
    front: null,
    side: null,
    back: null,
  });
  const [image, setImage] = useState<{
    front: File | null;
    side: File | null;
    back: File | null;
  }>({
    front: null,
    side: null,
    back: null,
  });
  return (
    <AppContext.Provider
      value={{ step, setStep, image, setImage, results, setResults }}
    >
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
