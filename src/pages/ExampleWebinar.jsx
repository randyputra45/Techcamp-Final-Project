import React, {useEffect, useContext} from 'react'
import Button from '../components/Button'
import ButtonAction from '../components/ButtonAction'
import DesktopAvatar from '../components/DesktopAvatar'
import WebinarCard2 from '../components/WebinarCard2'
import WebinarNarsum from '../components/WebinarNarsum'
import useWebinar from '../hooks/useWebinar'
import { useHistory } from 'react-router-dom';

const ExampleWebinar = () => {
    const {webinarID, getWebinarById} = useWebinar()
    const history = useHistory()

    const path = window.location.pathname
    
    useEffect(() => {
        getWebinarById(path)
    }, [path])

    console.log(webinarID)

    const handleClick = () => {
        try {    
            const data = {
                date: webinarID.date,
                package: webinarID.title,
                price: webinarID.price
            }
            
            if(data) {
                history.push({
                    pathname: "/payment/webinar",
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
                <div className="px-4 pt-4 pb-12">
                    <WebinarCard2
                        title={webinarID && webinarID.title}
                    />
                    <div className="pt-4 text-sm text-gray-600">
                        Kamis, 10 Mei 2021
                    </div>
                    <div className="pt-2 text-2xl">
                        {webinarID && webinarID.title}
                    </div>
                    <div className="pt-4 flex items-end justify-between">
                        <div className="text-lg font-black">
                            {webinarID && webinarID.price}
                        </div>
                    </div>
                    <div className="pt-10">
                        <button onClick={handleClick()}>
                            <ButtonAction
                                title="Pesan Sekarang"
                            />
                        </button>
                    </div>
                    <div className="pt-10 flex flex-col gap-y-4">
                        <div className="font-bold">Narasumber</div>
                            {webinarID && webinarID.psikolog.map(item => <WebinarNarsum
                            key={item._id}
                            name={item.name}
                            pic={item.image}
                            role={item.role}
                        />)}
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
                            pic="zoomlogo.png"
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
                                        title={webinarID && webinarID.title}
                                    />
                                    <div className="grid grid-col content-between">
                                        <div>
                                            <div className="pt-4 text-sm text-gray-600">
                                                {webinarID && webinarID.day}, {webinarID && webinarID.date}
                                            </div>
                                            <div className="pt-2 text-2xl">
                                                {webinarID && webinarID.title}
                                            </div>
                                            <div className="pt-4 flex items-end justify-between">
                                                <div className="text-lg font-black">
                                                    Rp{webinarID && webinarID.price}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='md:pt-12 lg:pt-0'>
                                            <button onClick={handleClick()}>
                                                <ButtonAction
                                                    title="Pesan Sekarang"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 grid md:grid-cols-1 lg:grid-cols-2">
                                    <div className="pt-10 flex flex-col gap-y-4">
                                        <div className="font-bold">Narasumber</div>
                                        {webinarID && webinarID.psikolog.map(item => <WebinarNarsum
                                            key={item._id}
                                            name={item.name}
                                            pic={item.image}
                                            role={item.role}
                                        />)}
                                    </div>
                                    <div className="">
                                        <div className="pt-10 flex flex-col gap-y-4">
                                            <div className="font-bold">Moderator</div>
                                            <WebinarNarsum 
                                                pic="https://res.cloudinary.com/gocure/image/upload/v1641927760/man_cjqgfn.jpg"
                                                name="Salman Setiawan"
                                                role="Informatics Student"
                                            />
                                        </div>
                                        <div className="pt-10 flex flex-col gap-y-4">
                                            <div className="font-bold">Live via</div>
                                            <WebinarNarsum 
                                                pic="https://res.cloudinary.com/gocure/image/upload/v1641927629/zoomlogo_a4wnrz.png"
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
