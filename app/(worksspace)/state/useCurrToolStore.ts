import { create } from "zustand";

type CurrToolState ={
  currentTool: "select"|"comment" 
  setCurrentTool: (tool: "select"|"comment") => void;
  setDefaultTool: () => void;

}

export const useCurrToolStore = create<CurrToolState>((set) => ({
  currentTool: "select",
  setCurrentTool: (tool) => set({ currentTool: tool }),
  setDefaultTool: () => set({ currentTool: "select" }),
 
}));