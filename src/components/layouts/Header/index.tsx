// Dependencies
import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom'
// Components
import { Button } from '../../common/Button';
import { SearchBox } from '../../SearchBox';

// Types
import { HeaderProps } from './types';
import { BUTTON_VARIANTS } from '../../common/Button/types';

// Contexts
import { useAppContext } from '../../../contexts/AppContext';

// Export component
export const Header = (props: HeaderProps) => {
    const { navItems } = props;
    const { setHeaderHeight } = useAppContext();
    const currentPath = window.location.pathname;
    const [showMenu, setShowMenu] = useState<Boolean>(false);
    const headerRef = useRef(null);

    const { setShowMessageBox } = useAppContext();

    useEffect(() => {
      if (headerRef.current !== null) {
        // @ts-ignore
        setHeaderHeight(headerRef.current?.clientHeight);
      }
    }, [headerRef.current])

    return (
        <div className="flex w-screen fixed top-0 left-0 bg-white z-[999]" ref={headerRef}>
            <div className="container">
                <nav className="flex items-center justify-between flex-wrap py-4">
                    <div className="flex items-center flex-shrink-0 text-white mr-[60px]">
                       <img src="/images/logos/Logo-01.svg" className="w-[88px] h-[60px]" alt={'Logo'} />
                    </div>
                    <div className="block lg:hidden">
                        <button className="flex items-center px-3 py-2 border rounded border-secondary" onClick={() => setShowMenu(!showMenu)}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            {
                                navItems.map((item: any, index: number) => (
                                    <Link to={item.redirect} onClick={() => setShowMessageBox(false)} className={`block mt-4 lg:inline-block lg:mt-0 md:mr-10 text-lg ${currentPath === item.redirect ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF45C9] to-[#A10674] font-bold': 'font-medium text-grey'}`} key={index}>
                                       {item.label}
                                    </Link>
                                ))
                            }
                        </div>
                        <div className='md:flex items-center gap-3'>
                            <SearchBox placeholder='Search here' className='' />
                            <Button className={'button-primary-gradient text-white text-[22px] mt-4 md:mt-0'} variant={BUTTON_VARIANTS.CONTAINED} onClick={() => setShowMessageBox(true)} label={'Messages'} type='submit' />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};
