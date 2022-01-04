import React from 'react'
import MobileButton from '../components/MobileButton'
import NotifButton from '../components/NotifButton'

const ProfileWebinar = () => {
    return (
        <div>
            <div className="pt-24 pb-6 px-8">
            <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="text-sm mb-1">Akun</div>
                        <div className="text-2xl font-bold">Webinar</div>
                    </div>
                    <NotifButton />
                </div>
                <div className="pt-8">
                    <div className="flex flex-col gap-y-3">
                        <div className="font-bold text-sm">Sudah Dipesan</div>
                        
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex flex-col gap-y-3">
                        <div className="font-bold text-sm">Akun</div>
                        <MobileButton 
                            pic="pdf.svg"
                            title="Menjaga Kesehatan Mental Di Masa Pandemi COVID-19"
                            desc="klik untuk download (PDF)"
                        />
                        <MobileButton 
                            pic="pdf.svg"
                            title="Menjaga Kesehatan Mental Di Masa Pandemi COVID-19"
                            desc="klik untuk download (PDF)"
                        />                        
                        <MobileButton 
                            pic="pdf.svg"
                            title="Menjaga Kesehatan Mental Di Masa Pandemi COVID-19"
                            desc="klik untuk download (PDF)"
                        />
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default ProfileWebinar
