import { useCanvasCameraStore } from "../../state/useCanvasCameraStore";
import { useCurrentSelectedStore } from "../../state/useCurrentSelectedStore";
import { useCurrToolStore } from "../../state/useCurrToolStore";
import { useThreadStore } from "../../state/useThreadStore";


type CommentThreadProps = {
    threadId: string;
}

export default function CommentThread({ threadId }: CommentThreadProps) {
    const currentTool = useCurrToolStore((state) => state.currentTool);
    const setCurrentSelected = useCurrentSelectedStore.getState().setCurrentSelected;

    const thread = useThreadStore(state => state.threadsById[threadId]);
    if (!thread) return null;

    const { x, y, id, title, messagesId } = thread;
    const cam = useCanvasCameraStore((state) => state.cam);

    // Counter-scale so pin stays same size regardless of zoom
    const inverseScale = 1 / cam.scale;
    const pinSize = 32;
    const pinRadius = pinSize / 2;

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentTool !== "select") return;
        setCurrentSelected(id, "thread");
    };

    return (
        <div
            className="absolute cursor-pointer"
            style={{
                left: x - pinRadius,
                top: y - pinRadius,
                width: pinSize,
                height: pinSize,
                transform: `scale(${inverseScale})`,
                transformOrigin: 'center',
            }}
            onClick={handleClick}
            title={title || `Thread: ${messagesId.length} comments`}
        >
            {/* Pin circle with hover effect */}
            <div className="w-full h-full rounded-full bg-linear-to-br from-amber-400 to-orange-500 shadow-lg
                hover:from-amber-300 hover:to-orange-400 hover:shadow-xl hover:scale-110
                transition-all duration-200 ease-out
                flex items-center justify-center
                border-2 border-white/30">
                {/* Message count indicator */}
                <span className="text-white text-xs font-semibold drop-shadow-md">
                    {messagesId.length}
                </span>
            </div>
        </div>
    )
}
