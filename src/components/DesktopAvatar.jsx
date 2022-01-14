import React, {useContext} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useLogout from '../hooks/useLogout'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const DesktopAvatar = () => {
    const history = useHistory()
    const { user } = useContext(UserContext); 

    const {logoutUser} = useLogout()
    const handleLogout = async () => {
        await logoutUser()
        console.log(user)
        if(!user){
            history.push("/")
        }
    }

    const handleProfile = () => {
        history.push("/profile")
    }

    return (
        <div>
            <div className="py-4 px-16 flex justify-between items-center bg-body">
                <Link to="/">
                    <img src="gocure.svg" alt="" className="cursor-pointer h-10" />
                </Link>
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
                            <Menu.Items className="absolute right-0 w-96 mt-6 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="flex flex-col overflow-y-scroll h-40 scroller">
                                    <div className="p-2 grid grid-cols-2 gap-y-2">
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                onClick={() => history.push("/counseling")}
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className='mb-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 16.7628C3 16.7628 3 16.7628 6.50005 16.7628C10.0001 16.7628 9.63334 -1.2163 11.0299 7.28111C12.4265 15.7785 12.7015 28.0864 14.7911 25.6981C16.8806 23.3099 18.2534 2.05642 19.3881 16.0381C20.5228 30.0197 21.1232 16.0381 23.5672 16.0381C26.0112 16.0381 29 16.0381 29 16.0381" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                Konsultasi & Pemeriksaan Psikologis
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                onClick={() => history.push("/coaching")}
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className='mb-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M28.6445 8.18666L16.1645 4.02666C16.0577 3.99111 15.9423 3.99111 15.8355 4.02666L3.35553 8.18666C3.3481 8.18913 3.34147 8.19291 3.3342 8.19571C3.3231 8.2 3.31234 8.20456 3.30157 8.20954C3.28303 8.21825 3.26502 8.22803 3.24762 8.23884C3.2389 8.24427 3.22998 8.24925 3.22157 8.25515C3.19964 8.27056 3.17893 8.28764 3.15965 8.30625C3.15701 8.30879 3.15396 8.31085 3.15139 8.31346C3.13006 8.3351 3.11068 8.35858 3.09347 8.38363C3.08817 8.39125 3.08389 8.39947 3.079 8.40737C3.06767 8.42547 3.05748 8.44425 3.04847 8.46361C3.04377 8.4738 3.03961 8.48411 3.03558 8.49462C3.02811 8.51433 3.02186 8.53448 3.01686 8.55495C3.01435 8.56498 3.0115 8.57476 3.00959 8.58501C3.00347 8.61631 3.00026 8.64811 3 8.68V19.08C3 19.2179 3.05479 19.3502 3.1523 19.4477C3.24982 19.5452 3.38209 19.6 3.52 19.6C3.65791 19.6 3.79018 19.5452 3.8877 19.4477C3.98521 19.3502 4.04 19.2179 4.04 19.08V9.40151L9.74378 11.3028C9.0404 12.2472 8.56008 13.3387 8.33884 14.4953C8.11761 15.6519 8.16122 16.8437 8.4664 17.981C8.77158 19.1184 9.3304 20.1718 10.1009 21.0624C10.8715 21.9529 11.8337 22.6573 12.9154 23.1228C10.0582 23.8829 7.5849 25.6764 5.97458 28.1559C5.93717 28.2131 5.9114 28.2771 5.89875 28.3443C5.8861 28.4114 5.88681 28.4804 5.90085 28.5473C5.91489 28.6142 5.94198 28.6777 5.98057 28.7341C6.01916 28.7905 6.06849 28.8388 6.12575 28.8761C6.183 28.9134 6.24705 28.9391 6.31424 28.9516C6.38143 28.9642 6.45043 28.9634 6.5173 28.9492C6.58417 28.9351 6.6476 28.9079 6.70395 28.8693C6.76031 28.8306 6.80849 28.7812 6.84573 28.7239C7.83781 27.1999 9.19467 25.9477 10.7932 25.0808C12.3918 24.214 14.1815 23.76 16 23.76C17.8184 23.76 19.6081 24.214 21.2067 25.0808C22.8053 25.9477 24.1621 27.1999 25.1542 28.7239C25.1915 28.7812 25.2396 28.8306 25.296 28.8693C25.3524 28.9079 25.4158 28.9351 25.4827 28.9492C25.5495 28.9634 25.6185 28.9642 25.6857 28.9516C25.7529 28.9391 25.8169 28.9134 25.8742 28.8761C25.9315 28.8388 25.9808 28.7905 26.0194 28.7341C26.058 28.6777 26.0851 28.6142 26.0991 28.5473C26.1131 28.4804 26.1139 28.4114 26.1012 28.3443C26.0886 28.2771 26.0628 28.2131 26.0254 28.1559C24.4151 25.6764 21.9418 23.8829 19.0846 23.1228C20.1663 22.6573 21.1286 21.9529 21.8991 21.0624C22.6696 20.1718 23.2284 19.1184 23.5336 17.981C23.8388 16.8437 23.8824 15.6519 23.6612 14.4953C23.4399 13.3387 22.9596 12.2472 22.2562 11.3028L28.6445 9.17334C28.748 9.13882 28.838 9.07259 28.9019 8.98405C28.9657 8.89551 29 8.78914 29 8.68C29 8.57086 28.9657 8.46449 28.9019 8.37595C28.838 8.28741 28.748 8.22119 28.6445 8.18666ZM22.76 15.96C22.76 17.0447 22.499 18.1135 21.9991 19.0762C21.4991 20.0388 20.7748 20.867 19.8873 21.4907C18.9999 22.1145 17.9754 22.5156 16.9003 22.66C15.8252 22.8045 14.7312 22.6881 13.7106 22.3208C12.6899 21.9534 11.7727 21.3458 11.0363 20.5493C10.3 19.7528 9.76607 18.7908 9.47975 17.7446C9.19343 16.6983 9.16309 15.5985 9.39129 14.5381C9.6195 13.4776 10.0995 12.4877 10.7909 11.6518L15.8355 13.3333C15.9423 13.3689 16.0577 13.3689 16.1645 13.3333L21.2091 11.6518C22.2129 12.8629 22.7616 14.387 22.76 15.96ZM21.2009 10.5582L21.1992 10.5588L16 12.2918L5.16436 8.68L16 5.06818L26.8356 8.68L21.2009 10.5582Z" fill="currentColor"/>
                                                </svg>

                                                Pelatihan & Coaching Murid
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                onClick={() => history.push("/healthtest")}
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className='mb-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="7" cy="10" r="4.5" stroke="currentColor"/>
                                                <circle cx="7" cy="22" r="4.5" stroke="currentColor"/>
                                                <line x1="15.5" y1="12.5" x2="24.5" y2="12.5" stroke="currentColor" stroke-linecap="round"/>
                                                <line x1="15.5" y1="24.5" x2="24.5" y2="24.5" stroke="currentColor" stroke-linecap="round"/>
                                                <line x1="15.5" y1="8.5" x2="29.5" y2="8.5" stroke="currentColor" stroke-linecap="round"/>
                                                <line x1="15.5" y1="20.5" x2="29.5" y2="20.5" stroke="currentColor" stroke-linecap="round"/>
                                                </svg>
                                                Tes Kesehatan
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                onClick={() => history.push("/dyslexia")}
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className='mb-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.6962 16.2334C26.1664 16.2074 26.6346 16.3031 27.0502 16.5107C27.4747 16.7228 27.9676 16.7015 28.3687 16.4535C28.7639 16.2092 28.9999 15.7851 28.9999 15.3193V9.35789C28.9999 9.07189 28.768 8.83996 28.482 8.83996H22.5206C22.3756 8.83996 22.2996 8.75222 22.2673 8.69991C22.2395 8.65501 22.1829 8.53475 22.2556 8.38905C22.5437 7.8126 22.6768 7.16437 22.6406 6.51453C22.5351 4.61944 20.966 3.077 19.0685 3.00299C18.0433 2.96265 17.074 3.33146 16.3369 4.04045C15.5993 4.7497 15.1932 5.70371 15.1932 6.72672C15.1932 7.31306 15.3257 7.87444 15.5873 8.39537C15.658 8.53614 15.6024 8.65377 15.5752 8.69784C15.5424 8.75093 15.4657 8.83996 15.3195 8.83996H9.35783C9.07184 8.83996 8.83991 9.07189 8.83991 9.35789V15.3192C8.83991 15.4642 8.75217 15.5401 8.69981 15.5725C8.65496 15.6003 8.5347 15.6569 8.389 15.5842C7.8126 15.2962 7.16473 15.1629 6.51458 15.1992C4.61949 15.3047 3.07701 16.8737 3.00294 18.7712C2.96296 19.7955 3.33136 20.7657 4.04035 21.5029C4.74965 22.2404 5.70366 22.6466 6.72672 22.6466C7.31307 22.6466 7.87444 22.5141 8.39537 22.2525C8.53635 22.1818 8.65382 22.2375 8.69784 22.2646C8.75093 22.2974 8.83996 22.3741 8.83996 22.5203V28.4821C8.83996 28.7681 9.07189 29 9.35789 29H15.3192C15.7851 29 16.2091 28.764 16.4535 28.3688C16.7014 27.9677 16.7228 27.4748 16.5107 27.0502C16.3032 26.6347 16.2072 26.1665 16.2333 25.6962C16.3095 24.3287 17.4421 23.2156 18.8116 23.1622C19.5512 23.1334 20.2526 23.3992 20.7849 23.9112C21.3174 24.4233 21.6107 25.1122 21.6107 25.8509C21.6107 26.2744 21.5152 26.6794 21.3268 27.0548C21.1153 27.4759 21.1363 27.966 21.383 28.3658C21.6279 28.7628 22.0531 28.9999 22.5202 28.9999H28.482C28.768 28.9999 28.9999 28.768 28.9998 28.482V22.5203C28.9998 22.0531 28.7628 21.628 28.3657 21.383C27.9659 21.1364 27.4759 21.1154 27.0547 21.3268C26.6793 21.5152 26.2743 21.6108 25.8507 21.6108C25.1121 21.6108 24.4232 21.3175 23.9111 20.7849C23.3991 20.2526 23.1331 19.5518 23.162 18.8116C23.2155 17.442 24.3287 16.3095 25.6962 16.2334ZM23.1645 21.5029C23.8738 22.2404 24.8278 22.6466 25.8508 22.6466C26.4371 22.6466 26.9985 22.5141 27.5196 22.2525C27.6603 22.1818 27.7779 22.2374 27.8219 22.2646C27.875 22.2974 27.964 22.3741 27.964 22.5203V27.964H22.5203C22.3741 27.964 22.2974 27.875 22.2646 27.8219C22.2374 27.7779 22.1819 27.6603 22.2526 27.5195C22.514 26.9985 22.6466 26.4371 22.6466 25.8508C22.6466 24.8278 22.2404 23.8738 21.5029 23.1645C20.802 22.4903 19.8904 22.1241 18.9218 22.1241C18.8719 22.1241 18.8216 22.1251 18.7713 22.127C16.8738 22.201 15.3047 23.7434 15.1991 25.6385C15.1629 26.2884 15.2961 26.9366 15.5841 27.513C15.6569 27.6588 15.6002 27.779 15.5724 27.8239C15.54 27.8762 15.4642 27.9639 15.3192 27.9639H9.87571V22.5202C9.87571 22.053 9.63865 21.6278 9.24161 21.3829C8.84183 21.1363 8.35171 21.1153 7.93059 21.3267C7.5552 21.5151 7.15018 21.6107 6.72667 21.6107C5.98801 21.6107 5.29911 21.3174 4.78689 20.7848C4.27502 20.2524 4.00901 19.5517 4.03797 18.8115C4.09147 17.4419 5.20459 16.3094 6.57212 16.2333C7.04214 16.2073 7.51055 16.303 7.92603 16.5106C8.35052 16.7227 8.84343 16.7014 9.24456 16.4535C9.63984 16.2091 9.87581 15.7851 9.87581 15.3192V9.87571H15.3196C15.7867 9.87571 16.2119 9.63865 16.4568 9.24161C16.7035 8.84188 16.7245 8.35171 16.5131 7.93059C16.3247 7.55519 16.2291 7.15018 16.2291 6.72667C16.2291 5.988 16.5224 5.29916 17.0549 4.78699C17.5872 4.27512 18.2879 4.0088 19.0282 4.03796C20.3978 4.09136 21.5303 5.20449 21.6064 6.57202C21.6326 7.04234 21.5367 7.5105 21.3291 7.92608C21.117 8.35062 21.1384 8.84353 21.3863 9.24462C21.6306 9.63984 22.0547 9.87581 22.5206 9.87581H27.964V15.3192C27.964 15.4642 27.8763 15.5402 27.824 15.5725C27.779 15.6003 27.6588 15.6569 27.5131 15.5842C26.9367 15.2962 26.289 15.1629 25.6387 15.1992C23.7436 15.3047 22.2011 16.8737 22.1271 18.7712C22.087 19.7955 22.4555 20.7657 23.1645 21.5029Z" fill="currentColor"/>
                                                <path d="M13.3367 10.7651H11.2832C10.9972 10.7651 10.7652 10.9971 10.7652 11.2831C10.7652 11.5691 10.9972 11.801 11.2832 11.801H13.3367C13.6227 11.801 13.8546 11.5691 13.8546 11.2831C13.8546 10.9971 13.6227 10.7651 13.3367 10.7651Z" fill="currentColor"/>
                                                <path d="M15.8395 10.7651H15.262C14.976 10.7651 14.744 10.9971 14.744 11.2831C14.744 11.5691 14.976 11.801 15.262 11.801H15.8395C16.1255 11.801 16.3574 11.5691 16.3574 11.2831C16.3574 10.9971 16.1255 10.7651 15.8395 10.7651Z" fill="currentColor"/>
                                                </svg>
                                                Pusat Dyslexia
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                onClick={() => history.push("/blogs")}
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className='mb-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="7.5" y1="9.5" x2="17.5" y2="9.5" stroke="currentColor" stroke-linecap="round"/>
                                                <line x1="20.5" y1="20.5" x2="24.5" y2="20.5" stroke="currentColor" stroke-linecap="round"/>
                                                <line x1="18.5" y1="24.5" x2="24.5" y2="24.5" stroke="currentColor" stroke-linecap="round"/>
                                                <line x1="7.5" y1="13.5" x2="12.5" y2="13.5" stroke="currentColor" stroke-linecap="round"/>
                                                <path d="M23.5 8V13.1667C23.5 14.8235 22.1569 16.1667 20.5 16.1667C18.2909 16.1667 16.5 17.9575 16.5 20.1667V20.3333C16.5 22.0822 15.0822 23.5 13.3333 23.5H8C4.96243 23.5 2.5 21.0376 2.5 18V8C2.5 4.96243 4.96243 2.5 8 2.5H18C21.0376 2.5 23.5 4.96244 23.5 8Z" stroke="currentColor"/>
                                                <path d="M23.5 12H24.5C26.9853 12 29 14.0147 29 16.5V25.5C29 27.9853 26.9853 30 24.5 30H16.5C14.0147 30 12 27.9853 12 25.5V23.6757" stroke="currentColor"/>
                                                </svg>

                                                Blog
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                onClick={() => history.push("/webinars")}
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className='mb-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="4.5" y="7.5" width="23" height="15" rx="2.5" stroke="currentColor"/>
                                                <line x1="3.5" y1="25.5" x2="28.5" y2="25.5" stroke="currentColor" stroke-linecap="round"/>
                                                <path d="M16 17C17.3807 17 18.5 15.8807 18.5 14.5C18.5 13.1193 17.3807 12 16 12C14.6193 12 13.5 13.1193 13.5 14.5C13.5 15.8807 14.6193 17 16 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M21 22C21 19.9268 18.759 18.25 16 18.25C13.241 18.25 11 19.9268 11 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                Webinar
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                onClick={() => history.push("/experts")}
                                                className={`${
                                                active ? 'bg-active-button text-white' : 'text-gray-900'
                                                } group flex flex-col rounded-md items-center w-full px-3 py-3 text-sm`}
                                            >
                                                <svg className='mb-2' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 17C12.2091 17 14 15.2091 14 13C14 10.7909 12.2091 9 10 9C7.79086 9 6 10.7909 6 13C6 15.2091 7.79086 17 10 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M18 25C18 21.6829 14.4144 19 10 19C5.58556 19 2 21.6829 2 25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M29 23C29 19.6829 25.4144 17 21 17C18.612 17 16.4665 17.7851 15 19.031" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M18.1716 13.8284C17.4214 13.0783 17 12.0609 17 11C17 9.93913 17.4214 8.92172 18.1716 8.17157C18.9217 7.42143 19.9391 7 21 7C22.0609 7 23.0783 7.42143 23.8284 8.17157C24.5786 8.92172 25 9.93913 25 11C25 12.0609 24.5786 13.0783 23.8284 13.8284C23.0783 14.5786 22.0609 15 21 15C19.9391 15 18.9217 14.5786 18.1716 13.8284L18.1716 13.8284Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                Profil Ahli
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
                            <img src="small-avatar.svg" alt="" className="avatar-ico cursor-pointer dropdown dropdown-end" />
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
                                        onClick={() => handleProfile()}
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
