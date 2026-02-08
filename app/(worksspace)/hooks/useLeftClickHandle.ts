import { Camera } from "@react-three/fiber";
import { useCurrToolStore } from "../state/useCurrToolStore";
import useCommentToolClick from "./toolClick/useCommentToolClick";


export default function useLeftClickHandle({ cam }: {
    cam: Camera
}) {
    const currentTool = useCurrToolStore((state) => state.currentTool);
    const commentToolClick = useCommentToolClick(cam);


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
