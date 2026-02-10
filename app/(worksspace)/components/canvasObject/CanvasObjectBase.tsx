
type CanvasObjectBaseProps = {
    id: string
    x: number
    y: number
    width: number
    height: number
    zIndex: number
    hover: boolean
}

export default function CanvasObjectBase({
    id, x, y, width, height, zIndex, hover
}: CanvasObjectBaseProps) {
    const hoverClassBorder = hover ? "border-blue-500 border-2 border-dashed" : "border-transparent border-2";
    const hoverClassText = hover ? "text-blue-500" : "text-transparent";
    return (
        <div
            className={`absolute  ${hoverClassBorder}  duration-200 ease-in-out`}
            style={{
                left: x,
                top: y,
                width,
                height,
                zIndex
            }}
        >
            <span className={`absolute -top-5 left-0 text-xs px-1 rounded ${hoverClassText}`}>
                {id}
            </span>
        </div>
    )
}
