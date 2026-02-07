import Circle from "../testObjects/Circle";
import TestImage from "../testObjects/TestImage";
import Triangles from "../testObjects/Triangles";
import CanvasObject from "./canvasObject/CanvasObject";


export default function ObjectCollection() {
    return (
        <div id="object-collection">
            {/* <TestImage /> */}
            <CanvasObject
                id="test-image"
                x={300}
                y={100}
                width={300}
                height={100}
            >
                <TestImage />
            </CanvasObject>
            <CanvasObject
                id="test-image"
                x={100}
                y={400}
                width={300}
                height={100}
            >
                <Circle />
            </CanvasObject>
            <CanvasObject
                id="test-image"
                x={500}
                y={200}
                width={300}
                height={100}
            >
                <Triangles />
            </CanvasObject>




        </div>
    )
}
