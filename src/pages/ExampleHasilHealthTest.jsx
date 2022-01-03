import React from 'react'
import BackButton from '../components/BackButton'
import HealthScore from '../components/HealthScore'

const ExampleHasilHealthTest = () => {
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
                    <div className="pt-24">
                        <div className="flex justify-between">
                            <HealthScore
                                pic="cemas.png"
                                name="Cemas"
                                score="36"
                            />
                            <HealthScore
                                pic="stres.png"
                                name="Stres"
                                score="36"
                            />
                            <HealthScore
                                pic="depresi.png"
                                name="Depresi"
                                score="36"
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
                
            </div>
        </div>
    )
}

export default ExampleHasilHealthTest
