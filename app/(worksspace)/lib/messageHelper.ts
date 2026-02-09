import { messageMap } from "../dataStore/messageMap";
import { threadMap } from "../dataStore/threadMap";
import { MessageText, MessageToDo } from "../type/Message";

export function createMessageAt(threadId: string, text: string): string {
    try {
        const id = messageMap.add(text, threadId);
        const thread = threadMap.get(threadId);
        if (!thread) return "error";
        thread.messagesId.push(id);
        return id;
    } catch (error) {
        console.error(error);
        return "error";
    }
}
export function deleteMessageAt(id: string): boolean {
    try {
        const threadId = messageMap.get(id)?.threadId;
        if (!threadId) return false;
        const thread = threadMap.get(threadId);
        if (!thread) return false;
        thread.messagesId = thread.messagesId.filter((messageId) => messageId !== id);
        const deleted = messageMap.delete(id);
        return deleted;
    } catch (error) {
        console.error(error);
        return false;
    }
}
export function updateMessageTags(id: string, tags: string[]): boolean {
    try {
        const message = messageMap.get(id);
        if (!message) return false;
        message.tags = tags;
        const updated = messageMap.update(message);
        return updated;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export function changeTextToTodo(id: string): boolean {
    try {
        const message = messageMap.get(id);
        if (!message || message.type === "todo") return false;
        const currType = message.type;
        let currText = " ";
        if (currType === "text") {
            currText = (message.content as MessageText).text;
        }

        message.content = {
            text: currText,
            completed: false
        }
        message.type = "todo";

        const updated = messageMap.update(message);
        return updated;
    } catch (error) {
        console.error(error);
        return false;
    }
}

//chagne to do massage to normal text message
export function changeTodoToText(id: string): boolean {
    try {
        const message = messageMap.get(id);
        if (!message || message.type !== "todo") return false;

        message.content = {
            text: (message.content as MessageToDo).text
        };
        message.type = "text";

        const updated = messageMap.update(message);
        return updated;
    } catch (error) {
        console.error(error);
        return false;
    }
}

//change current todo message completed status to another one
export function updateTodoMessageCompleted(
    id: string, completed: boolean): boolean {
    try {
        const message = messageMap.get(id);
        if (!message || message.type !== "todo") return false;

        (message.content as MessageToDo).completed = completed;

        const updated = messageMap.update(message);
        return updated;
    } catch (error) {
        console.error(error);
        return false;
    }
}

