import { MessageImage } from '@/app/(worksspace)/type/Message'


export default function MsgImage({ content }: { content: MessageImage }) {
    return (
        <div>
            <img
                src={(content as { image: string }).image}
                alt="Message attachment"
                className="max-w-full rounded-lg border border-gray-200"
            />
        </div>
    )
}
