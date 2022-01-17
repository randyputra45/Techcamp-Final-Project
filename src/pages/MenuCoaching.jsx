import React from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import CoachingCard from '../components/CoachingCard'
import DesktopAvatar from '../components/DesktopAvatar'
import NotifButton from '../components/NotifButton'
import useCoaching from '../hooks/useCoaching'

const MenuCoaching = () => {
    const {coaching} = useCoaching()

    return (
        <div>
            <div className="">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="pt-36 pb-24">
                    <div className="flex justify-center">
                        <div className="md:w-5/6 xl:w-4/6">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-12">
                                    <div className="mb-1">Layanan Kami</div>
                                    <div className="text-3xl font-bold">Pelatihan & Coaching Murid</div>
                                </div>
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex justify-center">
                                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                                            {coaching && coaching.map((coach, i) => (
                                                <CoachingCard
                                                    key={i}
                                                    url={`/coaching/${coach._id}`}
                                                    pic={coach.image}
                                                    price="Rp. 150.000"
                                                />
                                            ))}
                                        </div>
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

export default MenuCoaching
