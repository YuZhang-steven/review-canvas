"use client"

import { useState, useRef, useEffect } from "react";
import { Plus, X } from "lucide-react";
import { useMessageStore } from "../../../state/useMessageStore";

type MsgTagsHeadProps = {
    id: string;
    tags: string[];
}

const MAX_DISPLAY_TAGS = 3; // Max tags to show before truncation

export default function MsgTagsHead({ id, tags = [] }: MsgTagsHeadProps) {
    const [isAddingTag, setIsAddingTag] = useState(false);
    const [newTagInput, setNewTagInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const { updateMessageTags } = useMessageStore();

    useEffect(() => {
        if (isAddingTag && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isAddingTag]);

    const handleAddTag = () => {
        if (newTagInput.trim()) {
            const updatedTags = [...tags, newTagInput.trim()];
            updateMessageTags(id, updatedTags);
            setNewTagInput("");
        }
        setIsAddingTag(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddTag();
        } else if (e.key === "Escape") {
            setIsAddingTag(false);
            setNewTagInput("");
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        const updatedTags = tags.filter(tag => tag !== tagToRemove);
        updateMessageTags(id, updatedTags);
    };

    const visibleTags = tags.slice(0, MAX_DISPLAY_TAGS);
    const hiddenCount = tags.length - MAX_DISPLAY_TAGS;

    return (
        <div className="flex items-center gap-1 overflow-hidden">
            {/* Add Tag Button / Input */}
            {isAddingTag ? (
                <div className="flex items-center gap-1">
                    <input
                        ref={inputRef}
                        type="text"
                        value={newTagInput}
                        onChange={(e) => setNewTagInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onBlur={handleAddTag}
                        placeholder="Tag name"
                        className="text-xs px-1.5 py-0.5 border border-blue-300 rounded focus:outline-none focus:border-blue-500 w-20"
                    />
                </div>
            ) : (
                <button
                    onClick={() => setIsAddingTag(true)}
                    className="shrink-0 p-0.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded transition-colors"
                    title="Add tag"
                >
                    <Plus size={14} />
                </button>
            )}

            {/* Visible Tags */}
            {visibleTags.map((tag, index) => (
                <span
                    key={tag}
                    className="shrink-0 flex items-center gap-0.5 text-xs px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded group"
                >
                    {tag}
                    <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-0.5 p-0 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <X size={10} />
                    </button>
                </span>
            ))}

            {/* Truncation indicator */}
            {hiddenCount > 0 && (
                <span className="shrink-0 text-xs text-gray-400">
                    +{hiddenCount} more
                </span>
            )}
        </div>
    );
}
