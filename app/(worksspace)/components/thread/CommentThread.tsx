import { threadMap } from "../../dataStore/threadMap";
import { useCanvasCameraStore } from "../../state/useCanvasCameraStore";

type CommentThreadProps = {
    threadId: string;
}

export default function CommentThread({ threadId }: CommentThreadProps) {
    const thread = threadMap.get(threadId);
    if (!thread) return null;

    const { x, y, id, title, messages } = thread;
    const cam = useCanvasCameraStore((state) => state.cam);

    // Counter-scale so pin stays same size regardless of zoom
    const inverseScale = 1 / cam.scale;
    const pinSize = 32;
    const pinRadius = pinSize / 2;

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        console.log('Thread clicked:', id);
        // TODO: Add click handler
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
            title={title || `Thread: ${messages.length} comments`}
        >
            {/* Pin circle with hover effect */}
            <div className="w-full h-full rounded-full bg-linear-to-br from-amber-400 to-orange-500 shadow-lg
                hover:from-amber-300 hover:to-orange-400 hover:shadow-xl hover:scale-110
                transition-all duration-200 ease-out
                flex items-center justify-center
                border-2 border-white/30">
                {/* Message count indicator */}
                <span className="text-white text-xs font-semibold drop-shadow-md">
                    {messages.length}
                </span>
            </div>
        </div>
    )
}
