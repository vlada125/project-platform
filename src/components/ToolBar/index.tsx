// Dependencies
import React, { FC } from 'react';

// Types
import { ToolBarProps } from './types';

// Helpers
import { toolOptions } from './helpers';

// Components
import { ToolOption } from './ToolOption';

// Export component
export const ToolBar: FC<ToolBarProps> = (props) => {
  return (
    <div className="absolute flex flex-col items-center left-0 top-1/2 w-[90px] z-10 card-shadow py-1 transform transform-gpu -translate-y-2/4">
      <div className="absolute bg-white opacity-90 w-full h-full left-0 top-0 rounded-[10px]" />
      {toolOptions.map((option, index) => (
        <div key={`tool-option${index}`} className={`flex flex-col items-center py-[5px] w-full px-1 relative cursor-pointer [&>.sub-tools]:hover:opacity-100 [&>.sub-tools]:hover:flex select-none`} style={{ zIndex: index }}>
          <img src={option.icon} alt={'option icon'} />
          <p className="text-center text-neutral-500 text-xs font-medium mt-[3px]">{option.label}</p>
          {!!option.subTools && (
            <div className="opacity-0 absolute sub-tools left-[100%] top-0 hidden flex-col items-center w-[90px] rounded-[10px] overflow-hidden card-shadow py-1 transition-all duration-500"  style={{ zIndex: index }}>
              <div className="absolute bg-white opacity-90 w-full h-full left-0 top-0 rounded-[10px] bottom-8" />
              {option.subTools.map((subOption, idx) => (
                <ToolOption key={`sub-tool-option${idx}`} icon={subOption?.icon} label={subOption?.label} type={subOption?.type} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
