import React from 'react'

const KategoriBlog = (props) => {
    return (
        <div>
            <div className={`py-3 px-5 rounded-lg ${props.color} ${props.textcolor} cursor-pointer hover:text-white hover:bg-pink-600`}>
                <div className="text-xs leading-relaxed">
                    {props.title}
                </div>
            </div>    
        </div>
    )
}

export default KategoriBlog
