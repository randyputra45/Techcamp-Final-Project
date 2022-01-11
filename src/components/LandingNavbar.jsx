import React from 'react'
import DesktopActiveButton from './DesktopActiveButton'
import DesktopActiveButton2 from './DesktopActiveButton2'

const LandingNavbar = () => {
    return (
        <div>
            <div className="bg-gray-50 py-6 px-12 flex items-center justify-between">
                <img src="gocure.svg" alt="" className="h-10" />
                <div className="flex gap-x-4">
                    <DesktopActiveButton2
                        title="Masuk"
                        url="/login"
                    />
                    <DesktopActiveButton
                        title="Daftar"
                        url="/register"
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingNavbar
