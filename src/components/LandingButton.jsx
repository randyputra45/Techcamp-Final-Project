import React from 'react'

const LandingButton = (props) => {
    return (
        <div>
            <div className="p-6 rounded-lg bg-button">
                <div className="flex">
                    <img src={props.pic} alt=""></img>
                </div>
            </div>  
        </div>
    )
}

export default LandingButton
