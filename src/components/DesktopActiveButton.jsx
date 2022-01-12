import React from 'react'

const DesktopActiveButton = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="cursor-pointer">
                    <div className="py-2 px-8 bg-active-button hover:bg-pink-600 rounded-md text-white font-semibold text-sm text-center">
                        {props.title}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default DesktopActiveButton
