
type CanvasObjectBaseProps = {
    id: string
    x: number
    y: number
    width: number
    height: number
    zIndex: number
}

export default function CanvasObjectBase({
    id, x, y, width, height, zIndex
}: CanvasObjectBaseProps) {
    return (
        <div
            className="absolute border-2 border-blue-400 border-dashed"
            style={{
                left: x,
                top: y,
                width,
                height,
                zIndex
            }}
        >
            <span className="absolute -top-5 left-0 text-xs text-blue-500 bg-white px-1 rounded">
                {id}
            </span>
        </div>
    )
}
