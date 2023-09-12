// Dependencies
import React, {FC, KeyboardEventHandler, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import classNames from "classnames";
// Types
import {FloatingButtonProps} from "./types";
import {AIChatPopup} from "../AIChatPopup";

// Export component
export const FloatingButton: FC<FloatingButtonProps> = ({
  onAddTask,
}) => {
  const location = useLocation();
  const [opened, setOpened] = useState(false);
  const [addingTask, setAddingTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [chatOpened, setChatOpened] = useState(false);

  const showEditPageAction = location.pathname.startsWith('/projects');

  const buttonClass = classNames(
    'w-15 hover:drop-shadow-lg cursor-pointer transition-all duration-300',
    opened && 'rotate-[360deg]',
  );

  const actionClass = classNames(
    'absolute w-max h-10 flex items-center',
    'bg-white border-2 border-lightBlue rounded-[0.625rem] card-shadow hover:card-shadow-hover cursor-pointer transition-all',
    'text-lightBlue text-[0.9375rem] font-bold gap-1',
    !opened && 'opacity-0 scale-0 !right-2 !bottom-2 pointer-events-none',
  );

  const newTaskActionClass = classNames(
    actionClass,
    'pl-0.5 pr-1.5',
    showEditPageAction ? 'bottom-2 right-24' : 'bottom-5 right-[5.5rem]',
  );

  const editPageActionClass = classNames(
    actionClass,
    'bottom-[3.75rem] right-20 pl-1 pr-2',
  );

  const chatBotActionClass = classNames(
    actionClass,
    'pl-1.5 pr-2',
    showEditPageAction ? 'bottom-28 right-1' : 'bottom-[5.5rem] right-9',
  );

  const inputClass = classNames(
    'h-10 flex-1 font-inter text-lg px-2 outline-none card-shadow',
    'bg-white border border-lightBlue rounded-[0.625rem]',
  );

  useEffect(() => {
    if (!opened) {
      setAddingTask(false);
      setTaskTitle('');
    }
  }, [opened]);

  const onNewTaskActionClicked = () => {
    setAddingTask(true);
  };

  const onCreateTask = () => {
    if (!taskTitle) {
      return;
    }

    onAddTask(taskTitle);
    setOpened(false);
  };

  const onTitleInputKeyDown: KeyboardEventHandler = (e) => {
    if (e.key === 'Enter') {
      onCreateTask();
    } else if (e.key === 'Escape') {
      setAddingTask(false);
      setTaskTitle('');
    }
  };

  const onEditPage = () => {
    setOpened(false);
  };

  const onShowChatBot = () => {
    setChatOpened(true);
    setOpened(false);
  };

  return (
    <div className={classNames('fixed bottom-10 right-5 z-[20]')}>
      <div className="relative z-10">
        <img
          className={buttonClass}
          src="/images/icons/floating-button.png"
          alt=""
          onClick={() => setOpened(!opened)}
        />
      </div>

      {!addingTask ? (
        <>
          <div className={newTaskActionClass} onClick={onNewTaskActionClicked}>
            <img src="/images/icons/new-task-blue.png" alt="" />
            New Task
          </div>

          {showEditPageAction && (
            <div className={editPageActionClass} onClick={onEditPage}>
              <img src="/images/icons/edit-fill-blue.svg" alt="" />
              Edit Page
            </div>
          )}

          <div className={chatBotActionClass} onClick={onShowChatBot}>
            <img src="/images/icons/chat-bot-blue.svg" alt="" />
            Chat with AI
          </div>
        </>
      ) : (
        <div className="absolute right-24 bottom-4 w-[calc(100vw-9rem)] max-w-[58rem] flex items-center gap-5">
          <input
            className={inputClass}
            value={taskTitle}
            placeholder="Add task here"
            autoFocus
            onKeyDown={onTitleInputKeyDown}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button
            className="h-10 bg-lightBlue text-white text-lg font-semibold rounded-[0.625rem] card-shadow hover:card-shadow-hover px-6 transition-all"
            onClick={onCreateTask}
          >
            Add
          </button>
        </div>
      )}

      <AIChatPopup opened={chatOpened} onClose={() => setChatOpened(false)} />
    </div>
  );
};
