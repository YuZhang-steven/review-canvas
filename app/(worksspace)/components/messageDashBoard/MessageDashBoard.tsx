import { useState } from "react";
import FilterBar from "./FilterBar";
import MessageList from "./MessageList";


export default function MessageDashBoard() {
    const [activeFilter, setActiveFilter] = useState<'all' | 'Open' | 'Resolved'>('all')
    return (
        <div id="message-dashboard"
            className="flex flex-col h-full gap-4"
        >
            <div className="flex flex-row gap-2 w-full justify-center
             items-center text-2xl font-bold text-blue-600 shrink-0">
                All Comments
            </div>
            <div className="shrink-0">
                <FilterBar
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
            </div>
            <div className="flex-1 overflow-y-auto">
                <MessageList
                    activeFilter={activeFilter}
                />
            </div>

        </div>
    )
}
