import React from 'react'

const Checkbox = (props) => {
    return (
        <div>
            <div class="flex items-center">
                <div>
                    <div className="form-check">
                        <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id"></input>
                        <label className="form-check-label inline-block text-gray-900 text-sm" for="flexCheckDefault">
                            {props.title}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkbox
