import React from 'react'

const MobileButton = (props) => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="py-4 px-6 rounded-lg bg-button">
                    <div className="flex truncate">
                        <img className="mr-6" src={props.pic} alt=""></img>
                        <div className="flex flex-col">
                            <div className="text-sm font-semibold">
                                {props.title}
                            </div>
                            <div className="mt-1 text-xxs text-gray-600 ">
                                {props.desc}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="cursor-pointer py-4 px-5 rounded-lg bg-button hover:bg-hover-button lg:w-72 xl:w-80">
                    <div className="flex flex-col justify-center gap-y-4">
                        <img className="h-12" src={props.pic} alt=""></img>
                        <div className="">
                            <div className="text-sm font-bold">
                                {props.title}
                            </div>
                            <div className="mt-1 text-xxs text-gray-60">
                                {props.desc}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileButton
