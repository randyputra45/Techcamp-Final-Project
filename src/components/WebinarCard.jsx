import React from 'react'
import {Link} from 'react-router-dom'

const WebinarCard = (props) => {
    return (
        <div>
            <Link to={props.url}>
                <div className='md:w-80'>
                    <div className="rounded-t-xl bg-card py-4 px-4">
                        <div className="flex flex-wrap flex-col gap-y-10">
                            <div className="flex justify-between">
                                <p className="text-xxs">MS Wellbeing</p>
                                <p className="text-xxs">Webinar</p>
                            </div>
                            <div className="flex justify-between gap-x-4 items-end">
                                <div className="font-bold">
                                    {props.title}
                                </div>
                                <div className="flex flex-wrap w-1/2 items-end gap-x-2">
                                    <img src={props.picnarsum1} alt="" className="small-webinar-img object-cover rounded-full"/>
                                    <img src={props.picnarsum2} alt="" className="small-webinar-img object-cover rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-button rounded-b-xl hover:bg-pink-500 hover:text-gray-50">
                        <div className="py-5 pl-4">
                            <div className="grid grid-cols-2">
                                <div className="flex flex-col">
                                    <p className="text-lg font-bold">
                                        {props.day}
                                    </p>
                                    <p className="text-xs">
                                        {props.date}
                                    </p>
                                </div>
                                <div className="hover:border-gray-50 flex justify-center items-center border-l-2 border-gray-700">
                                    <div className="flex font-bold text-xl">
                                        Rp{props.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default WebinarCard
