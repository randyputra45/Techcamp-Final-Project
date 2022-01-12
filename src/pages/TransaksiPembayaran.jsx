import React, {useState, useEffect} from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import PembayaranModal from '../components/PembayaranModal'
import MobileButton from '../components/MobileButton'
import MobileButton2 from '../components/MobileButton2'
import RingkasanOrder from '../components/RingkasanOrder'
import TotalBayar from '../components/TotalBayar'
import { setDate } from 'date-fns/esm'


const Pembayaran = (props) => {
    const { state } = props.location
    const [date, setDate] = useState("")
    const [day, setDay] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {
        setDate(state.date.split("-").reverse().join("-"))

        function getDayName(dateStr)
        {
            var date = new Date(dateStr);
            return date.toLocaleDateString("id", { weekday: 'long' });
        }

        var day = getDayName(state.date);
        setDay(day)
        setPrice(state.price)
    }, [state]);

    return (
        <div>
            <div className="block md:hidden">
                <div className="pt-24 pb-6 px-6">
                    <div className="text-2xl font-bold">Pembayaran</div>
                    <div className="pt-8">
                        <div className="flex flex-col gap-y-3">
                            <div className="font-bold text-sm">Metode Pembayaran</div>
                            <PembayaranModal
                                pic=""
                                title="Alfamart / Alfamidi"
                                desc="Klik untuk melihat opsi lain"
                            />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="flex flex-col gap-y-3">
                            <div className="font-bold text-sm">Promo</div>
                            <MobileButton 
                                title="Tidak memilih apapun"
                                desc="Klik untuk melihat opsi lain"
                            />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="flex flex-col gap-y-3">
                            <RingkasanOrder 
                                nama="Konsultasi"
                                day={day}
                                tagihan={price}
                                promo="Rp.0"
                                layanan="Rp. 2.500"
                            />
                        </div>
                    </div>
                </div>
                <div className="botbar2 w-full">
                    <TotalBayar 
                        total={price + 2500}
                    />
                </div>  
            </div>
            <div className="hidden md:block">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="px-8 pt-36 pb-12">
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="py-8 px-10  bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="text-2xl font-bold">Pembayaran</div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    <div className="">
                                        <div className="pb-4 font-bold">Metode Pembayaran</div>
                                        <PembayaranModal
                                            title="Alfamart / Alfamidi"
                                            desc="Klik untuk melihat opsi lain"
                                        />

                                        <div className="pt-8 pb-4 font-bold">Paket Promo</div>
                                        <MobileButton2 
                                            title="Tidak Memilih Promo"
                                            desc="Klik untuk melihat opsi lain"
                                        />
                                    </div>
                                    <RingkasanOrder 
                                        nama="Konsultasi"
                                        day={day}
                                        date={date}
                                        tagihan={price}
                                        promo="Rp.0"
                                        layanan="Rp. 2.500"
                                    />
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="pb-0 botbar2 w-full lg:w-1/2">
                        <TotalBayar 
                            total={price + 2500} 
                        />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Pembayaran