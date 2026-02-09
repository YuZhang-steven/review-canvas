type MsgTagsHeadProps = {
    tags: string[];
}

export default function MsgTagsHead({ tags = [] }: MsgTagsHeadProps) {
    return (
        <>
            {tags.length > 0 && (
                <div className="flex gap-1">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </>

    )
}
