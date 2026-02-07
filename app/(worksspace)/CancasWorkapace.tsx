import SideBar from "./components/SideBar"
import ToolBar from "./components/ToolBar"
import World from "./components/World"

export default function CancasWorkapace() {
    return (
        <div id="cancas-workspace" className="h-full w-full ">
            <div id="background"
                className="h-full w-full absolute top-0 left-0 z-1"
            ></div>
            <World />
            <ToolBar />
            <SideBar />
            <div>CancasWorkapace</div>
        </div>

    )
}
