"use client"
import { PlusIcon } from "lucide-react";
import MessageCardWrapper from "./MessageCardWrapper";

export default function AddMessageCard() {
    return (
        <MessageCardWrapper>
            <button
                id="add-message-card"
                className="
                    w-full p-3 rounded-lg border-2 border-dashed border-blue-500
                    flex items-center justify-center gap-2
                    text-blue-500 hover:text-blue-400
                    hover:border-blue-400 hover:bg-white/20
                    transition-all duration-200
                "
            >
                <PlusIcon size={18} />
                <span className="font-medium">Add Message</span>
            </button>
        </MessageCardWrapper>
    );
}
