import { Camera } from "@react-three/fiber";
import ObjectCollection from "./ObjectCollection";


type WorldProps = {
    camera: Camera;

}

export default function World(
    { camera }: WorldProps
) {
    return (
        <div id="world"
            className="absolute h-full w-full top-0 left-0 z-2 origin-top-left"
            style={{
                transform: `translate(${camera.tx}px, ${camera.ty}px) scale(${camera.scale})`,
                width: 6000,
                height: 6000,
            }}
        >
            <ObjectCollection />
        </div>

    )
}
