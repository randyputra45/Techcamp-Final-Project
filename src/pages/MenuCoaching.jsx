import React from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import CoachingCard from '../components/CoachingCard'
import DesktopAvatar from '../components/DesktopAvatar'
import NotifButton from '../components/NotifButton'

const MenuCoaching = () => {
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
                        <div className="w-5/6 xl:w-4/6">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-12">
                                    <div className="mb-1">Layanan Kami</div>
                                    <div className="text-3xl font-bold">Pelatihan & Coaching Murid</div>
                                </div>
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex justify-center">
                                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                                            <CoachingCard
                                                pic="coaching-1.png"
                                                price="Rp. 150.000"
                                            />
                                            <CoachingCard
                                                pic="coaching-1.png"
                                                price="Rp. 150.000"
                                            />
                                        </div>

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

export default MenuCoaching
