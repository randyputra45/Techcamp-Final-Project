import React from 'react'

const KategoriBlog = (props) => {
    return (
        <div>
            <div className="py-2.5 px-5 rounded-lg bg-button">
                <div className="mt-1 text-xs leading-relaxed text-gray-600">
                    {props.title}
                </div>
            </div>    
        </div>
    )
}

export default KategoriBlog
