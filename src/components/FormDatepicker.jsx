import React from 'react'

const FormDatepicker = (props) => {
    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <input
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        placeholder={props.placeholder}
                        name={props.name}
                        value={props.value}
                        onChange={props.handleChange}
                        onKeyDown={props.handleKeyDown}
                        type={props.type}
                        max={props.max}
                    />
                </div>
            </div>
        </div>
    )
}

export default FormDatepicker
