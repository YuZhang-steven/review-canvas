import { create } from "zustand";

type MessageStore = {
    messageIds: string[];
    setMessageIds: (ids: string[]) => void;
    addMessageId: (id: string) => void;
    removeMessageId: (id: string) => void;
}

export const useMessageStore = create<MessageStore>((set) => ({
    messageIds: [],
    setMessageIds: (ids) => set({ messageIds: ids }),
    addMessageId: (id) => set((state) => ({ messageIds: [...state.messageIds, id] })),
    removeMessageId: (id) => set((state) => ({ messageIds: state.messageIds.filter((messageId) => messageId !== id) })),
}));