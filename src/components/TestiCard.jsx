import React from 'react'

const TestiCard = (props) => {
    return (
        <div>
            <div className="flex justify-center">
            <img src={props.pic} alt="" className='h-52 rounded-xl' />
            </div>
            <div className="pt-5 font-bold text-center">
                {props.name}
            </div>
            <div className="pt-2 text-gray-500">
                {props.desc}
            </div>
        </div>
    )
}

export default TestiCard
