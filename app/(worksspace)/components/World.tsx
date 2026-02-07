import ObjectCollection from "./ObjectCollection";

export default function World() {
    return (
        <div id="world"
            className="h-full w-full absolute top-0 left-0 z-2"
        >
            <ObjectCollection />
        </div>

    )
}
