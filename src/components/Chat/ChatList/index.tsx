// Dependencies
import React, {useContext, useEffect} from 'react';
// @ts-ignore
import { ChatEngineContext, getOrCreateChat, editChat } from 'react-chat-engine';

// Components
import ChatLink from './ChatLink';
import ChatGroup from './ChatGroup';

export const GROUP_CHAT_PREFIX = 'group_'

// Export component
const ChatList = (props: any) => {
    const { activeChat, setActiveChat } = useContext(ChatEngineContext) as any;

    const hasReadLastMessage = (chat: any) => {
        let lastReadMessageID = -1;
        chat.people.forEach((chat_person: any) => {
            if (chat_person.person.username === props.userName) {
                lastReadMessageID = chat_person.last_read;
            }
        })
        return !chat.last_message.id || lastReadMessageID === chat.last_message.id;
    };

    const renderChannels = () => {
        const chatList = props.chats ? Object.values(props.chats) : [];
        return chatList.map((chat: any, index) => {
            const isGroupChat = chat?.title?.startsWith(GROUP_CHAT_PREFIX);
            if (!chat?.is_direct_chat && !isGroupChat) {
                return (
                    <ChatLink
                        key={`chat-${index}`}
                        title={chat?.title}
                        bold={!hasReadLastMessage(chat)}
                        onClick={() => setActiveChat(chat?.id)}
                        onUpdateTitle={(title: string) => onUpdateChannel(title, chat?.id)}
                        editable
                    />
                );
            } else {
                return <div key={`chat-${index}`} />
            }
        });
    };
  
    const renderGroups = () => {
        const chatList = props.chats ? Object.values(props.chats) : [];
        return chatList.map((chat: any, index) => {
            const isGroupChat = chat?.title?.startsWith(GROUP_CHAT_PREFIX);
            if (!chat?.is_direct_chat && isGroupChat) {
                return (
                  <ChatLink
                    key={`chat-${index}`}
                    title={chat?.title?.replace(GROUP_CHAT_PREFIX, '') + `(+${chat?.people?.length ?? 0})`}
                    bold={!hasReadLastMessage(chat)}
                    onClick={() => setActiveChat(chat?.id)}
                    onUpdateTitle={(title: string) => onUpdateChannel(GROUP_CHAT_PREFIX + title, chat?.id)}
                    editable
                  />
                );
            } else {
                return <div key={`chat-${index}`} />
            }
        });
    };

    const returnNotMe = (chat: any) => {
        let username = '';
        let avatarUrl = '';
        chat.people.forEach((chat_person: any) => {
            if (chat_person.person.username !== props.userName) {
                username = chat_person.person.username;
                avatarUrl = chat_person.person.avatar;
            }
        });
        return { username, avatarUrl };
    };

    const renderDirectMessages = () => {
        const chatList = props.chats ? Object.values(props.chats) : [];
        return chatList.map((chat: any, index) => {
            const user = returnNotMe(chat);
            if (chat?.is_direct_chat) {
                return (
                    <ChatLink
                        key={`chat-${index}`}
                        title={`${user?.username}`}
                        avatar={`${user?.avatarUrl}`}
                        bold={!hasReadLastMessage(chat)}
                        onClick={() => setActiveChat(chat.id)}
                    />
                );
            } else {
                return <div key={`chat-${index}`} />
            }
        });
    };

    const onChannelCreate = (data: any, isGroupChat?: boolean) => {
        const chat = { title: `${isGroupChat ? GROUP_CHAT_PREFIX : ''}${data.value}` };
        getOrCreateChat(props, chat, (r: any) => console.log('New Channel', r));
    };
    
    const onUpdateChannel = (title: string, chatId: string) => {
      editChat(props, chatId, {id: chatId, title}, (r: any) => console.log('Updated Channel', r));
    };


    const onDirectMessageCreate = (data: any) => {
        const chat = {
            is_direct_chat: true,
            usernames: [data.value, props.userName]
        };
        getOrCreateChat(props, chat, (r: any) => console.log('New DM', r));
    };
    
    useEffect(() => {
      if (!activeChat && props.chats) {
        setActiveChat(Object.keys(props.chats)[0]);
      }
    }, [props.chats, activeChat])

    return (
        <div className="w-full h-full bg-gradient-to-b from-blue-800 to-cyan-300 rounded-[25px] card-shadow pl-[10px] pr-[18px] py-[23px]">
            <div className="w-full opacity-90 bg-white bg-opacity-70 rounded-[10px] flex items-center px-[9px] py-[7px]">
              <img className="w-[30px] h-[30px]" src="/images/icons/search2.svg" alt={'search icon'} />
              <input className="ml-2 text-[18px] font-medium bg-transparent focus:outline-none" placeholder="Search" />
            </div>

            <div className="mt-[20px]">
                <ChatGroup
                    title='Channels'
                    placeholder='Create a group'
                    onSubmit={(data: any) => onChannelCreate(data)}
                />
            </div>

            <div className="pl-[9px] py-1">
                { renderChannels() }
            </div>
          
            <div className="mt-1">
                <ChatGroup
                    title='Groups'
                    placeholder='Create a group'
                    onSubmit={(data: any) => onChannelCreate(data, true)}
                />
            </div>
          
            <div className="pl-[9px] py-1">
                { renderGroups() }
            </div>

            <div>
                <ChatGroup
                    title='Direct Messages'
                    placeholder='Type a username'
                    onSubmit={(data: any) => onDirectMessageCreate(data)}
                />
            </div>

            <div className="pl-[5px] py-[5px]">
                { renderDirectMessages() }
            </div>
        </div>
    );
}

export default ChatList;
