import React from 'react'
import BackButton from './BackButton'

const MobileNavbar = () => {
    return (
        <div>
            <div className="pt-4 flex justify-between items-center">
                <BackButton />
                <div className="flex gap-x-4">
                    <img src="notif-active.svg" alt="" className="cursor-pointer" />
                    <img src="avatartest.png" alt="" className="avatar-navbar cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar
