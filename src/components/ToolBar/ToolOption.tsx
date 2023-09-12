// Dependencies
import React, { FC } from 'react';
import { useDrag } from 'react-dnd';

// Types
import { TOOL_TYPE, ToolOptionProps } from './types';

// Contexts
import { useProjectContext } from '../../contexts/ProjectContext';

// Export component
export const ToolOption: FC<ToolOptionProps> = (props) => {
  const { icon, type, label } = props;
  const { addWidget } = useProjectContext();
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type || TOOL_TYPE.TEMPLATES,
    item: { type, name: label },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult() as {id: string};
      if (item && dropResult) { 
        addWidget(dropResult.id, type || TOOL_TYPE.TEMPLATES);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} className="flex flex-col items-center py-[5px] mx-1 relative z-30" style={{ opacity }}>
      <img src={icon} alt={'option icon'} />
      {!!label && (<p className="text-center text-neutral-500 text-xs font-medium mt-[3px]">{label}</p>)}
    </div>
  );
};
