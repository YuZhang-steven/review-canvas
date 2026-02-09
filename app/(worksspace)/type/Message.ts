export type MessageText = {
    text: string;

}
export type MessageImage = {
    image: string;
}

export type MessageToDo = {
    text: string;
    image: string;
    completed: boolean;
}

export type Message = {
    id: string;
    tags: string[];
    type: "text" | "image" | "todo";
    createdAt: number;
    updatedAt: number;
    content: MessageText | MessageImage | MessageToDo;
    threadId: string;

}


