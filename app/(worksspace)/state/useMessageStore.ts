import { create } from "zustand";
import { Message, MessageToDo } from "../type/Message";
import { generateId } from "../lib/generateId";
import { useThreadStore } from "./useThreadStore";


type MessageStore = {
    messagesById: Record<string, Message>;

    // Create
    addTextMessage: (threadId: string, text: string) => string;

    // Delete
    deleteMessage: (id: string) => boolean;

    // Update
    updateMessageTags: (id: string, tags: string[]) => boolean;
    updateText: (id: string, text: string) => boolean;         // for text + todo
    changeToTodo: (id: string) => boolean;
    changeTodoToText: (id: string) => boolean;
    updateTodoCompleted: (id: string, completed: boolean) => boolean;

    // Getters (imperative convenience)
    getMessage: (id: string) => Message | undefined;
    getMultiple: (ids: string[]) => Message[];
};

export const useMessageStore = create<MessageStore>((set, get) => ({
    messagesById: {},
    addTextMessage: (threadId, text) => {
        const id = generateId("message");
        const now = Date.now();
        const msg: Message = {
            id,
            tags: [],
            type: "text",
            createdAt: now,
            updatedAt: now,
            content: { text },
            threadId,
        };

        set((s) => ({ messagesById: { ...s.messagesById, [id]: msg } }));
        useThreadStore.getState().appendMessageId(threadId, id);
        return id;
    },
    deleteMessage: (id) => {
        const msg = get().messagesById[id];
        if (!msg) return false;

        set((s) => {
            const { [id]: _removed, ...rest } = s.messagesById;
            return { messagesById: rest };
        });

        useThreadStore.getState().removeMessageId(msg.threadId, id);
        return true;
    },
    updateMessageTags: (id, tags) => {
        const msg = get().messagesById[id];
        if (!msg) return false;

        set((s) => ({
            messagesById: {
                ...s.messagesById,
                [id]: { ...msg, tags, updatedAt: Date.now() },
            },
        }));
        return true;
    },
    updateText: (id, text) => {
        const msg = get().messagesById[id];
        if (!msg) return false;

        if (msg.type === "text") {
            set((s) => ({
                messagesById: {
                    ...s.messagesById,
                    [id]: { ...msg, content: { text }, updatedAt: Date.now() },
                },
            }));
            return true;
        }

        if (msg.type === "todo") {
            const todo = msg.content as MessageToDo;
            set((s) => ({
                messagesById: {
                    ...s.messagesById,
                    [id]: {
                        ...msg,
                        content: { ...todo, text },
                        updatedAt: Date.now(),
                    },
                },
            }));
            return true;
        }

        // image message has no text field
        return false;
    },
    changeToTodo: (id) => {
        const msg = get().messagesById[id];
        if (!msg || msg.type === "todo") return false;

        const now = Date.now();

        if (msg.type === "text") {
            const text = (msg.content as any).text ?? "";
            const next: Message = {
                ...msg,
                type: "todo",
                content: { text, image: "", completed: false },
                updatedAt: now,
            };
            set((s) => ({ messagesById: { ...s.messagesById, [id]: next } }));
            return true;
        }

        if (msg.type === "image") {
            const image = (msg.content as any).image ?? "";
            const next: Message = {
                ...msg,
                type: "todo",
                content: { text: "", image, completed: false },
                updatedAt: now,
            };
            set((s) => ({ messagesById: { ...s.messagesById, [id]: next } }));
            return true;
        }

        return false;
    },
    changeTodoToText: (id) => {
        const msg = get().messagesById[id];
        if (!msg || msg.type !== "todo") return false;

        const todo = msg.content as MessageToDo;
        const next: Message = {
            ...msg,
            type: "text",
            content: { text: todo.text },
            updatedAt: Date.now(),
        };

        set((s) => ({ messagesById: { ...s.messagesById, [id]: next } }));
        return true;
    },
    updateTodoCompleted: (id, completed) => {
        const msg = get().messagesById[id];
        if (!msg || msg.type !== "todo") return false;

        const todo = msg.content as MessageToDo;
        const next: Message = {
            ...msg,
            content: { ...todo, completed },
            updatedAt: Date.now(),
        };

        set((s) => ({ messagesById: { ...s.messagesById, [id]: next } }));
        return true;
    },

    getMessage: (id) => get().messagesById[id],

    getMultiple: (ids) => {
        const byId = get().messagesById;
        return ids.map((i) => byId[i]).filter(Boolean);
    },

}));