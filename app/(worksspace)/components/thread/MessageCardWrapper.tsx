type MessageCardWrapperProps = {
    children: React.ReactNode;
}

export default function MessageCardWrapper({ children }: MessageCardWrapperProps) {
    return (
        <div className="flex flex-col gap-3">
            {children}
        </div>
    );
}

