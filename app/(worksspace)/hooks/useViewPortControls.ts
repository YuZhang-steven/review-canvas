"use client";

import { Camera } from "@react-three/fiber";
import { getLocalPoint } from "../lib/dom";
import { clampScale, zoomAt } from "../lib/cameraHelper";
import { useRightClickHandle } from "./useRightClickHandle";
import useLeftClickHandle from "./useLeftClickHandle";


type PointerEvent = React.PointerEvent<HTMLDivElement>


export function useViewportControls(
    cam: Camera,
    setCam: React.Dispatch<React.SetStateAction<Camera>>
) {

    const rightClickHandles = useRightClickHandle({ cam, setCam });
    const leftClickHandles = useLeftClickHandle();



    const onPointerDown = (e: PointerEvent) => {
        if (e.button === 0) leftClickHandles.handles.onPointerDown(e);
        if (e.button === 2) rightClickHandles.handles.onPointerDown(e);

    };

    const onPointerMove = (e: PointerEvent) => {
        if (e.button === 0) leftClickHandles.handles.onPointerMove(e);
        if (e.button === 2) rightClickHandles.handles.onPointerMove(e);

    };

    const onPointerUp = (e: PointerEvent) => {
        if (e.button === 0) leftClickHandles.handles.onPointerUp();
        if (e.button === 2) rightClickHandles.handles.onPointerUp();

    };
    const onPointerCancel = (e: PointerEvent) => {
        if (e.button === 0) leftClickHandles.handles.onPointerCancel();
        if (e.button === 2) rightClickHandles.handles.onPointerCancel();
    };
    const onLostPointerCapture = (e: PointerEvent) => {
        if (e.button === 0) leftClickHandles.handles.onLostPointerCapture();
        if (e.button === 2) rightClickHandles.handles.onLostPointerCapture();
    };

    const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        e.preventDefault();

        const cursor = getLocalPoint(e.currentTarget ? (e as any) : (e as any));
        const factor = Math.exp(-e.deltaY / 500);

        setCam((c: Camera) => {
            const nextScale = clampScale(c.scale * factor, 0.1, 5);
            return zoomAt(cursor, c, nextScale);
        });
    };

    return {
        handlers: {
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onPointerCancel,
            onLostPointerCapture,
            onWheel,
            onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
        },
    };
}