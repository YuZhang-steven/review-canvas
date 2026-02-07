
import CanvasObjectBase from './CanvasObjectBase'
import TestImage from '../../testObjects/TestImage'

type CanvasObjectProps = {
    id: string
    x: number
    y: number
    width: number
    height: number
    rotation?: number
    zIndex?: number
}

export default function CanvasObject({
    id,
    x,
    y,
    width,
    height,
    rotation = 0,
    zIndex = 0
}: CanvasObjectProps) {
    return (
        <div
            className="absolute"
            style={{
                left: x,
                top: y,
                zIndex
            }}
        >
            {/* Bounding box - updates when object moves or rotates */}
            <CanvasObjectBase
                id={id}
                x={0}
                y={0}
                width={width}
                height={height}
                zIndex={zIndex}
            />

            {/* Real object as children */}
            <div
                className="absolute top-0 left-0"
                style={{
                    width,
                    height,
                    transform: `rotate(${rotation}deg)`
                }}
            >
                <TestImage />
            </div>
        </div>
    )
}
