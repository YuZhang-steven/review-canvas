import { useCurrToolStore } from "../state/useCurrToolStore";


export default function useLeftClickHandle() {
    const currentTool = useCurrToolStore((state) => state.currentTool);


    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.button !== 0) return;
        if (currentTool === "select") { }

    };
    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {

    }
    const onPointerUp = () => {

    };
    const onPointerCancel = () => {

    };
    const onLostPointerCapture = () => {

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
