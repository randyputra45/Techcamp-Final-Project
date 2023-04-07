import React from 'react'


const ChartBar = (props) => {
    return (
        <div>
            <div className="w-full h-6 bg-button rounded-lg">
                <div className={`bg-active-button rounded-lg h-6 ${props.bar}`}></div>
            </div>
        </div>
    )
}

export default ChartBar