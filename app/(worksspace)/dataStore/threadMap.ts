import { generateId } from "../lib/generateId";
import { Thread } from "../type/Thread";

export class ThreadMap {
  private store: Map<string, Thread>;

  constructor() {
    this.store = new Map();
  }

  add(x: number, y: number, linkItem?: string): string {
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
      messagesId: [],
    };
    this.store.set(thread.id, thread);
    return id;
  }

  get(id: string): Thread | undefined {
    return this.store.get(id);
  }


  delete(id: string): boolean {
    const deleted = this.store.delete(id);
    return deleted;
  }

  size(): number {
    return this.store.size;
  }
}

export const threadMap = new ThreadMap();