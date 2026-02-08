import { create } from "zustand";

type SideBarOpenStore = {
    sideBarOpen: boolean;
    setSideBarOpen: (open: boolean) => void;
}

export const useSideBarOpenStore = create<SideBarOpenStore>((set) => ({
    sideBarOpen: false,
    setSideBarOpen: (state) => set({ sideBarOpen: state }),

}));
