import React, {useEffect, useContext} from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import LayananCard from '../components/LayananCard'

const DetilPembayaran = () => {
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
                                    <div className="text-sm mb-1">Invoice</div>
                                    <div className="text-xl font-bold">ID Invoice</div>
                                </div>
                                <div className="grid grid-cols-1 gap-y-3">
                                    <div className="font-bold">Anda telah memesan</div>
                                    <LayananCard
                                        title="KONSULTASI DAN PEMERIKSAAN PSIKOLOGIS"
                                    />
                                </div>
                                <div className="pt-6 pr-24 grid md:grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
                                    <div className="">
                                        <div className="text-sm mb-1">
                                            Paket
                                        </div>
                                        <div className="text-lg font-bold">
                                            C
                                        </div>   
                                    </div>
                                    <div className="">
                                        <div className="text-sm mb-1">
                                            Hari Tanggal
                                        </div>
                                        <div className="text-lg font-bold">
                                            Senin, 14 Oktober 2021
                                        </div>  
                                    </div>
                                    <div className="">
                                        <div className="text-sm mb-1">
                                            Harga
                                        </div>
                                        <div className="text-lg font-bold">
                                            Rp. 1.202.500
                                        </div>  
                                    </div>
                                    <div className="">
                                        <div className="text-sm mb-1">
                                            Status
                                        </div>
                                        <div className="text-red-500 text-lg font-bold">
                                            Pending
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

export default DetilPembayaran
