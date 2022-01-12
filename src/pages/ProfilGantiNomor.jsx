import React from 'react'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import Form from '../components/Form'
import PhoneDropdown from '../components/PhoneDropdown'

const ProfilGantiNomor = () => {
    return (
        <div>
            <div className="hidden md:block">
                <div className="bg-begron"></div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="flex h-screen items-center justify-center">
                    <div className="md:w-1/2 lg:w-2/5 2xl:w-2/6 bg-white rounded-xl">
                        <div className="px-10 py-12">
                            <div className="text-xl font-bold">Ganti Nomor</div>
                            <div className="pt-12">
                                <div className="font-bold mb-1">Masukan Nomor Telepon</div>
                                <div className="flex items-center gap-x-8">
                                    <PhoneDropdown />
                                    <div className="w-full">
                                        <Form
                                        type={"text"}
                                        name={"no_telp"} 
                                        placeholder="0000-0000-0000"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8">
                                <Button
                                    title="Ganti Nomor"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ProfilGantiNomor
