import ToolBar from "./components/ToolBar"

export default function CancasWorkapace() {
    return (
        <div id="cancas-workspace" className="h-full w-full">
            <div id="world"
                className="h-full w-full absolute top-0 left-0 z-2"
            ></div>
            <div id="background"
                className="h-full w-full absolute top-0 left-0 z-1"
            ></div>
            <ToolBar />
            <div id="sidebar"></div>
            <div>CancasWorkapace</div>
        </div>

    )
}
