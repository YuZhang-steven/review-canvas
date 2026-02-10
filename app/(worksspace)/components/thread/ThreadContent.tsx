"use client"

import { useCurrentSelectedStore } from "../../state/useCurrentSelectedStore";
import { useThreadStore } from "../../state/useThreadStore";
import AddMessageCard from "./AddMessageCard";
import FocusThreadButton from "./FocusThreadButton";
import MessageCard from "./messageCard/MessageCard";


export default function ThreadContent() {
    const currentSelectedId = useCurrentSelectedStore(state => state.currentSelectedId)
    const thread = useThreadStore(state => state.threadsById[currentSelectedId ?? ""]);
    const idCut = currentSelectedId?.match(/^thread-([^-]+)-/);
    const id = idCut ? idCut[1] : "";


    const messageIds = thread.messagesId

    return (
        <div id="thread-content" className="flex flex-col h-full justify-between pb-8">
            <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <p className="
                    text-2xl font-bold text-blue-600 
                    ">
                        Thread: {id}
                    </p>
                    <FocusThreadButton />
                </div>




                <div id="thread-content-messages" className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="flex flex-col gap-3">
                        {messageIds.map((messageId) => (
                            <MessageCard key={messageId} id={messageId} />
                        ))}
                    </div>
                </div>
            </div>


            <AddMessageCard />
        </div>
    )
}
