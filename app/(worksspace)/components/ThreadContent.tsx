"use client"
import { threadMap } from "../dataStore/threadMap";
import { useCurrentSelectedStore } from "../state/useCurrentSelectedStore";


export default function ThreadContent() {
    const currentSelectedId = useCurrentSelectedStore(state => state.currentSelectedId)
    if (!currentSelectedId) return null;
    const thread = threadMap.get(currentSelectedId);
    if (!thread) return null;
    const { x, y, id, title, description, messages } = thread;
    return (
        <div>
            <p>id</p>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>location</p>
            <p>{x}, {y}</p>
        </div>


    )
}
