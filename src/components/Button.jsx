import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <button type={props.type}>
            <div className="cursor-pointer">
                <div className="py-3 px-8 bg-active-button hover:bg-pink-600 rounded-md text-white md:text-sm font-medium text-center">
                    {props.title}
                </div>
            </div>
        </button>
    )
}

export default Button
