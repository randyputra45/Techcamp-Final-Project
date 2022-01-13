import React, {useState} from 'react';
import ButtonAction from '../components/ButtonAction'
import DesktopAvatar from '../components/DesktopAvatar'
import PaketCard from '../components/PaketCard'
import { useHistory } from 'react-router-dom';
import usePackage from '../hooks/usePackage';

const Paket = () => {
    let dateNow = new Date().toLocaleDateString('en-CA', {timeZone: "Asia/Jakarta"})
    const history = useHistory()
    const {packageData} = usePackage()

    const [date, setDate] = useState("")

    const handleClick = async (name, price) => {
        try {
            console.log(name, price)
    
            const data = {
                date: date,
                package: `Konsultasi ${name}`,
                price: price
            }
            
            if(date && name && price) {
                history.push({
                    pathname: "/payment",
                    state: data
                })
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <div className="block md:hidden">
                <div className="pt-24 pb-6 px-6">
                    <div className="text-2xl font-bold">Pilih Paket</div>
                    <div className="pt-8">
                        <div className="flex flex-col gap-y-12">
                            {packageData && packageData.map((data, i) => 
                            <>
                                <div className="grid gap-y-4 content-between">
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
                                    <input className='w-60 p-3 border border-gray-300' min={dateNow} type="date" id="" onChange={(event) => setDate(event.target.value)}/>
                                </div>
                                <div className="mb-6">
                                    <div className="text-xl font-bold">Pilih paket yang diinginkan</div>
                                </div>
                                <div className="grid md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-16 content-between">
                                    {packageData && packageData.map((data, i) => 
                                    <>
                                        <div className="grid gap-y-4 content-between">
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

export default Paket
