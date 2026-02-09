
import { screenToWorld, worldToScreen } from "./viewScreenCoordTrans";
import { CanvasCamera, focusPoint } from "../type/CanvasCamera";

export function zoomAt(
  cursor: focusPoint,
  cam: CanvasCamera,
  nextScale: number
): CanvasCamera {
  const before = screenToWorld(cursor, cam);
  const next = { ...cam, scale: nextScale };
  const after = worldToScreen(before, next);
  next.tx += cursor.x - after.x;
  next.ty += cursor.y - after.y;
  return next;
}

export function clampScale(s: number, min = 0.1, max = 5) {
  return Math.min(max, Math.max(min, s));
}