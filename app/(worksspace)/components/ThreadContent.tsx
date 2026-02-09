"use client"
import { threadMap } from "../dataStore/threadMap";
import { useCurrentSelectedStore } from "../state/useCurrentSelectedStore";
import FocusThreadButton from "./FocusThreadButton";


export default function ThreadContent() {
    const currentSelectedId = useCurrentSelectedStore(state => state.currentSelectedId)
    if (!currentSelectedId) return null;
    const thread = threadMap.get(currentSelectedId);
    if (!thread) return null;
    const { x, y, id, title, description } = thread;

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-blue-400">Located It</span>
                <FocusThreadButton />
            </div>
            <p>id</p>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>location</p>
            <p>{x}, {y}</p>
        </div>


    )
}
