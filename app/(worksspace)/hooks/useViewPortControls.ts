"use client";

import { getLocalPoint } from "../lib/dom";
import { clampScale, zoomAt } from "../lib/cameraHelper";
import { useRightClickHandle } from "./useRightClickHandle";
import useLeftClickHandle from "./useLeftClickHandle";
import { useCanvasCameraStore } from "../state/useCanvasCameraStore";


type PointerEvent = React.PointerEvent<HTMLDivElement>


export function useViewportControls() {
    const cam = useCanvasCameraStore((state) => state.cam);
    const setCam = useCanvasCameraStore.getState().setCam;

    const rightClickHandles = useRightClickHandle();
    const leftClickHandles = useLeftClickHandle();



    const onPointerDown = (e: PointerEvent) => {
        if (e.button === 0) leftClickHandles.handles.onPointerDown(e);
        if (e.button === 2) rightClickHandles.handles.onPointerDown(e);

    };

    const onPointerMove = (e: PointerEvent) => {
        if ((e.buttons & 1) !== 0) leftClickHandles.handles.onPointerMove(e);
        if ((e.buttons & 2) !== 0) rightClickHandles.handles.onPointerMove(e);

    };

    const onPointerUp = (e: PointerEvent) => {
        if (e.button === 0) leftClickHandles.handles.onPointerUp(e);
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


        const cursor = getLocalPoint(e.currentTarget ? (e as any) : (e as any));
        const factor = Math.exp(-e.deltaY / 500);

        const nextScale = clampScale(cam.scale * factor, 0.1, 5);
        const newCam = zoomAt(cursor, cam, nextScale);

        setCam({
            tx: newCam.tx,
            ty: newCam.ty,
            scale: newCam.scale,
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