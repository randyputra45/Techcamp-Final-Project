import React from 'react'
import { Link } from 'react-router-dom'

const DesktopActiveButton2 = (props) => {
    return (
        <div>
            <Link to={props.url}>
                <div className="cursor-pointer">
                    <div className="py-2 px-8 border border-gray-300 bg-gray-50 hover:border-pink-600 rounded-md font-medium text-sm text-center">
                        {props.title}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default DesktopActiveButton2
