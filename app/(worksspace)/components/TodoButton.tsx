import { useMessageStore } from "../state/useMessageStore";

type TodoButtonProps = {
    completed: boolean;
    id: string;
}
export default function TodoButton({ completed, id }: TodoButtonProps) {
    const { updateTodoCompleted } = useMessageStore();

    const handleToggle = () => {
        updateTodoCompleted(id, !completed);
    };
    return (

        <button
            onClick={handleToggle}
            className={`mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${completed
                ? "border-blue-500 bg-blue-500"
                : "border-gray-300 hover:border-gray-400"
                }`}
        >
            {completed && (
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
            )}
        </button>
    )
}
