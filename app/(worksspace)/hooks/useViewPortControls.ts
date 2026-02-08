"use client";

import { Camera } from "@react-three/fiber";
import { useRef } from "react";
import { getLocalPoint } from "../lib/dom";
import { clampScale, zoomAt } from "../lib/cameraHelper";


type DragState = { sx: number; sy: number; stx: number; sty: number } | null;

export function useViewportControls(
  cam: Camera,
  setCam: React.Dispatch<React.SetStateAction<Camera>>
) {
  const dragRef = useRef<DragState>(null);

  const resetDrag = () => {
    dragRef.current = null;
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // right button pan
    if (e.button !== 2) return;

    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { sx: e.clientX, sy: e.clientY, stx: cam.tx, sty: cam.ty };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;

    const dx = e.clientX - drag.sx;
    const dy = e.clientY - drag.sy;

    // use the snapshot 'drag' (not dragRef.current!) to avoid null timing issues
    setCam((c: Camera) => ({ ...c, tx: drag.stx + dx, ty: drag.sty + dy }));
  };

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();

    const cursor = getLocalPoint(e.currentTarget ? (e as any) : (e as any)); // see note below
    // ^ In TS, easiest is: const cursor = getLocalPoint({ clientX: e.clientX, clientY: e.clientY, currentTarget: e.currentTarget });

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
      onPointerUp: resetDrag,
      onPointerCancel: resetDrag,
      onLostPointerCapture: resetDrag,
      onWheel,
      onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
    },
  };
}