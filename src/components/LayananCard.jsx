import React from 'react'

const LayananCard = (props) => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="rounded-xl bg-card py-4 px-4">
                    <div className="flex flex-wrap flex-col gap-y-16">
                        <div className="flex justify-between">
                            <p className="text-xxs">GoCure</p>
                            <p className="text-xxs">Layanan Kami</p>
                        </div>
                        <div className="flex justify-between gap-x-4 items-end">
                            <div className="font-bold">
                                {props.title}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="rounded-xl bg-card py-4 px-4">
                    <div className="flex flex-wrap flex-col gap-y-24">
                        <div className="flex justify-between">
                            <p className="text-xxs">GoCure</p>
                            <p className="text-xxs">Layanan Kami</p>
                        </div>
                        <div className="flex justify-between gap-x-4 items-end">
                            <div className="font-bold">
                                {props.title}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default LayananCard
