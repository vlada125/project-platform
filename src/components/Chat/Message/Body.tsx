import React from 'react'

const Body = (props: any) => {
    let text = props.text ? props.text : ''
    text = text.replaceAll("<p>", "<div>").replaceAll("</p>", "</div>")
    text = text.replaceAll("<a ", `<a style="color: ${ props.isMyMessage ? 'white' : '#1890ff' };" `)

    return (
        <div className={`ce_message max-w-[70%] ${props.isMyMessage ? '' : 'text-[18px]'} font-light break-all ${props.isMyMessage ? 'ce-my-message-bubble text-white' : ''}`} dangerouslySetInnerHTML={{ __html: text }} />
    )
}

export default Body
