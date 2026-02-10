"use client"
import { CrosshairIcon } from "lucide-react"
import { useCanvasCameraStore } from "../../state/useCanvasCameraStore"
import { useCurrentSelectedStore } from "../../state/useCurrentSelectedStore"
import { useThreadStore } from "../../state/useThreadStore"
import { focusThread } from "../../lib/cameraHelper"

export default function FocusThreadButton() {
    const { cam, setCam } = useCanvasCameraStore()
    const currentSelectedId = useCurrentSelectedStore(state => state.currentSelectedId)
    if (!currentSelectedId) return
    const thread = useThreadStore(state => state.threadsById[currentSelectedId]);

    const handleFocus = () => { focusThread({ thread, cam, setCam }) }

    return (
        <button
            onClick={handleFocus}
            className="
                relative p-2 rounded-lg transition-all duration-200
                flex items-center justify-center
                hover:bg-white/20 hover:scale-105
                cursor-pointer
                text-blue-600
            "
            title="Focus on thread"
        >
            <CrosshairIcon
                size={25}
            />
        </button>
    )
}

