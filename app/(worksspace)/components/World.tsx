
import ObjectCollection from "./ObjectCollection";
import ThreadCollection from "./thread/ThreadCollection";
import { useCanvasCameraStore } from "../state/useCanvasCameraStore";
import { useCurrentSelectedStore } from "../state/useCurrentSelectedStore";
import { useSideBarOpenStore } from "../state/useSideBarOpenStore";



export default function World() {
    const cam = useCanvasCameraStore((state) => state.cam);
    const clearCurrentSelectedId = useCurrentSelectedStore.getState().clearCurrentSelectedId;
    const setSideBarOpen = useSideBarOpenStore.getState().setSideBarOpen;

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
        console.log("world clicked");
        clearCurrentSelectedId();
        setSideBarOpen(false);

    }

    return (
        <div id="world"
            className="absolute top-0 left-0 "
            style={{
                transform: `translate(${cam.tx}px, ${cam.ty}px) scale(${cam.scale})`,
                transformOrigin: '0 0',
                width: '100%',
                height: '100%',
            }}
            onClick={handleClick}
        >
            <div className="w-[6000px] h-[6000px]">
                <ObjectCollection />
                <ThreadCollection />
            </div>
        </div>

    )
}
