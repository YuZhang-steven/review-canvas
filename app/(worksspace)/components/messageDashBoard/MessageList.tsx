"use client"

import { useEffect, useState } from "react";
import { useMessageStore } from "../../state/useMessageStore";
import MessageListCard from "./MessageListCard"
import { Message } from "../../type/Message";

type MessageListProps = {
    activeFilter: 'all' | 'Open' | 'Resolved'
}

export default function MessageList({ activeFilter }: MessageListProps) {
    const messageRecords = useMessageStore(state => state.messagesById);
    const [messages, setMessages] = useState<Message[]>([]);
    const [allMessages, setAllMessages] = useState<Message[]>([]);
    const [openMessages, setOpenMessages] = useState<Message[]>([]);
    const [resolvedMessages, setResolvedMessages] = useState<Message[]>([]);

    useEffect(() => {
        const allMessages = Object.values(messageRecords);
        const openMessages = allMessages.filter(message => (
            message.type === "todo" && (message.content as any).completed === false
        ));
        const resolvedMessages = allMessages.filter(message => (
            message.type === "todo" && (message.content as any).completed === true
        ));

        setAllMessages(allMessages);
        setOpenMessages(openMessages);
        setResolvedMessages(resolvedMessages);

    }, [messageRecords]);




    return (
        <div id="message-list" className="flex-1 overflow-y-auto custom-scrollbar pr-2">
            <div className="flex flex-col gap-3">
                {
                    activeFilter === 'all' && (
                        allMessages.map((message) => (
                            <MessageListCard
                                key={message.id}
                                id={message.id}
                                message={message}
                            />
                        ))
                    )
                }
                {
                    activeFilter === 'Open' && (
                        openMessages.map((message) => (
                            <MessageListCard
                                key={message.id}
                                id={message.id}
                                message={message}
                            />
                        ))
                    )
                }
                {
                    activeFilter === 'Resolved' && (
                        resolvedMessages.map((message) => (
                            <MessageListCard
                                key={message.id}
                                id={message.id}
                                message={message}
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
}
