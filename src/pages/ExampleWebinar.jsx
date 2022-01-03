import React from 'react'
import Button from '../components/Button'
import WebinarCard2 from '../components/WebinarCard2'
import WebinarNarsum from '../components/WebinarNarsum'

const ExampleWebinar = () => {
    return (
        <div>
            <div className="px-4 pt-4 pb-12">
                <WebinarCard2
                    title="MENJAGA KESEHATAN MENTAL DI MASA PANDEMI COVID-19"
                />
                <div className="pt-4 text-sm text-gray-600">
                    Kamis, 10 Mei 2021
                </div>
                <div className="pt-2 text-2xl">
                    Menjaga Kesehatan Mental Di Masa Pandemi COVID-19
                </div>
                <div className="pt-4 flex items-end justify-between">
                    <div className="text-lg font-black">
                        Rp. 150.000
                    </div>
                    <div className="text-sm">
                        Kuota Tersisa : <b>10 Orang</b>
                    </div>
                </div>
                <div className="pt-10">
                    <Button
                        title="Pesan Sekarang"
                    />
                </div>
                <div className="pt-10 flex flex-col gap-y-4">
                    <div className="font-bold">Narasumber</div>
                    <WebinarNarsum 
                        pic="small-avatar.svg"
                        name="Prof. Dr. Bosri Modding, S.E., M.Si"
                        role="Rektor Univ. Muslim Indonesia"
                    />
                    <WebinarNarsum 
                        pic="small-avatar.svg"
                        name="Prof. Dr. Bosri Modding, S.E., M.Si"
                        role="Rektor Univ. Muslim Indonesia"
                    />
                    <WebinarNarsum 
                        pic="small-avatar.svg"
                        name="Prof. Dr. Bosri Modding, S.E., M.Si"
                        role="Rektor Univ. Muslim Indonesia"
                    />
                </div>
                <div className="pt-10 flex flex-col gap-y-4">
                    <div className="font-bold">Moderator</div>
                    <WebinarNarsum 
                        pic="small-avatar.svg"
                        name="Salman Setiawan"
                        role="Mas-mas biasa"
                    />
                </div>
                <div className="pt-10 flex flex-col gap-y-4">
                    <div className="font-bold">Live via</div>
                    <WebinarNarsum 
                        pic="small-avatar.svg"
                        name="Zoom"
                        role="Video Conference"
                    />
                </div>
            </div>
        </div>
    )
}

export default ExampleWebinar
