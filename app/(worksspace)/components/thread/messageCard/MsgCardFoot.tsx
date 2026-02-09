"use client"

import { useState } from "react";
import { Pencil, Trash2, Layers } from "lucide-react";
import { useMessageStore } from "../../../state/useMessageStore";

type MsgCardFootProps = {
    id: string;

    createdAt: number;
}

export default function MsgCardFoot({ id, createdAt }: MsgCardFootProps) {
    const [isHovered, setIsHovered] = useState(false);

    const { deleteMessage, updateText, changeToTodo, changeTodoToText } = useMessageStore();

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this message?")) {
            deleteMessage(id);
        }
    };

    const handleEditText = () => {
        const message = useMessageStore.getState().getMessage(id);
        if (!message) return;

        let currentText = "";
        if (message.type === "text") {
            currentText = (message.content as { text: string }).text;
        } else if (message.type === "todo") {
            currentText = (message.content as { text: string }).text;
        }

        const newText = prompt("Edit message:", currentText);
        if (newText !== null && newText !== currentText) {
            updateText(id, newText);
        }
    };

    const handleChangeType = () => {
        const message = useMessageStore.getState().getMessage(id);
        if (!message) return;

        if (message.type === "text" || message.type === "image") {
            changeToTodo(id);
        } else if (message.type === "todo") {
            changeTodoToText(id);
        }
    };

    return (
        <div
            className="flex items-center justify-between mb-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Left side: Date and Tags */}
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">
                    {new Date(createdAt).toLocaleString()}
                </span>

            </div>

            {/* Toolbar - shown on hover */}
            <div className={`flex items-center gap-1 transition-opacity duration-200 ${isHovered ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                {/* Change Type Button */}
                <button
                    onClick={handleChangeType}
                    className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    title="Change message type"
                >
                    <Layers size={14} />
                </button>

                {/* Edit Text Button */}
                <button
                    onClick={handleEditText}
                    className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                    title="Edit text"
                >
                    <Pencil size={14} />
                </button>

                {/* Delete Button */}
                <button
                    onClick={handleDelete}
                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                    title="Delete message"
                >
                    <Trash2 size={14} />
                </button>
            </div>
        </div>
    );
}
