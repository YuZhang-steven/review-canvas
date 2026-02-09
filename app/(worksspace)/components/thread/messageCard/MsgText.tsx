import { MessageText } from '@/app/(worksspace)/type/Message'
import React from 'react'

export default function MsgText({ content }: { content: MessageText }) {
    return (
        <p className="text-gray-800 whitespace-pre-wrap">
            {(content as { text: string }).text}
        </p>
    )
}
