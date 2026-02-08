import { useRef } from "react";
import { Camera } from "../type/camera";
type DragRef = {
    //screen position, drag start
    sx: number;
    sy: number;
    //camera translate value at drag start
    stx: number;
    sty: number
} | null

//right click, pan the canvas
export function useRightClickHandle({ cam, setCam }: {

    cam: Camera,
    setCam: React.Dispatch<React.SetStateAction<Camera>>
}) {
    const dragRef = useRef<DragRef>(null);

    const resetDrag = () => {
        dragRef.current = null;
    };

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        // right button pan
        if (e.button !== 2) return;

        e.currentTarget.setPointerCapture(e.pointerId);
        dragRef.current = {
            sx: e.clientX,
            sy: e.clientY,
            stx: cam.tx,
            sty: cam.ty
        };
    };
    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const drag = dragRef.current;
        if (!drag) {
            return;
        }

        const dx = e.clientX - drag.sx;
        const dy = e.clientY - drag.sy;
        // use the snapshot 'drag' (not dragRef.current!) to avoid null timing issues
        setCam((c: Camera) => {
            const newCam = { ...c, tx: drag.stx + dx, ty: drag.sty + dy };
            return newCam;
        });
    };
    const onPointerUp = () => {
        dragRef.current = null;
    };

    return {
        handles: {
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onPointerCancel: resetDrag,
            onLostPointerCapture: resetDrag,

        }
    }
}


