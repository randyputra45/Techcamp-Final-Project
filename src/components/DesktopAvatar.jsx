import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useLogout from '../hooks/useLogout'

const DesktopAvatar = () => {
    const {logoutUser} = useLogout();

    const handleLogout = async () => {
        console.log("Clicked")
        await logoutUser();
    }

    return (
        <div>
            <div className="py-4 px-16 flex justify-between items-center bg-body">
                <img src="gocure.svg" alt="" className='cursor-pointer h-10' />
                <div className="flex items-center gap-x-6">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                        <Menu.Button className="flex items-center">
                            <img src="menu.svg" alt="" className="cursor-pointer h-9 dropdown dropdown-end" />
                        </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 w-56 mt-6 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="flex flex-col overflow-y-scroll h-40 scroller">
                                    <div className="p-1 flex">
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                Profil
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                                Keluar
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                                Keluar
                                            </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="p-1 flex">
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                Profil
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                                Keluar
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                                Keluar
                                            </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="p-1 flex">
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                Profil
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                                Keluar
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                                Keluar
                                            </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <img src="notif-active.svg" alt="" className="cursor-pointer h-9" />
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                        <Menu.Button className="flex items-center">
                            <img src="avatar.png" alt="" className="avatar-ico cursor-pointer dropdown dropdown-end" />
                        </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 w-56 mt-6 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="p-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        className={`${
                                        active ? 'bg-active-button text-white' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-3 py-3 text-sm`}
                                    >
                                        <svg className="w-6 h-6 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Profil
                                    </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        onClick={() => handleLogout()}
                                        className={`${
                                        active ? 'bg-active-button text-white' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-3 py-3 text-sm`}
                                    >
                                        <svg className="w-6 h-6 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                        Keluar
                                    </button>
                                    )}
                                </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>     
        </div>
    )
}

export default DesktopAvatar
