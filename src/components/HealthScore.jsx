import React from 'react'

const HealthScore = (props) => {
    return (
        <div>
            <div className="flex items-center gap-x-4">
                <img src={props.pic} alt="" className='h-16 w-1/4 rounded-lg' />
                <div className="flex flex-col">
                    <div className="mb-1">
                        {props.name}
                    </div>
                    <div className="font-bold text-2xl">
                        {props.score}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthScore
