
import { useState } from 'react'
import CanvasObjectBase from './CanvasObjectBase'


type CanvasObjectProps = {
    id: string
    x: number
    y: number
    width: number
    height: number
    rotation?: number
    zIndex?: number
    children?: React.ReactNode
}

export default function CanvasObject({
    id,
    x,
    y,
    width,
    height,
    rotation = 0,
    zIndex = 0,
    children
}: CanvasObjectProps) {
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () => {
        setHover(false);
    }
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
                hover={hover}
            />

            {/* Real object as children */}
            <div
                className="absolute top-0 left-0 "
                style={{
                    width,
                    height,
                    transform: `rotate(${rotation}deg)

                    `
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

            >
                {children}
            </div>
        </div>
    )
}
