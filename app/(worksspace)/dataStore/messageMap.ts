import { generateId } from "../lib/generateId";
import { Message } from "../type/Message";

export class MessageMap {
    private store: Map<string, Message>;

    constructor() {
        this.store = new Map();
    }
    add(text: string, threadId: string): string {
        const id = generateId("message");
        const message: Message = {
            id,
            type: "text",
            createdAt: Date.now(),
            updatedAt: Date.now(),
            content: { text },
            threadId: threadId,
            tags: [],
        };
        this.store.set(message.id, message);
        return message.id;

    }
    update({ id, content, threadId, tags }: Message): boolean {
        const message = this.store.get(id);
        if (!message) return false;
        message.content = content;
        message.threadId = threadId;
        message.tags = tags;
        message.updatedAt = Date.now();
        this.store.set(id, message);
        return true;

    }
    delete(id: string): boolean {
        const message = this.store.get(id);
        if (!message) return false;
        this.store.delete(id);
        return true;
    }
    get(id: string): Message | undefined {
        return this.store.get(id);
    }
    size(): number {
        return this.store.size;
    }
}

export const messageMap = new MessageMap();