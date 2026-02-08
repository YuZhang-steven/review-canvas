import { threadMap } from "../dataStore/threadMap";

export function createThreadAt(x: number, y: number, linkItem?: string): void {
    threadMap.add(x, y, linkItem);
}
