// Dependencies
import React, { useContext, useState } from 'react';
// @ts-ignore
import { ChatEngineContext, sendMessage } from 'react-chat-engine';
// @ts-ignore
import moment from 'moment';

// Export component
export const ChatInput = (props: any) => {
  const { creds, activeChat } = props;
  
  const { conn } = useContext(ChatEngineContext) as any;
  
  const [message, setMessage] = useState('');
  const [images, setImages] = useState<(File | null)[]>([]);

  const handleSubmit = () => {
    if (conn) {
      const newMessageData = {
        created: moment(new Date()).format(),
        text: message,
        attachments: images,
        sender_username: creds.userName,
        custom_json: {}
      };

      sendMessage(creds, activeChat, newMessageData, conn.username);
    }
    setMessage('');
    setImages([]);
  };
  
  const handleKeyDown = (e: any) => {
    if (e.code === 'Enter') {
      handleSubmit();
    }
  };
  
  const handleSelectImage = (e: any) => {
    const length = e.target.files?.length;
    let files: (File | null)[] = new Array<File>();
    for(let i = 0; i < length; i++) {
      files[i] = e.target.files.item(i);
    }
    
    setImages(files);
  };
  
  const removeImage = (image: File | null) => {
    setImages(prev => prev.filter((file) => file?.name !== image?.name));
  };

  return (
    <div className="absolute bottom-0 pb-[19px] pl-[26px] pr-[18px] flex w-full bg-[#FFFFFF] pt-4">
      <div className="flex -ml-1 absolute -top-[105px]">
        {images.filter((image) => image !== null).map((image, index) => (
          <div key={`attached-image${index}`} className="w-[108px] h-[108px] relative [&>button]:hover:block m-1">
            <img className="w-full h-full object-cover rounded-[8px] overflow-hidden border-[1px]" src={URL.createObjectURL(image as File)} alt={'image'} />
            <button className="absolute hidden right-2 top-2 w-5 h-5 border-[1px] border-solid rounded-full bg-white leading-[1]" onClick={() => removeImage(image)}>x</button>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-stone-50 rounded-[10px] border border-zinc-300 pr-[6px]">
        <div className="flex items-center min-h-[46px]">
          <input
            className="flex-1 text-[22px] font-normal focus:outline-none pl-[18px] bg-transparent"
            placeholder="Type a new message"
            autoFocus
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <input onChange={handleSelectImage} className="hidden" type="file" id="file-upload" accept="image/*" multiple />
          <label htmlFor="file-upload" className="w-[40px] h-[37px] ml-4 cursor-pointer" onClick={handleSelectImage}>
            <img className="w-full h-full" src="/images/icons/image-bg.svg" alt={'image'} />
          </label>
        </div>
      </div>
      <div className="w-[59px] h-11 bg-gradient-to-br from-sky-500 to-pink-500 ml-[14px] rounded-[6px] mt-[2.5px] relative">
        <button className="w-[53px] h-[43px] left-[3px] top-0 absolute text-center text-white text-base font-normal" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
};
