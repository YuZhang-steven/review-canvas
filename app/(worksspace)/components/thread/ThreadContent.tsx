"use client"
import { threadMap } from "../../dataStore/threadMap";
import { getMessageIdsByThreadId } from "../../lib/messageHelper";
import { useCurrentSelectedStore } from "../../state/useCurrentSelectedStore";
import AddMessageCard from "./AddMessageCard";
import FocusThreadButton from "./FocusThreadButton";
import MessageCard from "./MessageCard";


export default function ThreadContent() {
    const currentSelectedId = useCurrentSelectedStore(state => state.currentSelectedId)
    if (!currentSelectedId) return null;
    const thread = threadMap.get(currentSelectedId);
    if (!thread) return null;
    const { x, y, id, title, description } = thread;
    const messageIds = getMessageIdsByThreadId(id);

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-400">Located It</span>
                <FocusThreadButton />
            </div>
            <p>id</p>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            {messageIds.map((messageId) => (
                <MessageCard key={messageId} id={messageId} />
            ))}
            <AddMessageCard />
            {/* <p>location</p>
            <p>{x}, {y}</p> */}
        </div>


    )
}
