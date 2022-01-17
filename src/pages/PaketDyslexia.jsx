import React, {useState} from 'react';
import ButtonAction from '../components/ButtonAction'
import DesktopAvatar from '../components/DesktopAvatar'
import PaketCard from '../components/PaketCard'
import { useHistory } from 'react-router-dom';
import usePackage from '../hooks/usePackageDyslexia';

const PaketDyslexia = () => {
    let dateNow = new Date().toLocaleDateString('en-CA', {timeZone: "Asia/Jakarta"})
    const history = useHistory()
    const {packageData} = usePackage()

    const [date, setDate] = useState("")

    const handleClick = async (name, price) => {
        try {
            console.log(name, price)
    
            const data = {
                date: date,
                package: `Pusat Dyslexia ${name}`,
                price: price
            }
            
            if(date && name && price) {
                history.push({
                    pathname: "/dyslexia/payment",
                    state: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="px-4 md:px-8 lg:px-12 2xl:px-48 pt-36 pb-12">
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="py-8 px-20 bg-body rounded-t-lg">
                                <div className="pb-12">
                                    <div className="mb-4">
                                        <div className="text-xl font-bold">Pilih tanggal</div>
                                    </div>
                                    <input className='w-60 p-3 border border-gray-300' min={dateNow} type="date" id="" onChange={(event) => setDate(event.target.value)}/>
                                </div>
                                <div className="mb-6">
                                    <div className="text-xl font-bold">Pilih paket yang diinginkan</div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-4 gap-y-12 content-between">
                                    {packageData && packageData.map((data, i) => 
                                    <>
                                        <div className="grid gap-y-4">
                                                <PaketCard
                                                    key={i}
                                                    bgtitle={data.name}
                                                    prize={data.price}
                                                    desc1="1x Sesi Individual"
                                                    desc2="1x Sesi Group Support"
                                                />
                                                <button onClick={() => handleClick(data.name, data.price)}>
                                                    <ButtonAction
                                                        key={i}
                                                        title="Pilih Paket"
                                                    />
                                                </button>
                                        </div>
                                    </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaketDyslexia