import React from 'react'
import ButtonAction from './ButtonAction'
import LayananCard from './LayananCard'
import { Link } from 'react-router-dom'

const PaymentCard = (props) => {
return(
    <>
        <div className="grid grid-cols-1 gap-y-3 mt-12">
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
                    {props.package}
                </div>   
            </div>
            <div className="">
                <div className="text-sm mb-1">
                    Hari Tanggal
                </div>
                <div className="text-lg font-bold">
                    {props.date}
                </div>  
            </div>
            <div className="">
                <div className="text-sm mb-1">
                    Harga
                </div>
                <div className="text-lg font-bold">
                    {props.price}
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
        <div className='mt-4'>
            <Link to="/screening">
                <ButtonAction title={"Lakukan Tes Screening"}/>
            </Link>
        </div>
        </>
    )
}
export default PaymentCard