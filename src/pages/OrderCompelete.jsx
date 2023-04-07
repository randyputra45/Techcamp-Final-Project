import React from 'react'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'

const OrderCompelete = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="py-24">
                    <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                        <div className="px-6 py-12">
                            <div className="p-12 flex justify-center">
                                <img src="complete.svg" alt="" />
                            </div>
                            <div className="font-bold text-sm">
                                Pemesanan konselingmu hampir selesai nih
                            </div>
                            <div className="mt-2 text-sm leading-relaxed">
                                Sangan lupa periksa emailmu ya untuk detil pemesanan, jadwal maupun link konselingnya, anda juga bisa mengakses informasi tersebut lewat laman profil anda.
                            </div>
                            <div className="mt-6 text-sm">
                                Selamat berkonsultasi :)
                            </div>
                            <div className="pt-12 w-full">
                                <Button title="Periksa Laman Konsultasi" />
                            </div>
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
                <div className="py-24 flex items-center justify-center">
                    <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                        <div className="px-8 py-12">
                            <div className="p-12 flex justify-center">
                                <img src="complete.svg" alt="" />
                            </div>
                            <div className="font-bold text-sm">
                                Pemesanan konselingmu berhasil
                            </div>
                            <div className="mt-2 text-sm leading-relaxed">
                                Jangan lupa periksa emailmu ya untuk detil pemesanan, jadwal maupun link konselingnya, anda juga bisa mengakses informasi tersebut lewat laman profil anda.
                            </div>
                            <div className="mt-6 text-sm">
                                Selamat berkonsultasi :)
                            </div>
                            <div className="pt-12 w-full">
                                <Button title="Periksa Laman Konsultasi" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCompelete
