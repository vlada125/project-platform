import React from 'react';

import Body from './Body'

import { Avatar } from '../../Avatar';
import moment from "moment";

const Message = (props: any) => {
    const senderAvatarUrl = props.sending ? null : props.message.sender.avatar
    const senderUsername = props.sending ? props.creds.userName : props.message.sender.username
    const senderFirstName = props.sending ? props.creds.first_name : props.message.sender.first_name
    const senderLastName = props.sending ? props.creds.last_name : props.message.sender.last_name
    const isTurnEnd = !props.nextMessage || props.nextMessage.sender.username !== senderUsername

    let isNewTurn = !props.lastMessage || props.lastMessage.sender.username !== senderUsername
    if (props.sending && !props.lastMessage) {
        isNewTurn = !props.chat.last_message.sender || props.chat.last_message.sender.username !== senderUsername
    }
    const isMyMessage = props.chat?.admin?.username === props.message?.sender_username;
    const sentAt = moment(props.message?.created).format('h:mmA');

    return (
      <>
        <div className={`flex w-full ${(isNewTurn && isTurnEnd) ? 'min-h-[54px]' : 'min-h-0'} py-1 px-4`}>
          {
            isNewTurn && (
              <div className={`${isMyMessage ? 'order-2' : ''}`}>
                <Avatar avatarUrl={senderAvatarUrl} username={senderUsername} size={45} />
                <p className={'text-center text-stone-300 text-[10px] font-semibold mt-1'}>{sentAt}</p>
              </div>
            )
          }
          
          <div className={`${props.sending ? 'text-[#959595]' : 'text-black'} ml-[18px] w-[calc(100%-60px)] px-1 ${isMyMessage ? 'text-right' : 'text-left'} ${isNewTurn ? '' : isMyMessage ? 'mr-[45px]' : 'ml-[64px]'}`}>
            {
              isNewTurn &&
              <p className={`text-sky-950 text-sm font-medium`}>{senderFirstName} {senderLastName}</p>
            }
            {!!props.message.text && <Body text={props.message.text} isMyMessage={isMyMessage}/>}
            <div className={`flex flex-col ${isMyMessage ? 'items-end' : 'items-start'}`}>
              {props.message?.attachments?.map((attachment: any, index: number) => (
                <img className={'my-1'} key={`attachment${index}`} src={attachment?.file} alt={'attachment'} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default Message;
