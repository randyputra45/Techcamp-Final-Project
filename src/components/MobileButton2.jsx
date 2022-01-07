import React from 'react'

const MobileButton2 = (props) => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="p-4 px-6 rounded-lg bg-button">
                    <div className="flex flex-col">
                        <div className="text-sm font-bold">
                            {props.title}
                        </div>
                        <div className="mt-1 text-xxs text-gray-600">
                            {props.desc}
                        </div>
                    </div>
                </div> 
            </div>
            <div className="hidden md:block">
                <div className="p-4 px-6 rounded-lg bg-button w-96">
                    <div className="flex flex-col">
                        <div className="text-sm font-bold">
                            {props.title}
                        </div>
                        <div className="mt-1 text-xxs text-gray-600">
                            {props.desc}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default MobileButton2
