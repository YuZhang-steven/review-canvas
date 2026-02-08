"use client"
import { useRef, useState } from 'react'
import World from './World'
import { Camera, focusPoint } from '../model/camera';
import { screenToWorld, worldToScreen } from '../lib/viewScreenCoordTrans';

type DragRef = {
    //screen position, drag start
    sx: number;
    sy: number;
    //camera translate value at drag start
    stx: number;
    sty: number
} | null



function zoomAt(cursor: focusPoint, cam: Camera, nextScale: number): Camera {
    const before = screenToWorld(cursor, cam);
    const next = { ...cam, scale: nextScale }
    const after = worldToScreen(before, next);
    next.tx += cursor.x - after.x;
    next.ty += cursor.y - after.y;
    return next;
}

export default function Viewport() {
    const [cam, setCam] = useState<Camera>({ tx: 0, ty: 0, scale: 1 });
    const dragRef = useRef<DragRef>(null);

    //handle drag
    function handlePointDown(e: React.PointerEvent<HTMLDivElement>) {
        e.currentTarget.setPointerCapture(e.pointerId);
        dragRef.current = {
            sx: e.clientX,
            sy: e.clientY,
            stx: cam.tx,
            sty: cam.ty
        }
    }
    function handlePointMove(e: React.PointerEvent<HTMLDivElement>) {
        //snapshot drag start, because dragRef can get cleared in the same frame
        const drag = dragRef.current;
        if (!drag) return;

        //compute mouse delta in screen pixels
        const dx = e.clientX - drag.sx;
        const dy = e.clientY - drag.sy;
        setCam((c) => ({
            ...c,
            //add the delt to starting camera translation 
            tx: dragRef.current!.stx + dx,
            ty: dragRef.current!.sty + dy
        }))

    }
    function reSetDragRef() {
        dragRef.current = null;
    }

    //handle zoom
    function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
        e.preventDefault();
        //the bounding box of the viewport element in screen coordinates (the browser window)
        const rect = e.currentTarget.getBoundingClientRect();
        //the cursor position in screen coordinates(viewport-local)
        const cursor = { x: e.clientX - rect.left, y: e.clientY - rect.top }
        //converts wheel delta into a smooth multiplicative zoom
        const factor = Math.exp(-e.deltaY / 500);
        setCam((c) => {
            //clamp the zoom to 0.1 and 5
            const nextScale = Math.min(5, Math.max(0.1, c.scale * factor));
            return zoomAt(cursor, c, nextScale);
        })
    }


    return (
        <div
            className='relative h-full w-full overflow-hidden'
            style={{ touchAction: 'none' }}
            onPointerDown={handlePointDown}
            onPointerMove={handlePointMove}
            onPointerUp={reSetDragRef}
            onWheel={handleWheel}

            //handle pointerCancel,lost
            onPointerCancel={reSetDragRef}
            onLostPointerCapture={reSetDragRef}
        >
            {/* HUD */}
            <div className="absolute left-3 top-3 z-50 rounded bg-white/80 px-2 py-1 text-xs">
                {Math.round(cam.scale * 100)}%
            </div>
            <World camera={cam} />
        </div>

    )
}
