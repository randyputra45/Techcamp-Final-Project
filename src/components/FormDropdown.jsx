import React from 'react'

const FormDropdown = (props) => {
    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <select
                        className="text-gray-900 appearance-none block w-full bg-gray-50 border border-gray-400 rounded py-2 px-2 my-2 text-sm leading-tight focus:outline-none focus:bg-gray-50 focus:border-form"
                        placeholder={props.placeholder}
                        name={props.name}
                        value={props.value}
                        onChange={props.handleChange}
                        onKeyDown={props.handleKeyDown}
                        type={props.type}
                    >
                        <option value="">Pilih jenis kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FormDropdown
