import React from 'react'
import MobileButton2 from '../components/MobileButton2'

const ProfileNotification = () => {
    return (
        <div>
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
    )
}

export default ProfileNotification
