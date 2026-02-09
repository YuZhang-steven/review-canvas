
import { screenToWorld, worldToScreen } from "./viewScreenCoordTrans";
import { CanvasCamera, focusPoint } from "../type/CanvasCamera";
import { Thread } from "../type/Thread";

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

export function focusThread({
  thread, cam, setCam
}: {
  thread: Thread,
  cam: CanvasCamera,
  setCam: (cam: CanvasCamera) => void
}) {
  const { x, y } = thread;
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