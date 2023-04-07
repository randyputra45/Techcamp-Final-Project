import React, {useState, useEffect} from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import HealthScore from '../components/HealthScore'
import ChartHealth from '../components/ChartHealth'

const ExampleHasilHealthTest = (props) => {
    const { state } = props.location
    const [stress, setStress] = useState("")
    const [depresi, setDepresi] = useState("")
    const [cemas, setCemas] = useState("")

    useEffect(() => {
        function getScore() {
            if (state.stress > 20) {
                setStress("Sangat Berat (kami sarankan Anda untuk berkonsultasi dengan tenaga kesehatan profesional untuk bantuan lebih lanjut)")
            } else if (state.stress > 10 && state.stress <= 20) {
                setStress("Sedang (kami sarankan Anda untuk berkonsultasi dengan tenaga kesehatan profesional untuk bantuan lebih lanjut)")
            } else {
                setStress("Normal")
            }
            
            if (state.cemas > 20) {
                setCemas("Sangat Berat (kami sarankan Anda untuk berkonsultasi dengan tenaga kesehatan profesional untuk bantuan lebih lanjut)")
            } else if (state.cemas > 10 && state.cemas <= 20) {
                setCemas("Sedang (kami sarankan Anda untuk berkonsultasi dengan tenaga kesehatan profesional untuk bantuan lebih lanjut)")
            } else {
                setCemas("Normal")
            }
            
            if (state.depresi > 20) {
                setDepresi("Sangat Berat (kami sarankan Anda untuk berkonsultasi dengan tenaga kesehatan profesional untuk bantuan lebih lanjut)")
            } else if (state.depresi > 10 && state.depresi <= 20) {
                setDepresi("Sedang (kami sarankan Anda untuk berkonsultasi dengan tenaga kesehatan profesional untuk bantuan lebih lanjut)")
            } else {
                setDepresi("Normal")
            }
        }
        
        getScore();  
    }, [state]);

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
                                    <div className="text-2xl font-bold">Salman Setiawan</div>
                                </div>
                                <div className="py-5 flex justify-center">
                                    <div className="w-80">
                                        <ChartHealth depresi={state.depresi} cemas={state.cemas} stres={state.stress}/>
                                    </div>
                                </div>
                                <div className="pt-4 pb-2">
                                    <div className="font-bold text-md pb-3">Hasil</div>
                                    <div className="flex justify-between">
                                        <HealthScore
                                            pic="cemas.png"
                                            name="Cemas"
                                            score={state.cemas}
                                        />
                                        <HealthScore
                                            pic="stres.png"
                                            name="Stres"
                                            score={state.stress}
                                        />
                                        <HealthScore
                                            pic="depresi.png"
                                            name="Depresi"
                                            score={state.depresi}
                                        />
                                    </div>
                                </div>
                                <div className="pt-12">
                                    <div className="font-bold text-md">
                                        Kesimpulan
                                    </div>
                                    <div className="mt-1 leading-relaxed text-gray-500 text-sm">
                                        <b>Cemas </b>= {cemas}
                                    </div>
                                    <div className="mt-1 leading-relaxed text-gray-500 text-sm">
                                        <b>Stress </b>= {stress}
                                    </div>
                                    <div className="mt-1 leading-relaxed text-gray-500 text-sm">
                                        <b>Depresi </b>= {depresi}
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

export default ExampleHasilHealthTest
