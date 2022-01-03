import React from 'react'

const MobileAvatar = (props) => {
    return (
        <div>
            <div className="flex gap-x-1.5">
                <div className="w-full py-4 px-6 bg-button rounded-tl-lg rounded-bl-lg">
                    <div className="flex items-center">
                        <img className="mr-6 avatar-ico" src={props.pic} alt=""></img>
                        <div className="flex flex-col truncate">
                            <div className="text-sm md:text-base font-bold">
                                {props.title}
                            </div>
                            <div className="block md:hidden mt-1 text-xxs text-gray-600">
                                {props.desc}
                            </div>
                            <div className="hidden md:block mt-1 text-xs text-gray-600">
                                {props.desc}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex items-center rounded-tr-lg rounded-br-lg bg-button">
                    <img src="notif-active.svg" alt="" className='h-10'></img>
                </div>
            </div>
        </div>
    )
}

export default MobileAvatar
