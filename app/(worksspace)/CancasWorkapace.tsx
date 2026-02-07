import SideBar from "./components/SideBar"
import ToolBar from "./components/ToolBar"
import Viewport from "./components/Viewport"
import World from "./components/World"

export default function CancasWorkapace() {
    return (
        <div id="cancas-workspace" className="h-full w-full relative">
            <Viewport />
            <ToolBar />
            <SideBar />
        </div>

    )
}
