import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import NotifButton from '../components/NotifButton'

const StartHealthtest = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="block md:hidden">
                <div className="px-6">
                    <div className="pt-6">
                        <BackButton />
                    </div>
                    <div className="pt-20 flex justify-between pb-16">
                        <div className="flex flex-col">
                            <div className="text-sm mb-1">Layanan Kami</div>
                            <div className="text-2xl font-bold">Pelatihan & Coaching Murid</div>
                        </div>
                        <NotifButton />
                    </div>
                    <div className="text-gray-500 leading-relaxed pb-8">
                        Disini anda dapat mencoba Tes Kesehatan untuk mengetahui sejauh mana tingkat kecemasanmu saat ini. Anda juga akan melihat hasilnya setelah menjawab seluruh pertanyaan dengan jujur dan benar untuk dipertimbangkan ikut atau tidaknya mengikuti konsultasi.
                    </div>
                    <Button
                        title="Pesan Sekarang"
                    />
                    <div className="pt-12">

                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="pt-36 pb-24">
                    <div className="flex justify-center">
                        <div className="w-5/6 lg:w-4/6 xl:w-1/2">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="mb-1">Layanan Kami</div>
                                    <div className="text-3xl font-bold">Tes Kesehatan</div>
                                    <div className="pt-8 text-gray-500 leading-relaxed pb-6">
                                        <b>
                                        Kamu penasaran dengan kondisi kesehatan mentalmu saat ini? Yuk, baca <button onClick={() => setShow(!show)} className='text-teal-700 font-bold'>petunjuk ini</button> dan ikuti test berikut untuk mengetahui hasilnya!
                                        </b>
                                    </div>
                                    {show &&
                                    <>
                                        <div className="pt-1 text-gray-500 leading-relaxed text-justify">
                                            1. Tidak ada jawaban yang benar atau salah. Silakan pilih jawaban yang menggambarkan kondisi kamu sebenar-benarnya.
                                        </div>
                                        <div className="pt-1 text-gray-500 leading-relaxed text-justify">
                                            2. Pengerjaan tes tidak dibatasi waktu sehingga kamu dapat menggunakan waktumu semaksimal mungkin.
                                        </div>
                                        <div className="pt-1 text-gray-500 leading-relaxed text-justify">
                                            3. Silakan mencari tempat yang nyaman dan kondusif selama kamu mengerjakan tes supaya lebih fokus selama menjawab setiap pertanyaannya.
                                        </div>
                                        <div className="pt-1 text-gray-500 leading-relaxed text-justify pb-6">
                                            4. Jika kamu keluar di tengah tes, maka seluruh proses tes dan jawaban akan hilang. Silakan mengisi ulang dari awal.
                                        </div>
                                    </>}               
                                    <Button
                                        title="Mulai Tes"
                                        url="/healthtest/start"
                                    />
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

export default StartHealthtest
