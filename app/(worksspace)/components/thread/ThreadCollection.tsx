import { useThreadStore } from "../../state/useThreadStore";
import CommentThread from "./CommentThread";

export default function ThreadCollection() {
    const threadIds = useThreadStore(state => state.threadIds);

    return (
        threadIds.map(
            (threadId) => (
                <CommentThread key={threadId} threadId={threadId} />
            )
        )

    )
}
