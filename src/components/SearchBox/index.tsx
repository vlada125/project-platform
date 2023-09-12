// Dependencies
import React from 'react';

// Components
import { Button } from '../common/Button';

// Types
import { SearchBoxProps } from './types';

// Export component
export const SearchBox = (props: SearchBoxProps) => {
    const { placeholder } = props;

    return (
        <div className='rounded-[30px] border-border border  pr-0 flex shadow-primary'>
            <input className='px-5 py-2 text-base border-none focus:outline-none text-secondary font-normal rounded-[30px] w-full lg:w-[400px] placeholder-secondary' placeholder={placeholder} />
            <Button label={ <img src="/images/icons/search.svg" alt="" width={43} height={43} />} className='button-primary-gradient rounded-full mr-[2px]' ></Button>
        </div>
    );
};
