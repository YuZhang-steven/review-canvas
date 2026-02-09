import { MessageToDo } from "@/app/(worksspace)/type/Message";


export default function MsgTodo({ content }: { content: MessageToDo }) {
    return (
        <div className="space-y-2">
            <p className="text-gray-800">
                {(content as { text: string }).text}
            </p>
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={(content as { completed: boolean }).completed}
                    readOnly
                    className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm text-gray-600">
                    {(content as { completed: boolean }).completed ? 'Completed' : 'Pending'}
                </span>
            </div>
        </div>
    )
}
