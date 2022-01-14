import React from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import None from '../components/None'

const ProfilLayanan = () => {
    return (
        <div>
            <div className="hidden md:block">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="py-24 flex items-center justify-center">
                    <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                        <div className="px-8 py-12">
                            <div className="pb-8">
                                <div className="text-sm mb-1">Profil</div>
                                <div className="text-2xl font-bold">Layanan yang diambil</div>
                            </div>
                            <None />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilLayanan
