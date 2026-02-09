type MsgCardFootProps = {
    tags: string[];
    createdAt: number;
}

export default function MsgCardFoot({ tags = [], createdAt }: MsgCardFootProps) {
    return (
        <div className="flex items-center gap-2 mb-2">

            <span className="text-xs text-gray-400">
                {new Date(createdAt).toLocaleString()}
            </span>
        </div>
    )
}
