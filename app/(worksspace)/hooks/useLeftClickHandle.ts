
import { useCanvasCameraStore } from "../state/useCanvasCameraStore";
import { useCurrToolStore } from "../state/useCurrToolStore";
import { CanvasCamera } from "../type/CanvasCamera";

import useCommentToolClick from "./toolClick/useCommentToolClick";


export default function useLeftClickHandle() {
    const cam = useCanvasCameraStore((state) => state.cam);
    const currentTool = useCurrToolStore((state) => state.currentTool);
    const commentToolClick = useCommentToolClick({ cam });

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.button !== 0) return;
        if (currentTool === "select") { }
        if (currentTool === "comment") {
            commentToolClick.handles.onPointerDown(e);
        }

    };
    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (currentTool === "comment") {
            commentToolClick.handles.onPointerMove(e);
        }

    }
    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (currentTool === "comment") {
            commentToolClick.handles.onPointerUp(e);
        }

    };
    const onPointerCancel = () => {
        if (currentTool === "comment") {
            commentToolClick.handles.onPointerCancel();
        }

    };
    const onLostPointerCapture = () => {
        if (currentTool === "comment") {
            commentToolClick.handles.onLostPointerCapture();
        }

    };
    return {
        handles: {
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onPointerCancel,
            onLostPointerCapture
        }
    }
}
