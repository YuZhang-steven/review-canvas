import { create } from "zustand";

type CurrentSelectedIdState ={
  currentSelectedId: string | null;
  setCurrentSelectedId: (id: string | null) => void;
  clearCurrentSelectedId: () => void;
}

export const useCurrentSelectedIdStore = create<CurrentSelectedIdState>((set) => ({
  currentSelectedId: null,
  setCurrentSelectedId: (id) => set({ currentSelectedId: id }),
  clearCurrentSelectedId: () => set({ currentSelectedId: null }),
}));

