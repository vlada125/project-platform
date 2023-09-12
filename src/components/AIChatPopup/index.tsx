// Dependencies
import React, {FC} from "react";
import classNames from "classnames";
// Types
import {AIChatPopupProps} from "./types";
// Styles
import "./style.css";

// Export component
export const AIChatPopup: FC<AIChatPopupProps> = ({
  opened,
  onClose,
}) => {
  const userInfo = {
    name: 'Lucy Smith',
    avatar: '/images/avatars/Erick.png',
  };

  const chats = [
    {
      question: 'What are you?',
      answer: `I am ChatGPT, a state-of-the-art language model created by OpenAI. I'm designed to understand and generate human-like text based on the input I receive. You can think of me as a computer program that uses a vast amount of text data to provide information, answer questions, generate text, and engage in conversations on a wide range of topics. Is there something specific you would like to know or discuss?`
    },
    {
      question: 'Do you like kitty cats?',
      answer: `I don't have personal feelings or emotions, so I don't experience likes or dislikes. However, I can provide information and answer questions about cats if you're interested! Cats are popular pets known for their playful and independent nature. They come in various breeds, sizes, and colors, and many people find their antics and companionship quite endearing. Is there something specific you'd like to know about cats?`,
    },
    {
      question: 'Why do cats always land on their feet?',
      answer: `Cats have a remarkable ability to usually land on their feet when they fall. This behavior is often referred to as the "righting reflex." It's a combination of their anatomy, physiology, and natural instincts that allow them to perform this acrobatic feat. Here's how it works:
        <ol>
         <li><b>Flexible Spine</b>: Cats have a highly flexible spine, with many more vertebrae than humans. This gives them a great degree of agility and allows them to twist their bodies quickly.</li>
         <li><b>Inner Ear Balance</b>: Cats have a very sensitive vestibular system in their inner ear, which helps them maintain balance and orientation. This enables them to quickly sense which way is up or down, helping them adjust their body position mid-air.</li>
         <li><b>Rotating Front and Back Halves</b>: Cats can rotate the front half of their body independently from the back half. This allows them to adjust their orientation in mid-air, essentially splitting their body into two parts that can move separately.</li>
         <li><b>Quick Reflexes</b>: Cats have fast reflexes and can react quickly to external stimuli. When they sense they are falling, their body automatically goes into a twisting motion to align themselves properly for a feet-first landing.</li>
         <li><b>Flexed Limbs</b>: Cats tend to keep their limbs slightly bent when falling, which helps to slow down their rotation due to air resistance.</li>
         <li><b>Reduced Terminal Velocity</b>: Due to their relatively low body mass, cats have a higher surface area-to-mass ratio compared to larger animals.</li>
        </ol>`,
    },
  ];

  const containerClass = classNames(
    'fixed top-0 left-0 z-[900] w-screen h-screen flex justify-center pt-36 transition-all',
    opened ? 'backdrop-blur' : 'opacity-0 pointer-events-none',
  );

  const popupClass = classNames(
    'w-[1500px] max-w-[90%] h-[90%] flex flex-col bg-white rounded-3xl card-shadow overflow-hidden transition-all',
    !opened && 'translate-y-40',
  );

  const popupTitleClass = classNames(
    'h-20 flex items-center bg-chat-popup-title text-white text-[1.875rem] font-semibold px-4'
  );

  const chatBotIconClass = classNames(
    'flex items-center justify-center bg-white border-2 border-lightBlue rounded-full',
  );

  return (
    <div className={containerClass}>
      <div className={popupClass}>
        <div className={popupTitleClass}>
          <div className={classNames(chatBotIconClass, 'w-[3.75rem] h-[3.75rem]')}>
            <img className="w-10" src="/images/icons/chat-bot-blue.svg" alt="" />
          </div>
          <div className="ml-3">AI Chat</div>
          <div
            className="w-10 h-10 flex items-center justify-center bg-white text-gray rounded-full ml-auto cursor-pointer"
            onClick={onClose}
          >
            <img className="w-4" src="/images/icons/close-gray.svg" alt="" />
          </div>
        </div>

        <div className="chat-content flex-1 overflow-auto">
          {chats.map((chat, i) => (
            <div key={i} className="p-3 mb-2">
              <div className="max-w-[80%] flex justify-end ml-auto">
                <div className="text-right">
                  <div className="text-gray-5c text-sm font-medium">{userInfo.name}</div>
                  <div className="bg-chat-speech text-white text-base font-medium leading-[1.25rem] rounded-[0.625rem] pl-5 pr-3 py-2 mt-1">
                    {chat.question}
                  </div>
                </div>
                <div className="w-10 h-10 flex-shrink-0 rounded-full ml-4 mt-6">
                  <img src={userInfo.avatar} alt="" />
                </div>
              </div>
              <div className="max-w-[80%] flex mt-2">
                <div className={classNames(chatBotIconClass, 'w-11 h-11')}>
                  <img className="w-8" src="/images/icons/chat-bot-blue.svg" alt="" />
                </div>
                <div className="flex-1 ml-4">
                  <div className="text-gray-5c text-sm font-medium">AI Chat</div>
                  <div className="text-lg font-light leading-[1.5rem] mt-1" dangerouslySetInnerHTML={{ __html: chat.answer }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex px-5 pt-2 pb-5">
          <input
            className="flex-1 h-11 bg-gray-f9 border border-border rounded-[0.625rem] px-4 outline-none"
            placeholder="Send a message"
          />
          <button className="button-primary-gradient text-white text-base font-bold rounded-[0.625rem] px-4 ml-4">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
