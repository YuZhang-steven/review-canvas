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
            className="absolute top-0 left-0 overflow-hidden"
            style={{
                transform: `translate(${camera.tx}px, ${camera.ty}px) scale(${camera.scale})`,
                transformOrigin: '0 0',
                width: '100%',
                height: '100%',
            }}
        >
            <div className="w-[6000px] h-[6000px]">
                <ObjectCollection />
            </div>
        </div>

    )
}
