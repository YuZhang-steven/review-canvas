
import { CanvasCamera, focusPoint } from "../type/CanvasCamera";

export function screenToWorld(p: focusPoint, cam: CanvasCamera): focusPoint {
    const x = (p.x - cam.tx) / cam.scale;
    const y = (p.y - cam.ty) / cam.scale;
    return { x, y };
}
export function worldToScreen(p: focusPoint, cam: CanvasCamera): focusPoint {
    const x = p.x * cam.scale + cam.tx;
    const y = p.y * cam.scale + cam.ty;
    return { x, y };
}