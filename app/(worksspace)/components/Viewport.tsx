"use client"
import { useRef, useState } from 'react'
import World from './World'
import { Camera, focusPoint } from '../type/camera';
import { screenToWorld, worldToScreen } from '../lib/viewScreenCoordTrans';
import { useViewportControls } from '../hooks/useViewPortControls';

type DragRef = {
    //screen position, drag start
    sx: number;
    sy: number;
    //camera translate value at drag start
    stx: number;
    sty: number
} | null





export default function Viewport() {
    const [cam, setCam] = useState<Camera>({ tx: 0, ty: 0, scale: 1 });
    const dragRef = useRef<DragRef>(null);
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
