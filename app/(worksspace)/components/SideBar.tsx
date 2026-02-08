"use client"
import { useState } from "react";
import { X } from "lucide-react";
import SideBarContent from "./SideBarContent";

export default function SideBar() {
    const [open, setOpen] = useState(false);
    return (
        <div id="sidebar" className="group h-full absolute top-0 right-0 z-50">
            {/* Sidebar body - width animates based on open state */}
            <div
                className={`
                    h-full bg-green-500
                    transition-all duration-300 ease-in-out
                    ${open ? 'w-64' : 'w-0'}
                    absolute top-0 right-0
                    overflow-hidden
                `}
            >
                <div className="p-4 text-white flex items-center justify-between">
                    <h2 className="text-lg font-bold">Sidebar</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="p-1 hover:bg-green-400 rounded transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
                <SideBarContent />
            </div>

            {/* Trigger area - visible strip, toggles sidebar on click */}
            {!open && (
                <div
                    id="sidebar-trigger"
                    className="absolute inset-y-0 right-0 w-2 cursor-pointer
                 bg-green-600 hover:bg-green-500 transition-colors z-10"
                    onClick={() => setOpen(!open)}
                />
            )}
        </div>
    )
}
