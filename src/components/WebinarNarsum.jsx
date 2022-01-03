import React from 'react'

const WebinarNarsum = (props) => {
    return (
        <div>
            <div className="flex gap-x-3 items-center">
                <img src={props.pic} alt="" className='narsum-img' />
                <div className="flex flex-col">
                    <p className="text-sm mb-1 font-medium">
                        {props.name}
                    </p>
                    <p className="text-xs text-gray-500">
                        {props.role}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WebinarNarsum
