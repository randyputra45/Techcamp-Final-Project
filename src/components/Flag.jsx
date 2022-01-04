import React from 'react'

const Flag = (props) => {
    return (
        <div>
            <div className="flex gap-x-4 items-center">
                <div className="flex gap-x-2 items-center">
                    <img src={props.flag} alt="" />
                    <div className="text-xs">
                        {props.code}
                    </div>
                </div>
                <div className="text-xs">
                        {props.name}
                    </div>
            </div>
        </div>
    )
}

export default Flag
