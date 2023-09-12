// Dependencies
import React, { useState, createContext, useContext, FC, Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from "uuid";
import { TOOL_TYPE } from '../components/ToolBar/types';
// Types
type Widget = {
  id: string
  i: string
  x: number
  y: number
  w: number
  h: number
  minW: number,
  minH: number,
  maxW: number,
  maxH: number,
  draggableHandle: string
  isResizable: boolean,
  type: string;
}

type Section = {
  id: string;
  title: string;
  widgets: Widget[];
}

interface ProjectContextProps {
  sections: Section[];
  addSection: () => void;
  updateSection: (section: Section) => void;
  addWidget: (sectionId: string, type: string) => void;
  removeWidget: (sectionId: string, widgetId: string) => void;
  removeSection: (sectionId: string) => void
}

const initialValues = {
  sections: [{
    id: uuidv4(),
    title: 'New Section',
    widgets: []
  }],
  addSection: () => { },
  updateSection: () => { },
  addWidget: () => { },
  removeWidget: () => { },
  removeSection: () => { }
}

const ProjectContext = createContext<ProjectContextProps>(initialValues);
// Export Component
export const ProjectProvider: FC<any> = ({ children }) => {
  const [sections, setSections] = useState<Section[]>(initialValues.sections);
  const addSection = () => {
    const newSection = {
      id: uuidv4(),
      title: 'New Section',
      widgets: []
    };

    setSections(prevSections => [...prevSections, newSection]);
  };

  const updateSection = (section: Section) => {
    setSections(prevSections => prevSections.map((oldSection) => oldSection.id === section.id ? section : oldSection));
  }

  const addWidget = (sectionId: string, type: string) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.id === sectionId) {
          const maxRow = section?.widgets?.length !== 0 ? section?.widgets[section?.widgets.length - 1].y + section?.widgets[section?.widgets.length - 1].h : 0;

          const newWidget = {
            id: uuidv4(),
            i: uuidv4(),
            x: 1,
            y: maxRow,
            w: 13,
            h: 13,
            minW: 5,
            minH: 13,
            maxH: 14,
            maxW: 300,
            isResizable: true,
            draggableHandle: '.drag-handle',
            type: type,
          };

          switch (type) {
            case TOOL_TYPE.CHART_BAR:
              newWidget.h = 12;
              newWidget.maxH = 12
              newWidget.isResizable = false
              break;
            case TOOL_TYPE.CHART_LINE:
              newWidget.w = 100;
              newWidget.h = 13;
              newWidget.maxH = 13
              newWidget.isResizable = false
              break;
              case TOOL_TYPE.CHART_PIE:
                newWidget.w = 6;
                newWidget.maxW = 6
                newWidget.h = 13;
                newWidget.maxH = 13
                newWidget.isResizable = false
                break;
            case TOOL_TYPE.CHART_BOX_PLOT:
              newWidget.w = 100;
              newWidget.h = 14;
              newWidget.maxH = 14
              newWidget.isResizable = false
              break;
            case TOOL_TYPE.TABLE_STANDARD:
              newWidget.h = 11
              newWidget.minH = 11
              newWidget.maxH = 11
              newWidget.minW = 12
              newWidget.isResizable = false
              break
            case TOOL_TYPE.TABLE_STATUS:
              newWidget.maxH = 300
              newWidget.minH = 33
              newWidget.minW = 8
              newWidget.w = 8
              newWidget.h = 33
              newWidget.isResizable = false
              break
            case TOOL_TYPE.IMAGE_SINGLE:
              newWidget.maxH = 20
              newWidget.minH = 10
              newWidget.h = 10
              break
            case TOOL_TYPE.VIDEO_YOUTUBE:
              newWidget.h = 20

              newWidget.maxH = 25
              break
            case TOOL_TYPE.SMART_FILE_UPLOAD:
              newWidget.h = 12
              newWidget.minH = 12
              newWidget.maxH = 12
              newWidget.minW = 12
              newWidget.isResizable = false
          }

          return {
            ...section,
            widgets: [...section.widgets, newWidget],
          };
        }
        return section;
      })
    );
  };

  const removeWidget = (sectionId: string, widgetId: string) => {
    setSections(prevSections => prevSections.map(section => section.id === sectionId ? ({
      ...section,
      widgets: section.widgets.filter(widget => widget.id !== widgetId)
    }) : section))
  };

  const removeSection = (sectionId: string) => {
    setSections(sections.filter(section => section.id !== sectionId))
  };

  const value = {
    sections,
    addSection,
    updateSection,
    addWidget,
    removeWidget,
    removeSection,
  }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProjectContext = () => {
  return useContext(ProjectContext);
}
