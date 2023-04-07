import React from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import LayananCard from '../components/LayananCard'
import PaymentCard from '../components/PaymentCard'
import useConsultation from "../hooks/useConsultation"
import None from '../components/None'

const UserConseling = () => {
    const{userConsul} = useConsultation()

    console.log(userConsul)

    return (
        <div>
            <div className="block md:hidden">
                <div className="px-4 pt-4 pb-12">
                    <LayananCard
                        title="MENJAGA KESEHATAN MENTAL DI MASA PANDEMI COVID-19"
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
                                    <div className="text-xl font-bold">Riwayat Pemesanan Conseling</div>
                                </div>
                                <div className="font-bold">Anda telah memesan</div>
                                {userConsul && userConsul.map((consul) => (
                                    <PaymentCard screening={true} package={consul.package_name} order_id={consul.payment_details.order_id} date={consul.date} price={consul.price}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserConseling
