import React from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import DesktopNotifButton from '../components/DesktopNotifButton'
import MobileButton2 from '../components/MobileButton2'

const ProfileNotification = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="pt-24 pb-6 px-8">
                    <div className="text-sm mb-1">Profil</div>
                    <div className="text-2xl font-bold">Notification</div>
                    <div className="pt-16">
                        <div className="flex flex-col gap-y-3">
                            <div className="text-center font-semibold text-xxs text-gray-400 pb-1">
                                Sab, 27 Oct 2021
                            </div>
                            <MobileButton2
                                title="Pembayaran sudah diterima"
                                desc="Klik untuk info lebih lanjut"
                            />
                        </div>
                    </div>
                </div>  
            </div>
            <div className="hidden md:block">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="pt-36 pb-24">
                    <div className="flex justify-center">
                        <div className="w-5/6 lg:w-4/6 xl:w-1/2">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="mb-1">Profil</div>
                                    <div className="text-3xl font-bold">Notifikasi</div>
                                    <div className="pt-16">
                                        <div className="flex flex-col gap-y-3">
                                            <div className="text-center font-semibold text-xxs text-gray-400 pb-1">
                                                Sab, 27 Oct 2021
                                            </div>
                                            <DesktopNotifButton
                                                title="Pembayaran sudah diterima"
                                                desc="Klik untuk info lebih lanjut"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default ProfileNotification
