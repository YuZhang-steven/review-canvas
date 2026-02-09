import FilterBar from "./FilterBar";
import MessageList from "./MessageList";


export default function MessageDashBoard() {
    return (
        <div id="message-dashboard"
            className="flex flex-col gap-4 py-4"
        >
            <FilterBar />
            <MessageList />

        </div>
    )
}
