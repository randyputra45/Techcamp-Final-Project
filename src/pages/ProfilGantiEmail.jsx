import React from 'react'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import Form from '../components/Form'

const ProfilGantiEmail = () => {
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
                            <div className="text-xl font-bold">Ganti Kata Sandi</div>
                            <div className="pt-12">
                                <div className="font-bold mb-2">
                                    Masukan email baru
                                </div>
                                <Form 

                                />
                            </div>
                            <div className="pt-8">
                                <Button
                                    title="Ganti Password"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilGantiEmail
