import React from 'react'

const RingkasanOrder = (props) => {
    return (
        <div>
            <div className="flex flex-col gap-y-3">
                <div className="text-sm md:text-base font-bold pb-1">Ringkasan Pembayaran</div>
                <div className="flex justify-between">
                    <div className="text-xs">
                        Deskripsi :
                    </div>
                    <div className="text-xs">
                        {props.nama}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-xs">
                        Hari dan Tanggal :
                    </div>
                    <div className="text-xs">
                        {props.day} {props.date}
                    </div>
                </div>
                <div className="pt-8 flex justify-between">
                    <div className="text-xs">
                        Total Tagihan :
                    </div>
                    <div className="text-xs">
                        Rp{props.tagihan}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-xs">
                        Promo :
                    </div>
                    <div className="text-xs">
                        {props.promo}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-xs">
                        Biaya Layanan :
                    </div>
                    <div className="text-xs">
                        {props.layanan}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RingkasanOrder
 