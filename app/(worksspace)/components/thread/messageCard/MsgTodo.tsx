"use client"


import { MessageToDo } from "@/app/(worksspace)/type/Message";
import TodoButton from "../../TodoButton";

type MsgTodoProps = {
    id: string;
    content: MessageToDo;
}

export default function MsgTodo({ id, content }: MsgTodoProps) {
    const completed = content.completed;

    return (
        <div className="flex items-start gap-2">
            {/* Circle checkbox */}
            <TodoButton completed={completed} id={id} />

            {/* Text */}
            <p className={`flex-1 text-gray-800 ${completed ? "line-through text-gray-400" : ""}`}>
                {content.text}
            </p>
        </div>
    );
}
