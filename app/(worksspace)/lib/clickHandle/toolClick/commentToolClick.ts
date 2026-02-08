

type DragRef = {
    screenStartX: number;
    screenStartY: number;
    screenEndX: number;
    screenEndY: number;
} | null;
export default function commentToolClick() {

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.button !== 0) return;

    };
    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {

    }
    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.button !== 0) return;
        const
            dragRef.current = null;
    };
    return ({
        handles: {


        }
    })
}
