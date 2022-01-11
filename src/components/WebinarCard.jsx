import React from 'react'

const WebinarCard = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className='cursor-pointer'>
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
                                <div className="flex flex-wrap w-1/2 gap-2 items-end justify-end">
                                    <img src={props.picnarsum1} alt="" className="small-webinar-img" />
                                    <img src={props.picnarsum2} alt="" className="small-webinar-img" />
                                    <img src={props.picnarsum3} alt="" className="small-webinar-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-button rounded-b-xl">
                        <div className="py-5 pl-4">
                            <div className="grid grid-cols-2">
                                <div className="flex flex-col">
                                    <p className="text-lg font-bold">
                                        {props.day}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {props.date}
                                    </p>
                                    <p className="mt-2 text-xs text-gray-500">
                                        Kuota Tersisa : {props.quota} Orang
                                    </p>
                                </div>
                                <div className="flex justify-center items-center border-l-2 border-gray-700">
                                    <div className="flex font-bold text-xl">
                                        {props.price}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default WebinarCard
