import { create } from "zustand";

interface ThreadStore {
  threadIds: string[];
  setThreadIds: (ids: string[]) => void;
  addThreadId: (id: string) => void;
  removeThreadId: (id: string) => void;
}

export const useThreadStore = create<ThreadStore>((set) => ({
  threadIds: [],
  setThreadIds: (ids) => set({ threadIds: ids }),
  addThreadId: (id) =>
    set((state) => ({
      threadIds: [...state.threadIds, id],
    })),
  removeThreadId: (id) =>
    set((state) => ({
      threadIds: state.threadIds.filter((threadId) => threadId !== id),
    })),
}));

