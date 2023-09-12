// Dependencies
import React, {useState, createContext, useContext, FC, Dispatch, SetStateAction} from 'react';
import { v4 as uuidv4 } from "uuid";

// Types
export type Channel = {
  id: string;
  title: string;
  users: string[];
}

export type User = {
  id: string;
  avatarUrl: string;
  name: string;
}

export type Message = {
  id: string;
  userId: string;
  content: MessageContent;
}

export type MessageContent = {
  message?: string;
  images?: File[];
}

interface ChatContextProps {
  channels: Channel[];
  users: User[];
  messages: Message[];
  activeUser: User | null;
  setActiveUser: Dispatch<SetStateAction<string | undefined>>;
  sendMessage: (content: MessageContent) => void;
}

const initialValues = {
  channels: [
    {
      id: uuidv4(),
      title: 'Project A',
      users: []
    },
    {
      id: uuidv4(),
      title: 'Project B',
      users: []
    },
    {
      id: uuidv4(),
      title: 'Project C',
      users: []
    }
  ],
  users: [
    {
      id: uuidv4(),
      name: 'Dr Smith',
      avatarUrl: '/images/avatars/DrSmith.png'
    },
    {
      id: uuidv4(),
      name: 'Gabriela Garrido',
      avatarUrl: '/images/avatars/GabrielaGarrido.png'
    },
    {
      id: uuidv4(),
      name: 'Kira Maru',
      avatarUrl: '/images/avatars/KiraMaru.png'
    }
  ],
  messages: [],
  activeUser: null,
  setActiveUser: () => {},
  sendMessage: () => {},
}

const ChatContext = createContext<ChatContextProps>(initialValues);

export const ChatProvider: FC<any> = ({ children }) => {
  const [channels, setChannels] = useState<Channel[]>(initialValues.channels);
  const [users, setUsers] = useState<User[]>(initialValues.users);
  const [messages, setMessages] = useState<Message[]>(initialValues.messages);
  const [activeUserId, setActiveUserId] = useState<string | undefined>();

  const sendMessage = (content: MessageContent) => {
    if (activeUserId) {
      const newMessage = {
        id: uuidv4(),
        userId: activeUserId,
        content: content
      };

      setMessages(prev => [...prev, newMessage]);
    }
  }

  const value = {
    users,
    channels,
    messages,
    activeUser: users.find((user) => user.id === activeUserId) ?? null,
    setActiveUser: setActiveUserId,
    sendMessage
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChatContext = () => {
  return useContext(ChatContext);
}
