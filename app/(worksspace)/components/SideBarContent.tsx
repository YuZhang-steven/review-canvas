import { useCurrentSelectedStore } from "../state/useCurrentSelectedStore";
import MessageDashBoard from "./messageDashBoard/MessageDashBoard";
import ThreadContent from "./thread/ThreadContent";

export default function SideBarContent() {
    const currentSelectedType = useCurrentSelectedStore(state => state.currentSelectedType);
    console.log("currentSelectedType", currentSelectedType);

    if (currentSelectedType === "thread") {
        return <ThreadContent />
    }
    else {
        return <MessageDashBoard />
    }

}
