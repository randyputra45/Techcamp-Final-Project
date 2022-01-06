import React from 'react'

const PassSpecs = (props) => {
    return (
        <div>
            <div className="flex gap-x-4">
                <div className="dot"></div>
                <div className="text-xs">{props.spec}</div>
            </div>
        </div>
    )
}

export default PassSpecs