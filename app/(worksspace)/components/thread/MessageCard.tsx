"use client"

import { useMessageStore } from "../../state/useMessageStore";
import { MessageImage, MessageText, MessageToDo } from "../../type/Message";
import MsgCardFoot from "./messageCard/MsgCardFoot";
import MsgImage from "./messageCard/MsgImage";
import MsgText from "./messageCard/MsgText";
import MsgTodo from "./messageCard/MsgTodo";
import MessageCardWrapper from "./MessageCardWrapper";

type MessageCardProps = {
    id: string;
}

export default function MessageCard({ id }: MessageCardProps) {
    const message = useMessageStore(state => state.messagesById[id]);
    if (!message) return null;

    const { type, content, createdAt, tags } = message;

    return (
        <MessageCardWrapper>
            <div id="message-card" className="px-2 pt-3 flex flex-col gap-2
             bg-white rounded-lg border border-gray-200 shadow-sm">

                {/* Message Content */}
                {type === 'text' && (
                    <MsgText content={content as MessageText} />
                )}
                {type === 'image' && (
                    <MsgImage content={content as MessageImage} />
                )}
                {type === 'todo' && (
                    <MsgTodo content={content as MessageToDo} />
                )}
                <MsgCardFoot tags={tags} createdAt={createdAt} />
            </div>
        </MessageCardWrapper>
    );
}
