type MessageCardWraperProps = {
    children: React.ReactNode;
}

export default function MessageCardWraper({
    children }: MessageCardWraperProps) {
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}
