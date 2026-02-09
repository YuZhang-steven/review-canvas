import { create } from "zustand";
import { Thread } from "../type/Thread";
import { generateId } from "../lib/generateId";

type ThreadStore = {

  threadsById: Record<string, Thread>;
  threadIds: string[];


  addThread: (x: number, y: number, linkItem?: string) => string;
  getThread: (id: string) => Thread | undefined; // mostly for imperative use
  deleteThread: (id: string) => boolean;

  // updates
  appendMessageId: (threadId: string, messageId: string) => void;
  removeMessageId: (threadId: string, messageId: string) => void;
  updateThreadMeta: (
    id: string,
    patch: Partial<Pick<Thread, "title" | "description" | "linkItem">>
  ) => void;
  setThreadPosition: (id: string, x: number, y: number) => void;
};


export const useThreadStore = create<ThreadStore>((set, get) => ({
  threadsById: {},
  threadIds: [],
  addThread: (x, y, linkItem) => {
    const id = generateId("thread");
    const now = Date.now();
    const thread: Thread = {
      x,
      y,
      linkItem: linkItem ?? "",
      id,
      createdAt: now,
      updatedAt: now,
      title: "",
      description: "",
      messagesId: [],
    };

    set((s) => ({
      threadsById: { ...s.threadsById, [id]: thread },
      threadIds: [...s.threadIds, id],
    }));

    return id;
  },
  getThread: (id) => get().threadsById[id],
  deleteThread: (id) => {
    const exists = !!get().threadsById[id];
    if (!exists) return false;

    set((s) => {
      const { [id]: _removed, ...rest } = s.threadsById;
      return {
        threadsById: rest,
        threadIds: s.threadIds.filter((tid) => tid !== id),
      };
    });

    return true;
  },
  appendMessageId: (threadId, messageId) =>
    set((s) => {
      const t = s.threadsById[threadId];
      if (!t) return s;
      return {
        threadsById: {
          ...s.threadsById,
          [threadId]: {
            ...t,
            updatedAt: Date.now(),
            messagesId: [...t.messagesId, messageId],
          },
        },
      };
    }),

  removeMessageId: (threadId, messageId) =>
    set((s) => {
      const t = s.threadsById[threadId];
      if (!t) return s;
      return {
        threadsById: {
          ...s.threadsById,
          [threadId]: {
            ...t,
            updatedAt: Date.now(),
            messagesId: t.messagesId.filter((mid) => mid !== messageId),
          },
        },
      };
    }),
  updateThreadMeta: (id, patch) =>
    set((s) => {
      const t = s.threadsById[id];
      if (!t) return s;
      return {
        threadsById: {
          ...s.threadsById,
          [id]: { ...t, ...patch, updatedAt: Date.now() },
        },
      };
    }),
  setThreadPosition: (id, x, y) =>
    set((s) => {
      const t = s.threadsById[id];
      if (!t) return s;
      return {
        threadsById: {
          ...s.threadsById,
          [id]: { ...t, x, y, updatedAt: Date.now() },
        },
      };
    }),
}));

