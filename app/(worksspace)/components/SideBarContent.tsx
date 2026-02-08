import { useCurrentSelectedStore } from "../state/useCurrentSelectedStore";
import ThreadContent from "./ThreadContent";

export default function SideBarContent() {
    const currentSelectedType = useCurrentSelectedStore(state => state.currentSelectedType);
    if (currentSelectedType === "thread") {
        return <ThreadContent />
    }
    return (

        <div>SideBarContent</div>
    )
}
