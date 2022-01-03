import React from 'react'

const AnswerCard = (props) => {
    return (
        <div>
            <div className="py-4 px-6 rounded-lg bg-button">

                <div className="flex flex-col">
                    <div className="font-bold">
                        {props.title}
                    </div>
                    <div className="mt-1 text-xs leading-relaxed text-gray-600">
                        {props.desc}
                    </div>
                </div>

            </div>            
        </div>
    )
}

export default AnswerCard
