import { create } from "zustand";
import { CanvasCamera } from "../type/CanvasCamera";

type CanvasCameraStore = {
    cam: CanvasCamera;
    setCam: (cam: CanvasCamera) => void;
}
export const useCanvasCameraStore = create<CanvasCameraStore>(
    (set) => ({
        cam: { tx: 0, ty: 0, scale: 1 },
        setCam: (cam: CanvasCamera) => set({ cam }),
    }))