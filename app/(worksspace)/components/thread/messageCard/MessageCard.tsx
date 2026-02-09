"use client"

import { useState } from "react";
import { useMessageStore } from "../../../state/useMessageStore";
import { MessageImage, MessageText, MessageToDo } from "../../../type/Message";
import MsgCardFoot from "./MsgCardFoot";
import MsgImage from "./MsgImage";
import MsgText from "./MsgText";
import MsgTodo from "./MsgTodo";
import MessageCardWrapper from "../MessageCardWrapper";
import MsgTagsHead from "./MsgTagsHead";
import MsgTextEdit from "./MsgTextEdit";

type MessageCardProps = {
    id: string;
}

export default function MessageCard({ id }: MessageCardProps) {
    const message = useMessageStore(state => state.messagesById[id]);
    if (!message) return null;

    const { type, content, createdAt, tags } = message;
    const [isEditing, setIsEditing] = useState(false);

    return (
        <MessageCardWrapper>
            <div id="message-card" className="px-2 pt-3 flex flex-col gap-2
             bg-white rounded-lg border border-gray-200 shadow-sm">

                <MsgTagsHead id={id} tags={tags} />
                {/* Message Content */}
                {isEditing ? (
                    <MsgTextEdit
                        id={id}
                        type={type}
                        content={content}
                        setIsEditing={setIsEditing}
                    />
                ) : (
                    <>
                        {type === 'text' && (
                            <MsgText content={content as MessageText} />
                        )}
                        {type === 'image' && (
                            <MsgImage content={content as MessageImage} />
                        )}
                        {type === 'todo' && (
                            <MsgTodo id={id} content={content as MessageToDo} />
                        )}
                    </>
                )}
                <MsgCardFoot
                    id={id}
                    setIsEditing={setIsEditing}
                    createdAt={createdAt}
                />
            </div>
        </MessageCardWrapper>
    );
}
