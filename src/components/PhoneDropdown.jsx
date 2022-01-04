import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Flag from './Flag'

const PhoneDropdown = () => {
    return (
        <div>
            <Menu as="div" className="relative">
                <div>
                    <Menu.Button className="flex items-center">
                        <Flag
                            flag="+62.svg"
                            code="+62"
                        />
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
                    <Menu.Items className="absolute bottom-0 left-0 w-64 mb-9 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-1">
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-hover-button' : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-3 py-3 text-sm`}
                            >
                                <Flag
                                    flag="+61.svg"
                                    code="+61"
                                    name="Australia"
                                />
                            </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-hover-button' : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-3 py-3 text-sm`}
                            >
                                <Flag
                                    flag="+673.svg"
                                    code="+673"
                                    name="Brunei Darussalam"
                                />
                            </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-hover-button' : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-3 py-3 text-sm`}
                            >
                                <Flag
                                    flag="+62.svg"
                                    code="+62"
                                    name="Indonesia"
                                />
                            </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-hover-button' : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-3 py-3 text-sm`}
                            >
                                <Flag
                                    flag="+64.svg"
                                    code="+64"
                                    name="New Zealand"
                                />
                            </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                            <button
                                className={`${
                                active ? 'bg-hover-button' : 'text-gray-900'
                                } group flex rounded-md items-center w-full px-3 py-3 text-sm`}
                            >
                                <Flag
                                    flag="+63.svg"
                                    code="+63"
                                    name="Philipine"
                                />
                            </button>
                            )}
                        </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>            
        </div>
    )
}

export default PhoneDropdown
