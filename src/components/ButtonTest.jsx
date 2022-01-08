import React from 'react'

const ButtonTest = (props) => {
    return (
    <div className="cursor-pointer">
        <div className="py-4 px-12 bg-active-button hover:bg-pink-600 rounded-md text-white font-semibold text-center">
            {props.title}
        </div>
    </div>
    )
}

export default ButtonTest
