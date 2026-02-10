
import { focusThread } from "../../lib/cameraHelper";
import { useCanvasCameraStore } from "../../state/useCanvasCameraStore";
import { useCurrentSelectedStore } from "../../state/useCurrentSelectedStore";
import { useThreadStore } from "../../state/useThreadStore";
import { Message } from "../../type/Message";
import TodoButton from "../TodoButton";

type MessageListCardProps = {
    message: Message;
    id: string;
}
export default function MessageListCard({ id, message }: MessageListCardProps) {
    const { type, content, updatedAt, threadId } = message;
    const thread = useThreadStore(state => state.threadsById[threadId]);
    const cam = useCanvasCameraStore((state) => state.cam);
    const setCam = useCanvasCameraStore((state) => state.setCam);
    const setCurrentSelected = useCurrentSelectedStore.getState().setCurrentSelected;

    const idCut = threadId?.match(/^thread-([^-]+)-/);
    const threadIdCutted = idCut ? idCut[1] : "";

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setCurrentSelected(threadId, "thread");
        focusThread({ thread, cam, setCam })
    }

    return (
        <div
            key={id}
            className={`
                    p-4 rounded-lg border transition-colors cursor-pointer      
                    bg-white border-gray-200 hover:bg-gray-50
                    `}
            onClick={handleClick}
        >
            <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-800">{threadIdCutted}</span>
                <span className="text-xs text-gray-400">{
                    new Date(updatedAt).toLocaleString()
                }</span>
            </div>
            <div className="flex items-center justify-between mb-1">
                {
                    type === 'text' && (
                        <p className="text-sm text-gray-500 line-clamp-1">{content.text}</p>
                    )
                }
                {
                    type === 'todo' && (
                        <div className="flex items-start gap-2">
                            <TodoButton completed={content.completed} id={id} />
                            <p className="text-sm text-gray-500 line-clamp-1">{content.text}</p>
                        </div>
                    )
                }

            </div>

        </div>
    )
}
