"use client"
import { getMessageIdsByThreadId } from "../../lib/messageHelper";
import { useCurrentSelectedStore } from "../../state/useCurrentSelectedStore";
import { useThreadStore } from "../../state/useThreadStore";
import AddMessageCard from "./AddMessageCard";
import FocusThreadButton from "./FocusThreadButton";
import MessageCard from "./MessageCard";


export default function ThreadContent() {
    const currentSelectedId = useCurrentSelectedStore(state => state.currentSelectedId)
    const thread = useThreadStore(state => state.threadsById[currentSelectedId ?? ""]);
    if (!thread) return null;
    const { x, y, id, title, description } = thread;

    const messageIds = getMessageIdsByThreadId(id);

    return (
        <div id="thread-content" className="flex flex-col h-full justify-between pb-8">
            <div>
                <div className="shrink-0">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-blue-400">Located It</span>
                        <FocusThreadButton />
                    </div>

                    <p>id</p>
                    <p>{id}</p>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
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
