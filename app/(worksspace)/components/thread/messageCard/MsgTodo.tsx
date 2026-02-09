"use client"

import { useMessageStore } from "@/app/(worksspace)/state/useMessageStore";
import { MessageToDo } from "@/app/(worksspace)/type/Message";

type MsgTodoProps = {
    id: string;
    content: MessageToDo;
}

export default function MsgTodo({ id, content }: MsgTodoProps) {
    const { updateTodoCompleted } = useMessageStore();
    const completed = content.completed;

    const handleToggle = () => {
        updateTodoCompleted(id, !completed);
    };

    return (
        <div className="flex items-start gap-2">
            {/* Circle checkbox */}
            <button
                onClick={handleToggle}
                className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${completed
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300 hover:border-gray-400"
                    }`}
            >
                {completed && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                )}
            </button>

            {/* Text */}
            <p className={`flex-1 text-gray-800 ${completed ? "line-through text-gray-400" : ""}`}>
                {content.text}
            </p>
        </div>
    );
}
