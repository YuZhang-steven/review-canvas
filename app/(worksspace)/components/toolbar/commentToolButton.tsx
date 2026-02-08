
import { MessageCircleIcon } from "lucide-react"
import { useCurrToolStore } from "../../state/useCurrToolStore"

export default function CommentToolButton() {
    const setCurrentTool = useCurrToolStore.getState().setCurrentTool
    const currentTool = useCurrToolStore((state) => state.currentTool)

    return (
        <button
            onClick={() => setCurrentTool("comment")}
            className={`
                relative p-3 rounded-full transition-all duration-200
                flex items-center justify-center
                hover:-translate-y-1 hover:bg-white/20
                cursor-pointer
                ${currentTool === "comment" ? "bg-white/30" : ""}
            `}
            title="Comment Tool"
        >
            <MessageCircleIcon
                size={28}
                className={`
                    transition-colors duration-200
                    ${currentTool === "comment" ? "text-blue-500" : "text-white/80"}
                `}
            />
        </button>
    )
}

