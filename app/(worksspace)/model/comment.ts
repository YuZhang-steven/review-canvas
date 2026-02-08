export type MessageText = {
    text: string;
    id: string;
    createdAt: number;
}
export type MessageImage = {
    image: string;
    id: string;
    createdAt: number;
}

export type MessageToDo={
    content:MessageText|MessageImage;
    id:string;
    createdAt:number;
    completed:boolean;
    tags:string[];
}

export type Message=MessageText|MessageImage|MessageToDo;

export type Thread={
    x:number;
    y:number;
    linkItem:string;

    id:string;
    createdAt:number;
    updatedAt:number;
    title:string;
    description:string;
    messages:Message[];
}
