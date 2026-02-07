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
            />
            <Circle />


            <Triangles />
        </div>
    )
}
