"use client"
import { useState } from "react";
import { SendIcon } from "lucide-react";
import { createMessage } from "../../lib/messageHelper";
import { useCurrentSelectedStore } from "../../state/useCurrentSelectedStore";

export default function AddMessageCard() {
    const [text, setText] = useState("");
    const currentSelectedId = useCurrentSelectedStore(state => state.currentSelectedId);

    const handleSubmit = () => {
        if (!text.trim() || !currentSelectedId) return;

        createMessage(currentSelectedId, text.trim());
        setText("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className="sticky bottom-0 pt-3 pb-1 ">
            <div className="flex items-end gap-2">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className="
                        flex-1 resize-none overflow-hidden
                        px-4 py-2.5 rounded-full
                        bg-gray-100 border border-transparent
                        focus:outline-none focus:border-blue-500 focus:bg-white
                        placeholder:text-gray-400
                        text-gray-800
                        min-h-[40px] max-h-[120px]
                        scrollbar-hide
                    "
                    rows={1}
                    style={{
                        height: "auto",
                        minHeight: "40px"
                    }}
                />
                <button
                    onClick={handleSubmit}
                    disabled={!text.trim()}
                    className="
                        p-2.5 rounded-full
                        bg-blue-500 text-white
                        hover:bg-blue-600
                        disabled:opacity-50 disabled:cursor-not-allowed
                        disabled:hover:bg-blue-500
                        transition-all duration-200
                        flex items-center justify-center
                    "
                >
                    <SendIcon size={18} />
                </button>
            </div>
        </div>
    );
}
