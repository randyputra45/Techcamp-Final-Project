import React from 'react';
import Avatar from '../images/avatar-toji.png';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="bg-indigo-50 h-full px-5">
                <div className="py-9 font-bold">
                    Logo Here
                </div>
                <div className="flex flex-col gap-y-5 py-3">
                    <p className="text-xs">Menu</p>
                    <SidebarButton icon="sidebar-home.svg" name="Home" />
                    <SidebarButton icon="" name="Konseling" />
                    <SidebarButton icon="sidebar-webinar.svg" name="Webinar" />
                    <SidebarButton icon="sidebar-blog.svg" name="Blog" />
                </div>
                <div className="flex flex-col gap-y-5 py-3">
                    <p className="text-xs">Lainnya</p>
                    <SidebarButton icon="sidebar-psikolog.svg" name="Psikolog" />
                    <SidebarButton icon="sidebar-tes.svg" name="Tes Kesehatan" />
                </div>
            </div>
            <div className="bottom bg-indigo-300 py-5 px-5">
                <div className="flex items-center">
                    <img className="w-10" src={Avatar} alt="avatar" />
                    <div className="pl-4">
                        <div className="text-sm font-medium">
                            Salman Setiawan
                        </div>
                        <div className="text-xs">
                            Mahasiswa
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
