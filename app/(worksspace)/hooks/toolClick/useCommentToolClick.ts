import { Camera } from "@react-three/fiber";
import { useRef } from "react";


type DragRef = {
    screenStartX: number;
    screenStartY: number;
    screenEndX: number;
    screenEndY: number;
} | null;
export default function useCommentToolClick({ cam }: {
    cam: Camera
}) {
    const dragRef = useRef<DragRef>(null);
    const resetDrag = () => {
        dragRef.current = null;
    };

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.button !== 0) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        dragRef.current = {
            screenStartX: e.clientX,
            screenStartY: e.clientY,
            screenEndX: e.clientX,
            screenEndY: e.clientY
        };
    };
    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {

    }
    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.button !== 0) return;
        if (dragRef.current) {
            dragRef.current.screenEndX = e.clientX;
            dragRef.current.screenEndY = e.clientY;
        }


    };


    return ({
        handles: {
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onPointerCancel: resetDrag,
            onLostPointerCapture: resetDrag,
        }
    })
}
