"use client"
import { useState } from 'react'
import World from './World'
import { Camera } from '../type/camera';
import { useViewportControls } from '../hooks/useViewPortControls';

export default function Viewport() {
    const [cam, setCam] = useState<Camera>({ tx: 0, ty: 0, scale: 1 });
    const { handlers } = useViewportControls(cam, setCam);




    return (
        <div
            className='relative h-full w-full overflow-hidden'
            style={{ touchAction: 'none' }}
            {...handlers}
        >
            {/* HUD */}
            <div className="absolute left-3 top-3 z-50 rounded bg-white/80 px-2 py-1 text-xs">
                {Math.round(cam.scale * 100)}%
            </div>
            <World camera={cam} />
        </div>

    )
}
