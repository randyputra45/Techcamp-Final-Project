import React from 'react'

const VerifButton = (props) => {
    return (
        <div>

                <div className="cursor-pointer py-4 px-5 rounded-lg bg-button hover:bg-hover-button w-full">
                    <div className="flex flex-col justify-center gap-y-4">
                        <img className="h-12" src={props.pic} alt=""></img>
                        <div className="">
                            <div className="text-sm font-bold">
                                {props.title}
                            </div>
                            <div className="mt-1 text-xxs text-gray-60">
                                {props.desc}
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default VerifButton
