"use client"

import { useMessageStore } from "@/app/(worksspace)/state/useMessageStore";
import { MessageImage, MessageText, MessageToDo } from "@/app/(worksspace)/type/Message";
import { useState, useRef, useEffect } from "react";

type MsgTextEditProps = {
    type: "text" | "todo" | "image";
    content: MessageText | MessageToDo | MessageImage;
    id: string;
    setIsEditing: (isEditing: boolean) => void;
}

export default function MsgTextEdit({ type, id, setIsEditing, content }: MsgTextEditProps) {
    // Get the text content based on message type
    const getCurrentText = () => {
        if (type === "text") {
            return (content as MessageText).text;
        } else if (type === "todo") {
            return (content as MessageToDo).text;
        }
        return "";
    };
    const [editText, setEditText] = useState(getCurrentText());
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const { updateText } = useMessageStore();

    // Focus textarea when component mounts
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
            textareaRef.current.setSelectionRange(
                textareaRef.current.value.length,
                textareaRef.current.value.length
            );
        }
    }, []);
    const handleSaveEdit = (newText: string) => {
        updateText(id, newText);
        setIsEditing(false);
    };
    const handleCancelEdit = () => {
        setIsEditing(false);
    };


    const handleSave = () => {
        const trimmedText = editText.trim();
        if (trimmedText !== getCurrentText().trim()) {
            handleSaveEdit(trimmedText);
        } else {
            handleCancelEdit();
        }
    };


    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSave();
        } else if (e.key === "Escape") {
            handleCancelEdit();
        }
    };


    return (
        <textarea
            ref={textareaRef}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="w-full p-2 text-gray-800 border border-blue-300 rounded resize-none focus:outline-none focus:border-blue-500 whitespace-pre-wrap"
            rows={Math.min(Math.max(editText.split('\n').length, 2), 10)}
        />
    );
}

