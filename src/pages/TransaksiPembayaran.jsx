import React, {useState, useEffect, useContext} from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import PembayaranModal from '../components/PembayaranModal'
import MobileButton from '../components/MobileButton'
import MobileButton2 from '../components/MobileButton2'
import RingkasanOrder from '../components/RingkasanOrder'
import TotalBayar from '../components/TotalBayar'
import useConsultation from '../hooks/useConsultation'
import { UserContext } from "../context/userContext";
import ButtonAction from '../components/ButtonAction'

const Pembayaran = (props) => {
    const {createPayment} = useConsultation()
    const { user } = useContext(UserContext);
    const { state } = props.location

    const [date, setDate] = useState("")
    const [day, setDay] = useState("")
    const [price, setPrice] = useState("")
    const [payment_method, setIsParentData] = useState("Gopay");

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

    console.log(payment_method)
    const handlePayment = async() => {
        const url = "/profile/conseling"
        const data = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone: user.no_telp,

            user: user._id,
            price: price,
            package_name: state.package,
            date: day + ", " + date,
            payment_status: "Pending",
            payment_method: payment_method
        }
        await createPayment(data, url)
    }   

    return (
        <div>
            <div className="block md:hidden">
                <div className="pt-24 pb-6 px-6">
                    <div className="text-2xl font-bold">Pembayaran</div>
                    <div className="pt-8">
                        <div className="flex flex-col gap-y-3">
                            <div className="font-bold text-sm">Metode Pembayaran</div>
                            <PembayaranModal
                                desc="Klik untuk melihat opsi lain"
                                sendToParent={setIsParentData}
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
                                            desc="Klik untuk melihat opsi lain"
                                            sendToParent={setIsParentData}
                                        />
                                    </div>
                                    <RingkasanOrder 
                                        nama={state.package}
                                        day={day}
                                        date={date}
                                        tagihan={price}
                                        promo="Rp.0"
                                        layanan="Rp2500"
                                    />
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="pb-0 botbar2 w-full lg:w-1/2">
                        <div className="bg-base px-6 py-6 rounded-md">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <p className="font-medium text-sm mb-1">
                                        Total Bayar
                                    </p>
                                    <p className="font-black text-2xl">
                                        {price + 2500}
                                    </p>
                                </div>
                                <button onClick={() => handlePayment()}>
                                    <ButtonAction
                                        title="Bayar"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pembayaran