import React from 'react'

const PhoneCodeColumn = (props) => {
    return (
        <div>
            <div className="px-6 py-6 border border-gray-300">
                <div className="flex items-center gap-x-6">
                    <div className="flex items-center gap-x-3">
                        <img src={props.flag} alt="" />
                        <p className="text-xs">
                            {props.code}
                        </p>
                    </div>
                    <p className="text-xs">
                        {props.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PhoneCodeColumn
