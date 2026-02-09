import { Message } from "./Message";

export type Thread = {
    x: number;
    y: number;
    linkItem: string;

    id: string;
    createdAt: number;
    updatedAt: number;
    title: string;
    description: string;
    messages: Message[];
}
