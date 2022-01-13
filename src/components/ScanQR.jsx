import { SatelliteAlt } from '@mui/icons-material'
import React from 'react'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import useConsultation from '../hooks/useConsultation'
import ButtonAction from './ButtonAction'

const ScanQR = (props) => {
    const { state } = props.location
    console.log(state.qrisUrl)

    return (
        <div>
            <div className="block md:hidden">
                <div className="py-24">
                    <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                        <div className="px-6 py-12">
                            <div className="p-12 flex justify-center">
                                <img src={window.location.origin + '/image/qr-code.png'} alt="" className='h-40' />
                            </div>
                            <div className="font-bold text-sm">
                                Selesaikan pembayaran transaksi kamu
                            </div>
                            <div className="mt-2 text-sm leading-relaxed">
                                Jangan lupa periksa emailmu ya untuk detil pemesanan, jadwal maupun link konselingnya, anda juga bisa mengakses informasi tersebut lewat laman profil anda.
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
                        <div className="px-8 py-12 text-center">
                            <div className="p-12 flex justify-center">
                                <img src={state.qrisUrl} alt="" className='h-40' />
                            </div>
                            <div className="font-bold text-md">
                                Selesaikan pembayaran transaksi kamu dalam 15 menit
                            </div>
                            <div className="mt-2 text-sm leading-relaxed">
                                Scan QR Code QRIS diatas dengan menggunakan aplikasi {state.payment_method}. Jangan lupa periksa emailmu ya untuk detil pemesanan, jadwal maupun link konselingnya, Anda juga bisa mengakses informasi tersebut lewat laman profil anda.
                            </div>
                            <div className='py-6 px-20'>
                                <ButtonAction title="Cek Status Pembayaran"></ButtonAction>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScanQR
