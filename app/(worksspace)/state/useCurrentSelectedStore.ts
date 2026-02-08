import { create } from "zustand";

type SelecableType = "thread" | null

type CurrentSelectedState = {
  currentSelectedId: string | null;
  currentSelectedType: SelecableType
  setCurrentSelected: (id: string | null, type: SelecableType) => void;
  clearCurrentSelectedId: () => void;
}

export const useCurrentSelectedStore = create<CurrentSelectedState>((set) => ({
  currentSelectedId: null,
  currentSelectedType: null,
  setCurrentSelected: (id: string | null, type: SelecableType) => set({ currentSelectedId: id, currentSelectedType: type }),
  clearCurrentSelectedId: () => set({ currentSelectedId: null }),
}));
