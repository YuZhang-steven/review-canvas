"use client"

import World from './World'
import { useViewportControls } from '../hooks/useViewPortControls';
import { useCanvasCameraStore } from '../state/useCanvasCameraStore';

export default function Viewport() {
    const cam = useCanvasCameraStore((state) => state.cam);
    const { handlers } = useViewportControls();

    return (
        <div
            className='relative h-full w-full overflow-hidden'
            style={{ touchAction: 'none' }}
            {...handlers}
        >
            {/* HUD */}
            <div className="absolute left-3 top-3 z-50 rounded text-blue-600 font-bold px-2 py-1 text-xs">
                {Math.round(cam.scale * 100)}%
            </div>
            <World />
        </div>

    )
}
