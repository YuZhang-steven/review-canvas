export type MessageText = { text: string };
export type MessageImage = { image: string };
export type MessageToDo = { text: string; image: string; completed: boolean };

type BaseMessage = {
    id: string;
    tags: string[];
    createdAt: number;
    updatedAt: number;
    threadId: string;
};

export type TextMessage = BaseMessage & {
    type: "text";
    content: MessageText;
};

export type ImageMessage = BaseMessage & {
    type: "image";
    content: MessageImage;
};

export type TodoMessage = BaseMessage & {
    type: "todo";
    content: MessageToDo;
};

export type Message = TextMessage | ImageMessage | TodoMessage;


