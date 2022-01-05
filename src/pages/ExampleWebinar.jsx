import React from 'react'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import WebinarCard2 from '../components/WebinarCard2'
import WebinarNarsum from '../components/WebinarNarsum'

const ExampleWebinar = () => {
    return (
        <div>
            <div className="block md:hidden">
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
                                    <div className="text-sm mb-1">Layanan Kami</div>
                                    <div className="text-2xl font-bold">Workshop</div>
                                </div>
                                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-16">
                                    <WebinarCard2
                                        title="MENJAGA KESEHATAN MENTAL DI MASA PANDEMI COVID-19"
                                    />
                                    <div className="grid grid-col content-between">
                                        <div>
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
                                        </div>
                                        <div className='md:pt-12 lg:pt-0'>
                                            <Button
                                                title="Pesan Sekarang"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 grid md:grid-cols-1 lg:grid-cols-2">
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
                                    <div className="">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExampleWebinar
