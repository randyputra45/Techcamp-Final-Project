import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <button onClick={() => props.onClick} type={props.type}>
            <Link to={props.url}>
                <div className="cursor-pointer">
                    <div className="py-3 px-12 bg-active-button hover:bg-pink-600 rounded-md text-white font-semibold text-center">
                        {props.title}
                    </div>
                </div>
            </Link>
        </button>
    )
}

export default Button
