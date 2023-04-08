import React from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import LandingButton3 from '../components/LandingButton3'
import NotifButton from '../components/NotifButton'
import { Link } from 'react-router-dom'

const MenuKonseling = () => {
  return (
    <div>
      <div className="">
        <div className="bg-begron2">
        </div>
        <div className="topbar w-full">
          <DesktopAvatar />
        </div>
        <div className="pt-36 pb-24">
          <div className="flex justify-center">
            <div className="md:w-5/6 lg:w-4/6 xl:w-1/2">
              <div className="flex flex-col">
                <div className="py-8 px-10 bg-body rounded-t-lg">
                  <div className="pb-8">
                    <div className="mb-1">Layanan Kami</div>
                    <div className="text-3xl font-bold">Konsultasi dan Pemeriksaan Psikologis</div>
                    <div className="pt-8 text-gray-500 leading-relaxed pb-8">
                      layanan ini merupakan sesi konseling yang diadakan oleh kami untuk memeriksa kesehatan anda secara psikologis, yang mana bisa anda lakukan melalui voice call, video call, dan juga meet secara offline. Konseling Terapi ini juga dapat dilakukan secara 1 on 1 ataupun berkelompok sesuai dengan paket yang diambil.
                    </div>
                    <Link to="/counseling/pricing">
                      <Button
                        title="Pesan Sekarang"
                      />
                    </Link>
                    <div className="pt-16">
                      <div className="text-xl font-bold">
                        Benefit Melakukan Konseling dengan Peer Counselor
                      </div>
                      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 pt-6">
                        <LandingButton3
                          pic="konseling.svg"
                          desc="Peer counselor memiliki rentang usia yang cenderung sama denganmu sehingga kamu akan lebih bebas untuk berkomunikasi dengan bahasa sehari-hari."
                        />
                        <LandingButton3
                          pic="konseling.svg"
                          title="SDM yang ahli dibidangnya"
                          desc="Peer counselor akan membantu kamu untuk dapat menerima emosi apapun yang dirasakan tanpa harus menolaknya."
                        />
                        <LandingButton3
                          pic="konseling.svg"
                          title="aksesibilitas yang mudah"
                          desc="Peer counselor akan menjadi teman diskusimu untuk dapat menemukan penyelesaian terhadap masalah yang sedang kamu hadapi. Yuk, hadapi bersama!"
                        />
                      </div>
                    </div>
                    <div className="pt-16 text-xl font-bold">
                      Alur Pendaftaran "<i>Konsultasi dan Pemeriksaan Kesehatan Psikologis</i>"
                    </div>
                    <div className="">
                      <img src="alur-konseling.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuKonseling