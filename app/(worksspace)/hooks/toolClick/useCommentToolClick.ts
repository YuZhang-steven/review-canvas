
import { useRef } from "react";
import { screenToWorld } from "../../lib/viewScreenCoordTrans";
import { createThreadAt } from "../../lib/creatThreadAt";
import { threadMap } from "../../dataStore/threadMap";
import { Camera } from "../../type/camera";
import { useCurrToolStore } from "../../state/useCurrToolStore";


type DragRef = {
    screenStartX: number;
    screenStartY: number;
    screenEndX: number;
    screenEndY: number;
} | null;
export default function useCommentToolClick({ cam }: {
    cam: Camera
}) {
    const setCurrentTool = useCurrToolStore.getState().setCurrentTool;
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
            const coordWorld = screenToWorld({
                x: dragRef.current?.screenStartX,
                y: dragRef.current?.screenStartY
            }, cam)

            createThreadAt(coordWorld.x, coordWorld.y);
            setCurrentTool("select");
            console.log(threadMap.size());

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
