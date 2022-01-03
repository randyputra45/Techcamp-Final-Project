import React from 'react'
import MobileButton from '../components/MobileButton'
import TotalBayar from '../components/TotalBayar'


const Pembayaran = () => {
    return (
        <div>
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
    )
}

export default Pembayaran
