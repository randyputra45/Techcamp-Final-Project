import React, {useEffect} from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import NotifButton from '../components/NotifButton'
import WebinarCard from '../components/WebinarCard'
import useWebinar from '../hooks/useWebinar'

const MenuWebinar = () => {
    const {webinar} = useWebinar()
    webinar && console.log(webinar)

    return (
        <div>
            <div className="block md:hidden">
                <div className="pt-24 pb-6 px-4">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="text-sm mb-1">Layanan Kami</div>
                            <div className="text-2xl font-bold">Webinar</div>
                        </div>
                        <NotifButton />
                    </div>
                    <div className="pt-8">
                        <div className="font-bold text-sm pb-3">Webinar yang akan datang</div>
                        <div className="flex flex-col gap-y-3">
                            <WebinarCard
                                title="MENJAGA KESEHATAN MENTAL DI MASA PANDEMI COVID-19"
                                picnarsum1="small-avatar.svg"
                                picnarsum2="small-avatar.svg"
                                picnarsum3="small-avatar.svg"
                                day="Kamis" 
                                date="14 Oct 2021"
                                quota="18"
                                price="Rp. 150.000"
                            />
                            <WebinarCard
                                title="MENJAGA KESEHATAN MENTAL DI MASA PANDEMI COVID-19"
                                picnarsum1="small-avatar.svg"
                                picnarsum2="small-avatar.svg"
                                picnarsum3="small-avatar.svg"
                                day="Kamis" 
                                date="14 Oct 2021"
                                quota="18"
                                price="Rp. 150.000"
                            />
                            <WebinarCard
                                title="MENJAGA KESEHATAN MENTAL DI MASA PANDEMI COVID-19"
                                picnarsum1="small-avatar.svg"
                                picnarsum2="small-avatar.svg"
                                picnarsum3="small-avatar.svg"
                                day="Kamis" 
                                date="14 Oct 2021"
                                quota="18"
                                price="Rp. 150.000"
                            />
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
                <div className="lg:px-4 2xl:px-16 pt-36 pb-24">
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="text-sm mb-1">Layanan Kami</div>
                                    <div className="text-2xl font-bold">Webinar</div>
                                </div>
                                <div className="flex flex-col gap-y-6">
                                    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                        {webinar && webinar.map(item => <WebinarCard
                                            title={item.title}
                                            picnarsum1="small-avatar.svg"
                                            picnarsum2="small-avatar.svg"
                                            picnarsum3="small-avatar.svg"
                                            day="Kamis" 
                                            date="14 Oct 2021"
                                            price="Rp. 150.000"
                                        />)}
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

export default MenuWebinar
