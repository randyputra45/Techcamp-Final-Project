import React, {useEffect} from 'react'
import BlogButton from '../components/BlogButton'
import usePsikolog from '../hooks/usePsikolog'

const ExampleExpert = () => {
    const {psikologID, getPsikologById} = usePsikolog()

    const path = window.location.pathname

    useEffect(() => {
        getPsikologById(path)
    }, [path])
    
    return (
        <div>
            {/* PLACE PICTURE HERE */}
            <div className="bg-active-button">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="pt-0 md:pt-52 pl-5 md:pl-7 lg:pl-16 xl:pl-36 pr-8 md:pr-6 pb-12 md:pb-16">
                        <div className="pt-16 md:pt-56 pb-0 md:pb-4">
                            <div className="py-0 md:py-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                {psikologID && psikologID.name}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={psikologID && psikologID.image} alt="" className="object-cover h-full"/>
                    </div>
                </div>
            </div>

            {/* ADJUST WIDTH */}
            <div className="px-5 md:px-12 lg:px-28 xl:px-30 2xl:px-60">
                <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-x-6">

                    {/* CONTENT */}
                    <div>
                    <div className="pb-2 font-bold text-2xl">
                        Profile Expert
                    </div>
                    <div className="pb-6 font-bold text-md">
                        {psikologID && psikologID.role}
                    </div>
                    </div>
                    <div className="col-span-2 text-sm md:text-md leading-relaxed text-justify">
                        <div className="border-t-2 pt-4">
                            {psikologID && psikologID.profile}
                        </div>
                        <div className="pt-6 text-teal-800 font-extrabold">
                            Keahlian
                        </div>
                        <div className="border-t-2 pt-4">
                            {/* BUAT DATA TAMBAHANNYA ISI DIBAWAH SINI */}
                            <ul className="list-inside list-disc">
                                {
                                    psikologID && psikologID.keahlian.map((psi) => {
                                        return <li>{psi}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="pt-6 text-teal-800 font-extrabold">
                            Keahlian Lain
                        </div>
                        <div className="border-t-2 pt-2">
                            {/* BUAT DATA TAMBAHANNYA ISI DIBAWAH SINI */}
                            <ul className="list-inside list-disc">
                                {
                                    psikologID && psikologID.keahlian_lain.map((psi) => {
                                        return <li>{psi}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="pt-6 text-teal-800 font-extrabold">
                            Pendekatan Terapi
                        </div>
                        <div className="border-t-2 pt-2">
                            {/* BUAT DATA TAMBAHANNYA ISI DIBAWAH SINI */}
                            <ul className="list-inside list-disc">
                                {
                                    psikologID && psikologID.pendekatan_terapi.map((psi) => {
                                        return <li>{psi}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ExampleExpert
