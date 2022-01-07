import React from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import MobileButton from '../components/MobileButton'
import MobileButton2 from '../components/MobileButton2'
import TotalBayar from '../components/TotalBayar'


const Pembayaran = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="pt-24 pb-6 px-6">
                    <div className="text-2xl font-bold">Pembayaran</div>
                    <div className="pt-8">
                        <div className="flex flex-col gap-y-3">
                            <div className="font-bold text-sm">Metode Pembayaran</div>
                            <MobileButton 
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
                            <div className="font-bold text-sm mb-0.5">Ringkasan Pembayaran</div>
                            <div className="flex justify-between">
                                <div className="text-xs">
                                    Total Tagihan :
                                </div>
                                <div className="text-xs">
                                    Rp. 150.000
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-xs">
                                    Promo :
                                </div>
                                <div className="text-xs">
                                    Rp. 0
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-xs">
                                    Biaya Layanan :
                                </div>
                                <div className="text-xs">
                                    Rp. 2.000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="botbar2 w-full">
                    <TotalBayar 
                        total="Rp. 152.500"
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
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="text-2xl font-bold">Pembayaran</div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    <div className="">
                                        <div className="pb-4 font-bold">Metode Pembayaran</div>
                                        <MobileButton2 
                                            title="Alfamart / Alfamidi"
                                            desc="Klik untuk melihat opsi lain"
                                        />

                                        <div className="pt-8 pb-4 font-bold">Paket Promo</div>
                                        <MobileButton2 
                                            title="Tidak Memilih Promo"
                                            desc="Klik untuk melihat opsi lain"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-3">
                                        <div className="font-bold pb-1">Ringkasan Pembayaran</div>
                                        <div className="flex justify-between">
                                            <div className="text-xs">
                                                Total Tagihan :
                                            </div>
                                            <div className="text-xs">
                                                Rp. 150.000
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="text-xs">
                                                Promo :
                                            </div>
                                            <div className="text-xs">
                                                Rp. 0
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="text-xs">
                                                Biaya Layanan :
                                            </div>
                                            <div className="text-xs">
                                                Rp. 2.500
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="pb-4 botbar2 w-full lg:w-1/2">
                        <TotalBayar 
                            total="Rp. 152.500"
                        />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Pembayaran