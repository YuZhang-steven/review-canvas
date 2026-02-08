"use client"

import SelectToolButton from "./toolbar/selectToolButton";
import CommentToolButton from "./toolbar/commentToolButton";

export default function ToolBar() {


    return (
        <div id="toolbar"
            className="h-25 w-full absolute mb-10 flex items-center justify-center bottom-0 z-50"
        >
            <div id="toolbar-background"
                className="h-full w-[80%] max-w-lg absolute flex items-center justify-center gap-4 rounded-2xl bg-amber-500 backdrop-blur-md border border-white/10 shadow-xl"
            >
                <SelectToolButton />
                <CommentToolButton />
            </div>

        </div>
    )
}
