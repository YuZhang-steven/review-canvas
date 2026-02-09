"use client"

import React from 'react'

export default function MessageList() {
    // Placeholder message data
    const messages = [
        { id: '1', title: 'Welcome Message', preview: 'Welcome to the messaging system...', time: '2m ago', unread: true },
        { id: '2', title: 'Project Update', preview: 'The project has been updated with new features...', time: '1h ago', unread: false },
        { id: '3', title: 'Review Request', preview: 'Please review the latest changes...', time: '3h ago', unread: true },
    ]

    return (
        <div id="message-list" className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex flex-col gap-2">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`
                            p-4 rounded-lg border transition-colors cursor-pointer
                            ${message.unread
                                ? 'bg-blue-50 border-blue-200 hover:bg-blue-100'
                                : 'bg-white border-gray-200 hover:bg-gray-50'
                            }
                        `}
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-semibold text-gray-800">{message.title}</span>
                            <span className="text-xs text-gray-400">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-1">{message.preview}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
