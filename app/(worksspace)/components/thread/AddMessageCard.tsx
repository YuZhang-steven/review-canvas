"use client"
import { PlusIcon } from "lucide-react";
import MessageCardWrapper from "./MessageCardWrapper";

export default function AddMessageCard() {
    return (
        <MessageCardWrapper>
            <button
                id="add-message-card"
                className="
                    w-full p-3 rounded-lg border-2 border-dashed border-gray-300
                    flex items-center justify-center gap-2
                    text-gray-500 hover:text-gray-700
                    hover:border-gray-400 hover:bg-gray-50
                    transition-all duration-200
                "
            >
                <PlusIcon size={18} />
                <span className="font-medium">Add Message</span>
            </button>
        </MessageCardWrapper>
    );
}
