// Dependencies
import React from 'react';
import { Header } from '../Header';

// Types
import { MainLayoutProps } from './types';

// Routes
import * as ROUTES from '../../../constants/routes';

// Contexts
import { useAppContext } from '../../../contexts/AppContext';
import { useTaskContext } from "../../../contexts/TaskContext";

// Components
import { Chat } from '../../Chat';
import { FloatingButton } from "../../FloatingButton";

// Export component
export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  const { showMessageBox, headerHeight } = useAppContext();

  const { addTask } = useTaskContext();

  const navItems = [
    {
      label: 'Home',
      redirect: ROUTES.HOME
    },
    {
      label: 'Projects',
      redirect: ROUTES.PROJECTS
    },
    {
      label: 'Tasks',
      redirect: ROUTES.TASKS
    },
    {
      label: 'Files',
      redirect: '/files'
    },
    {
      label: 'Create',
      redirect: '/create'
    },
    {
      label: 'Library',
      redirect: '/library'
    },
  ]

  return (
    <div className={'h-screen flex flex-col'}>
      <Header navItems={navItems} />
      <div className={`bg-primaryBg flex-1 max-h-screen overflow-auto`} style={{ paddingTop: headerHeight }}>
        {showMessageBox ? <Chat /> : children}
      </div>

      {!showMessageBox && (
        <FloatingButton onAddTask={addTask} />
      )}
    </div>
  );
};
