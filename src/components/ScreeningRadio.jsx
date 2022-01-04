import React from 'react'
import '../css/radio.css'

const ScreeningRadio = (props) => {
    return (
        <div>
            <div className="flex flex-col pb-8">
                <div className="font-semibold mb-3">
                    {props.question}
                </div>
                <div className="flex gap-x-8">
                    <div class="flex items-center mr-4 mb-4">
                        <input id={props.id1} type="radio" name="radio" className="hidden" checked />
                        <label for={props.id1} className="flex items-center cursor-pointer text-sm">
                        <span className="w-4 h-4 inline-block mr-2 rounded-full border border-gray-400"></span>
                        {props.answer1}</label>
                    </div>
                    <div class="flex items-center mr-4 mb-4">
                        <input id={props.id2} type="radio" name="radio" className="hidden" checked />
                        <label for={props.id2} className="flex items-center cursor-pointer text-sm">
                        <span className="w-4 h-4 inline-block mr-2 rounded-full border border-gray-400"></span>
                        {props.answer2}</label>
                    </div>
                    <div class="flex items-center mr-4 mb-4">
                        <input id={props.id3} type="radio" name="radio" className="hidden" checked />
                        <label for={props.id3} className="flex items-center cursor-pointer text-sm">
                        <span className="w-4 h-4 inline-block mr-2 rounded-full border border-gray-400"></span>
                        {props.answer3}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreeningRadio
