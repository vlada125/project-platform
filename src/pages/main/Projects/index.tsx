// Dependencies
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend  } from 'react-dnd-html5-backend';
// Components

import { MainLayout } from '../../../components/layouts/MainLayout';
import { Section } from '../../../components/Section';
import { ToolBar } from '../../../components/ToolBar';
// Contexts
import { useProjectContext } from '../../../contexts/ProjectContext';

// Export page
const ProjectsPage = () => {
  const { sections, addSection } = useProjectContext();

  return (
    <MainLayout>

      <DndProvider backend={HTML5Backend}>
      <ToolBar />
      {sections.map((section:any) => (
        <Section key={section.id} id={section.id} />
      ))}
      </DndProvider>

      <div className="w-full h-px border border-indigo-500 relative mt-8 mb-16">
        <button className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-40 h-9 bg-indigo-500 rounded-3xl text-white' onClick={addSection}>+ Add Section</button>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
