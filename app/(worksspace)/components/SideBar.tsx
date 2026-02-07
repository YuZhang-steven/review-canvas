
export default function SideBar() {
    return (
        <div id="sidebar" className="group h-full absolute top-0 right-0 z-50">
            {/* Sidebar body - width animates on hover */}
            <div
                className="
                    h-full bg-green-500
                    transition-all duration-300 ease-in-out
                    w-0 group-hover:w-64
                    absolute top-0 right-0
                    overflow-hidden
                "
            >
                <div className="p-4 text-white">
                    <h2 className="text-lg font-bold">Sidebar</h2>
                </div>
            </div>

            {/* Trigger area - visible strip, always visible */}
            <div id="sidebar-trigger"
                className="absolute inset-y-0 right-0 w-2 cursor-pointer
                 bg-green-600 hover:bg-green-500 transition-colors z-10" />
        </div>
    )
}
