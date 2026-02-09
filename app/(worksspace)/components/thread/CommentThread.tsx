import { threadMap } from "../../dataStore/threadMap";

type CommentThreadProps = {
    threadId: string;
}
export default function CommentThread({ threadId }: CommentThreadProps) {
    const thread = threadMap.get(threadId);
    if (!thread) return null;
    const { x, y, id, title, description, messages } = thread;
    return (
        <div
            className="absolute"
            style={{
                left: x,
                top: y,
            }}
        >{x},{y}</div>
    )
}
