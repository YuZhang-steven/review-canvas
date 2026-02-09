
import { Message } from "../../type/Message";
import TodoButton from "../TodoButton";

type MessageListCardProps = {
    message: Message;
    id: string;
}
export default function MessageListCard({ id, message }: MessageListCardProps) {
    const { type, content, updatedAt, threadId } = message;



    return (
        <div
            key={id}
            className={`
                    p-4 rounded-lg border transition-colors cursor-pointer      
                    bg-white border-gray-200 hover:bg-gray-50
                    `}
        >
            <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-gray-800">{threadId}</span>
                <span className="text-xs text-gray-400">{updatedAt}</span>
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
