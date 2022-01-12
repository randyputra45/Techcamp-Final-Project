import React from 'react'

const DesktopNotifButton = (props) => {
    return (
        <div>
            <div className="p-4 px-6 rounded-lg bg-button w-full">
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
    )
}

export default DesktopNotifButton
