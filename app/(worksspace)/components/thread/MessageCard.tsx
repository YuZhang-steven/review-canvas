"use client"
import { getMessage } from "../../lib/messageHelper";
import MessageCardWrapper from "./MessageCardWrapper";

type MessageCardProps = {
    id: string;
}

export default function MessageCard({ id }: MessageCardProps) {
    const message = getMessage(id);
    if (!message) return null;

    const { type, content, createdAt } = message;

    return (
        <MessageCardWrapper>
            <div id="message-card" className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                {/* Message Type Badge */}
                <div className="flex items-center gap-2 mb-2">
                    <span className={`
                        text-xs px-2 py-0.5 rounded-full font-medium
                        ${type === 'text' ? 'bg-blue-100 text-blue-700' : ''}
                        ${type === 'image' ? 'bg-purple-100 text-purple-700' : ''}
                        ${type === 'todo' ? 'bg-orange-100 text-orange-700' : ''}
                    `}>
                        {type}
                    </span>
                    <span className="text-xs text-gray-400">
                        {new Date(createdAt).toLocaleString()}
                    </span>
                </div>

                {/* Message Content */}
                {type === 'text' && (
                    <p className="text-gray-800 whitespace-pre-wrap">
                        {(content as { text: string }).text}
                    </p>
                )}

                {type === 'image' && (
                    <div>
                        <img
                            src={(content as { image: string }).image}
                            alt="Message attachment"
                            className="max-w-full rounded-lg border border-gray-200"
                        />
                    </div>
                )}

                {type === 'todo' && (
                    <div className="space-y-2">
                        <p className="text-gray-800">
                            {(content as { text: string }).text}
                        </p>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={(content as { completed: boolean }).completed}
                                readOnly
                                className="w-4 h-4 rounded border-gray-300"
                            />
                            <span className="text-sm text-gray-600">
                                {(content as { completed: boolean }).completed ? 'Completed' : 'Pending'}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </MessageCardWrapper>
    );
}
