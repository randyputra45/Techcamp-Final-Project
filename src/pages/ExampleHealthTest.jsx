import React from 'react'
import Button from '../components/Button'
import ChartBar from '../components/ChartBar'
import DesktopAvatar from '../components/DesktopAvatar'

const ExampleHealthTest = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="p-8">
                    <ChartBar />
                    <div className="pt-6 mb-1 text-sm">
                        Soal 1
                    </div>
                    <div className="font-bold text-xl">
                        Saya merasa bahwa saya menggunakan banyak energi untuk cemas
                    </div>
                    <div className="pt-8 grid grid-cols-2 gap-x-4">
                        <Button 
                            title="Tidak Pernah"
                        />
                        <Button 
                            title="Kadang-kadang"
                        />
                    </div>
                    <div className="pt-4 grid grid-cols-2 gap-x-4">
                        <Button 
                            title="Hampir Sering"
                        />
                        <Button 
                            title="Selalu"
                        />
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-begron"></div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="pt-52 pb-20 flex items-center justify-center">
                    <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                        <div className="px-8 pt-12 pb-12">
                            <ChartBar />
                            <div className="pt-5">
                                <div className="mb-1">Soal 1</div>
                                <div className="text-xl font-bold">Saya merasa bahwa saya menggunakan banyak energi untuk cemas</div>
                            </div>
                            <div className="pt-12 md:flex flex-col gap-y-4 xl:grid grid-cols-2 gap-x-4">
                                <Button
                                    title="Tidak Pernah"
                                />
                                <Button
                                    title="Kadang-kadang"
                                />
                                <Button
                                    title="Hampir Sering"
                                />
                                <Button
                                    title="Selalu"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExampleHealthTest
