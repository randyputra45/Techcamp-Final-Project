import React, { useContext } from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import HealthScore from '../components/HealthScore'
import ChartHealth from '../components/ChartHealth'
import PolarArea from '../components/ChartHealth'
import { UserContext } from '../context/userContext'
import { Link } from 'react-router-dom'

const ExampleHasilScreening = (props) => {
    const { state } = props.location
    const { user } = useContext(UserContext)

    return (
        <div>
            <div className="block md:hidden">
                <div className="px-6">
                    <div className="pt-6">
                        <BackButton />
                    </div>
                    <div className="pt-20 pb-16">
                        <div className="flex flex-col">
                            <div className="text-sm mb-1">Hasil Tes</div>
                            <div className="text-2xl font-bold">Salman Setiawan</div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-64">
                            <ChartHealth />
                        </div>
                    </div>
                    <div className="pt-24">
                        <div className="flex justify-between">
                            <HealthScore
                                pic="cemas.png"
                                name="Cemas"
                                score="16"
                            />
                            <HealthScore
                                pic="stres.png"
                                name="Stres"
                                score="12"
                            />
                            <HealthScore
                                pic="depresi.png"
                                name="Depresi"
                                score="24"
                            />
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="font-bold">
                            Saran
                        </div>
                        <div className="mt-1 leading-relaxed text-gray-500">
                            Kami sarankan Anda untuk berkonsultasi dengan tenaga kesehatan profesional untuk bantuan lebih lanjut
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
                <div className="px-8 pt-36 pb-24">
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="mb-1 text-sm">Hasil Tes</div>
                                    <div className="text-2xl font-bold">{user && user.first_name}</div>
                                </div>
                                <div className="pt-12">
                                    <div className="font-bold">
                                        Saran
                                    </div>
                                    <div className="mt-1 leading-relaxed text-gray-500">
                                        Hasil screening Anda telah terekam dan akan diserahkan kepada psikolog kami. Kami sarankan Anda untuk segera <b>berkonsultasi</b> dengan tenaga kesehatan profesional kami untuk bantuan lebih lanjut.
                                    </div>
                                    <div className="mt-5 justify-items-center grid">
                                        <Link to="/profile/conseling">
                                            <Button title="Cek Kembali Jadwal Konsultasi"></Button>
                                        </Link>
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

export default ExampleHasilScreening
