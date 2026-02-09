"use client"
import { CrosshairIcon } from "lucide-react"
import { threadMap } from "../dataStore/threadMap"
import { useCanvasCameraStore } from "../state/useCanvasCameraStore"
import { useCurrentSelectedStore } from "../state/useCurrentSelectedStore"

export default function FocusThreadButton() {
    const { cam, setCam } = useCanvasCameraStore()
    const currentSelectedId = useCurrentSelectedStore(state => state.currentSelectedId)

    const handleFocus = () => {
        if (!currentSelectedId) return

        const thread = threadMap.get(currentSelectedId)
        if (!thread) return

        const { x, y } = thread

        // If camera is not at 100% (scale !== 1), reset scale to 1
        const newScale = cam.scale !== 1 ? 1 : cam.scale

        // World (0,0) is at top-left of screen
        // To center world point (x, y) at screen center:
        // screenX = x * scale + tx = screenWidth / 2
        // Therefore: tx = screenWidth / 2 - x * scale
        const screenWidth = window.innerWidth
        const screenHeight = window.innerHeight

        const newTx = screenWidth / 2 - x * newScale
        const newTy = screenHeight / 2 - y * newScale

        setCam({ tx: newTx, ty: newTy, scale: newScale })
    }

    return (
        <button
            onClick={handleFocus}
            className="
                relative p-2 rounded-lg transition-all duration-200
                flex items-center justify-center
                hover:bg-blue-500/20 hover:scale-105
                cursor-pointer
                text-blue-400
            "
            title="Focus on thread"
        >
            <CrosshairIcon
                size={20}
                className="
                    transition-colors duration-200
                    group-hover:text-blue-300
                "
            />
        </button>
    )
}

