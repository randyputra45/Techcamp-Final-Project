import React from 'react'

const DesktopActiveButton2 = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="cursor-pointer">
                    <div className="py-2 px-8 border border-gray-300 bg-gray-50 hover:border-pink-600 rounded-md font-semibold text-center">
                        {props.title}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default DesktopActiveButton2
