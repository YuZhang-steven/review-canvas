"use client"

import { useMessageStore } from "../../../state/useMessageStore";
import { MessageImage, MessageText, MessageToDo } from "../../../type/Message";
import MsgCardFoot from "./MsgCardFoot";
import MsgImage from "./MsgImage";
import MsgText from "./MsgText";
import MsgTodo from "./MsgTodo";
import MessageCardWrapper from "../MessageCardWrapper";
import MsgTagsHead from "./MsgTagsHead";

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

                <MsgTagsHead id={id} tags={tags} />
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
                <MsgCardFoot id={id} createdAt={createdAt} />
            </div>
        </MessageCardWrapper>
    );
}
