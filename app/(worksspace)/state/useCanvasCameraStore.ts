import { create } from "zustand";
import { CanvasCamera } from "../type/CanvasCamera";

type CanvasCameraStore = {
    cam: CanvasCamera;
    targetCam: CanvasCamera;
    setCam: (cam: CanvasCamera) => void;
}

const ANIMATION_DURATION = 400; // ms for smooth transition

export const useCanvasCameraStore = create<CanvasCameraStore>((set, get) => {
    let animationId: number | null = null;
    let startTime: number | null = null;
    let startCam: CanvasCamera | null = null;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
        if (!startTime || !startCam) {
            startTime = timestamp;
            startCam = get().cam;
        }

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
        const eased = easeOutCubic(progress);

        const targetCam = get().targetCam;

        const newCam: CanvasCamera = {
            tx: startCam.tx + (targetCam.tx - startCam.tx) * eased,
            ty: startCam.ty + (targetCam.ty - startCam.ty) * eased,
            scale: startCam.scale + (targetCam.scale - startCam.scale) * eased,
        };

        set({ cam: newCam });

        if (progress < 1) {
            animationId = requestAnimationFrame(animate);
        } else {
            animationId = null;
            startTime = null;
            startCam = null;
        }
    };

    return {
        cam: { tx: 0, ty: 0, scale: 1 },
        targetCam: { tx: 0, ty: 0, scale: 1 },
        setCam: (target: CanvasCamera) => {
            set({ targetCam: target });

            if (animationId) {
                cancelAnimationFrame(animationId);
            }

            animationId = requestAnimationFrame(animate);
        },
    };
});