import React from 'react'

const FormGiant = (props) => {
    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <input
                        className="text-gray-900 appearance-none block w-full bg-gray-50 border border-gray-300 rounded py-2 px-2 my-2 text-5xl leading-tight focus:outline-none focus:bg-gray-50 focus:border-gray-300"
                        placeholder={props.placeholder}
                    />
                </div>
            </div>
        </div>
    )
}

export default FormGiant
