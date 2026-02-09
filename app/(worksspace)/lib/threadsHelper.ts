import { threadMap } from "../dataStore/threadMap";
import { useThreadStore } from "../state/useThreadStore";

export function createThreadAt(x: number, y: number, linkItem?: string): string {
    try {
        const id = threadMap.add(x, y, linkItem);
        useThreadStore.getState().addThreadId(id);
        return id;
    } catch (error) {
        console.error(error);
        return "error";
    }
}

export function deleteThreadAt(id: string): boolean {
    try {
        const deleted = threadMap.delete(id);
        useThreadStore.getState().removeThreadId(id);
        return deleted;
    } catch (error) {
        console.error(error);
        return false;
    }
}
