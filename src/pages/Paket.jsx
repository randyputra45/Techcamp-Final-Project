import React from 'react';
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import PaketCard from '../components/PaketCard'


const Paket = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="pt-24 pb-6 px-6">
                    <div className="text-2xl font-bold">Pilih Paket</div>
                    <div className="pt-8">
                        <div className="flex flex-col gap-y-12">
                            <div className="grid gap-y-4 content-between">
                                <PaketCard
                                    bgtitle="PAKET 1"
                                    prize="Rp. 300.000"
                                    desc1="Video Online"
                                    desc2="3X Group Sharing"
                                    desc3="Anlisa Perkembangan Individu Via Chat"
                                />
                                <Button
                                    title="Pilih Paket"
                                />
                            </div>
                            <div className="grid gap-y-4 content-between">
                                <PaketCard
                                    bgtitle="PAKET 2"
                                    prize="Rp. 500.000"
                                    desc1="1x Sesi Individual"
                                    desc2="1x Sesi Group Support"
                                />
                                <Button
                                    title="Pilih Paket"
                                />
                            </div>
                            <div className="grid gap-y-4 content-between">
                                <PaketCard
                                    bgtitle="PAKET 3"
                                    prize="Rp. 1.200.000"
                                    desc1="3x Sesi Individual"
                                    desc2="1x Sesi Group Support"
                                />
                                <Button
                                    title="Pilih Paket"
                                />
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
                <div className="px-8 lg:px-12 2xl:px-48 pt-36 pb-12">
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-12">
                                    <div className="mb-4">
                                        <div className="text-xl font-bold">Pilih tanggal</div>
                                    </div>
                                    <input className='w-60 p-3 border border-gray-300' type="date" id="" />
                                </div>
                                <div className="mb-6">
                                    <div className="text-xl font-bold">Pilih paket yang diinginkan</div>
                                </div>
                                <div className="grid md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-16 content-between">
                                    <div className="grid gap-y-4 content-between">
                                        <PaketCard
                                            bgtitle="PAKET 1"
                                            prize="Rp. 300.000"
                                            desc1="Video Online"
                                            desc2="3X Group Sharing"
                                            desc3="Anlisa Perkembangan Individu Via Chat"
                                        />
                                        <Button
                                            title="Pilih Paket"
                                        />
                                    </div>
                                    <div className="grid gap-y-4 content-between">
                                        <PaketCard
                                            bgtitle="PAKET 2"
                                            prize="Rp. 500.000"
                                            desc1="1x Sesi Individual"
                                            desc2="1x Sesi Group Support"
                                        />
                                        <Button
                                            title="Pilih Paket"
                                        />
                                    </div>
                                    <div className="grid gap-y-4 content-between">
                                        <PaketCard
                                            bgtitle="PAKET 3"
                                            prize="Rp. 1.200.000"
                                            desc1="3x Sesi Individual"
                                            desc2="1x Sesi Group Support"
                                        />
                                        <Button
                                            title="Pilih Paket"
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

export default Paket
