import React from 'react'

const ButtonNext = (props) => {
    return (
    <div className="cursor-pointer">
        <div className="py-2 px-12 bg-teal-500 hover:bg-pink-600 rounded-md text-white font-semibold text-center">
            {props.title}
        </div>
    </div>
    )
}

export default ButtonNext
