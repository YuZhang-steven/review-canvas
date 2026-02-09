"use client"

import MessageListCard from "./MessageListCard"

type MessageListProps = {
    activeFilter: 'all' | 'Open' | 'Resolved'
}

export default function MessageList({ activeFilter }: MessageListProps) {



    return (
        <div id="message-list" className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex flex-col gap-2">
                {messages.map((message) => (
                    <MessageListCard key={message.id} message={message} />
                ))}
            </div>
        </div>
    )
}
