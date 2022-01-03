import React from 'react'

const Button = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="cursor-pointer">
                    <div className="py-3 px-12 bg-active-button hover:bg-pink-600 rounded-md text-white font-semibold text-center">
                        {props.title}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Button
