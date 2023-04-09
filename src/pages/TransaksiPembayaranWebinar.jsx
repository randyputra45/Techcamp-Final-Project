import React, { useState, useContext } from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import PembayaranModal from '../components/PembayaranModal'
import MobileButton from '../components/MobileButton'
import MobileButton2 from '../components/MobileButton2'
import RingkasanOrder from '../components/RingkasanOrder'
import TotalBayar from '../components/TotalBayar'
import usePayWebinar from '../hooks/usePayWebinar'
import { UserContext } from "../context/userContext";
import ButtonAction from '../components/ButtonAction'

const PembayaranWebinar = (props) => {
  const { createPayment } = usePayWebinar()
  const { user } = useContext(UserContext);
  const { state } = props.location

  const [payment_method, setIsParentData] = useState("Gopay");

  console.log(state)
  console.log(payment_method)
  const handlePayment = async () => {
    console.log(user)
    const url = "/profile/webinars"
    const data = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.no_telp,

      user: user._id,
      price: state.price,
      package_name: state.package,
      date: state.date,
      payment_status: "Success",
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
                date={state.date}
                tagihan={state.price}
                promo="Rp.0"
                layanan="Rp. 2.500"
              />
            </div>
          </div>
        </div>
        <div className="botbar2 w-full">
          <TotalBayar
            total={state.price + 2500}
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
                  <div className="">
                    <div className="pb-4 font-bold">Metode Pembayaran</div>
                    <PembayaranModal
                      desc="Klik untuk melihat opsi lain"
                      sendToParent={setIsParentData}
                    />
                  </div>
                  <RingkasanOrder
                    nama={state.package}
                    date={state.date}
                    tagihan={state.price}
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
                    {state.price + 2500}
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

export default PembayaranWebinar