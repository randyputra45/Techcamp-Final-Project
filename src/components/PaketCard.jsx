import React from 'react'

const PaketCard = (props) => {
    return (
        <div>
                <div className="block md:hidden">
                <div className="bg-card2 py-12 px-24 border border-gray-300">
                    <div className="flex flex-wrap flex-col">
                        <div className="flex justify-center">
                            <div className="text-4xl font-extrabold tracking-wide mont">
                                {props.bgtitle}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="pt-6 pb-4">
                        <div className="text-center text-xl md:text-2xl font-bold">{props.prize}</div>
                    </div>
                    <div className="py-4">
                        <div className="flex flex-col gap-y-2">
                            <div className="text-xs md:text-sm">{props.desc1}</div>
                            <div className="text-xs md:text-sm">{props.desc2}</div>
                            <div className="text-xs md:text-sm">{props.desc3}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-card2 py-16 px-24 border border-gray-300">
                    <div className="flex flex-wrap flex-col">
                        <div className="flex justify-center">
                            <div className="text-4xl font-extrabold tracking-wide mont">
                                {props.bgtitle}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="py-8">
                        <div className="text-center text-2xl font-bold">{props.prize}</div>
                    </div>
                    <div className="py-4">
                        <div className="flex flex-col gap-y-2">
                            <div className="text-sm">{props.desc1}</div>
                            <div className="text-sm">{props.desc2}</div>
                            <div className="text-sm">{props.desc3}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaketCard
