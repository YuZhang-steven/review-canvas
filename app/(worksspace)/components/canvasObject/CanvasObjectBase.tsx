
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
    const hoverClassBorder = hover ? "outline-2 outline-amber-500 outline-dashed outline-offset-2" : "outline-transparent outline-2";
    const hoverClassText = hover ? "text-blue-600" : "text-transparent";
    return (
        <div
            className={`absolute ${hoverClassBorder} duration-200 ease-in-out`}
            style={{
                left: x,
                top: y,
                width,
                height,
                zIndex
            }}
        >
            <span className={`absolute -top-5 left-0 font-semibold text-xs px-1 rounded duration-200 ease-in-out ${hoverClassText}`}>
                {id}
            </span>
        </div>
    )
}
