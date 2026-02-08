

import { MousePointer2Icon } from "lucide-react"
import { useCurrToolStore } from "../../state/useCurrToolStore"

export default function SelectToolButton() {
    const setCurrentTool = useCurrToolStore.getState().setCurrentTool
    const currentTool = useCurrToolStore((state) => state.currentTool)

    return (
        <button
            onClick={() => setCurrentTool("select")}
            className={`
                relative p-3 rounded-full transition-all duration-200
                flex items-center justify-center
                hover:-translate-y-1 hover:bg-white/20
                cursor-pointer
                ${currentTool === "select" ? "bg-white/30" : ""}
            `}
            title="Select Tool"
        >
            <MousePointer2Icon
                size={28}
                className={`
                    transition-colors duration-200
                    ${currentTool === "select" ? "text-blue-500" : "text-white/80"}
                `}
            />
        </button>
    )
}
