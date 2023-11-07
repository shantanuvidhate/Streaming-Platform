"use client";
import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavBarItem from "./NavBarItem";
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;
const NavBar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handelScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        // eventListner
        window.addEventListener('scroll', handelScroll);

        // unmount function

        return () => {
            window.removeEventListener('scroll', handelScroll);
        }

    },[])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);
    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);
    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' :''}`}>
                {/* <img className="h-4 lg:h-7" src="/images/logo.png" alt="" /> */}
                <div className="text-4xl text-white font-bold">T-Stream</div>
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavBarItem label="Home" />
                    <NavBarItem label="Series" />
                    <NavBarItem label="Films" />
                    <NavBarItem label="New and Popular" />
                    <NavBarItem label="My List" />
                    <NavBarItem label="Browse by langauges" />
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition  ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visibile={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition"> <BsSearch /></div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition"> <BsBell /></div>

                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/default-blue.png" alt="Profile" />
                        </div>
                        <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>


            </div>
        </nav>
    );
}
export default NavBar;