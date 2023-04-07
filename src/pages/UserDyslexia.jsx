import React from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import LayananCard from '../components/LayananCard'
import PaymentCard from '../components/PaymentCard'
import usePayDyslexia from "../hooks/usePayDyslexia"
import None from '../components/None'

const UserDyslexia = () => {
    const{userDyslexia} = usePayDyslexia()

    console.log(userDyslexia)

    return (
        <div>
            <div className="block md:hidden">
                <div className="px-4 pt-4 pb-12">
                    <LayananCard
                        title="Pusat Dyslexia"
                    />
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="px-8 lg:px-12 2xl:px-48 pt-36 pb-12">
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="text-xl font-bold">Riwayat Pemesanan Layanan Dyslexia</div>
                                </div>
                                <div className="font-bold">Anda telah memesan</div>
                                {userDyslexia && userDyslexia.map((consul) => (
                                    <PaymentCard screening={false} title="Pusat Dyslexia" package={consul.package_name} order_id={consul.payment_details.order_id} date={consul.date} price={consul.price}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDyslexia
