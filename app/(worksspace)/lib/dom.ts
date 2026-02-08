export function getLocalPoint(
  e: { clientX: number; clientY: number; currentTarget: HTMLElement }
) {
  const rect = e.currentTarget.getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}