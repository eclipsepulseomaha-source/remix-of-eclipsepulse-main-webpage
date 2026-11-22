import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface ClipsieContextValue {
  isOpen: boolean;
  openClipsie: () => void;
  closeClipsie: () => void;
}

const ClipsieContext = createContext<ClipsieContextValue | null>(null);

export function ClipsieProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openClipsie = useCallback(() => setIsOpen(true), []);
  const closeClipsie = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, openClipsie, closeClipsie }), [isOpen, openClipsie, closeClipsie]);
  return <ClipsieContext.Provider value={value}>{children}</ClipsieContext.Provider>;
}

export function useClipsie() {
  const ctx = useContext(ClipsieContext);
  if (!ctx) throw new Error("useClipsie must be used inside ClipsieProvider");
  return ctx;
}
