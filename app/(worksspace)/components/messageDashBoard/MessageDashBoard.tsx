import { useState } from "react";
import FilterBar from "./FilterBar";
import MessageList from "./MessageList";


export default function MessageDashBoard() {
    const [activeFilter, setActiveFilter] = useState<'all' | 'Open' | 'Resolved'>('all')
    return (
        <div id="message-dashboard"
            className="flex flex-col gap-4 py-4"
        >
            <div className="flex flex-row gap-2 w-full justify-center
             items-center text-2xl font-bold text-blue-600
             ">
                All Comments
            </div>
            <FilterBar
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <MessageList
                activeFilter={activeFilter}
            />

        </div>
    )
}
