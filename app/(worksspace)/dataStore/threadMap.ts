import { generateId } from "../lib/generateId";
import { Thread } from "../type/comment";
import { useThreadStore } from "../state/useThreadStore";

export class ThreadMap {
  private store: Map<string, Thread>;

  constructor() {
    this.store = new Map();
  }

  add(x: number, y: number, linkItem?: string): void {
    const id = generateId("thread");
    const thread: Thread = {
      x,
      y,
      linkItem: linkItem ?? "",
      id,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      title: "",
      description: "",
      messages: [],
    };
    this.store.set(thread.id, thread);
    useThreadStore.getState().addThreadId(id);
  }

  get(id: string): Thread | undefined {
    return this.store.get(id);
  }

  delete(id: string): boolean {
    const deleted = this.store.delete(id);
    if (deleted) {
      useThreadStore.getState().removeThreadId(id);
    }
    return deleted;
  }
}