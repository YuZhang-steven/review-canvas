import { threadMap } from "../dataStore/threadMap";

export function createThreadAt(x: number, y: number, linkItem?: string): string {
    return threadMap.add(x, y, linkItem);
}
