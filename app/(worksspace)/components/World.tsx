
import ObjectCollection from "./ObjectCollection";
import ThreadCollection from "./thread/ThreadCollection";
import { useCanvasCameraStore } from "../state/useCanvasCameraStore";



export default function World() {
    const cam = useCanvasCameraStore((state) => state.cam);
    return (
        <div id="world"
            className="absolute top-0 left-0 overflow-hidden"
            style={{
                transform: `translate(${cam.tx}px, ${cam.ty}px) scale(${cam.scale})`,
                transformOrigin: '0 0',
                width: '100%',
                height: '100%',
            }}
        >
            <div className="w-[6000px] h-[6000px]">
                <ObjectCollection />
                <ThreadCollection />
            </div>
        </div>

    )
}
