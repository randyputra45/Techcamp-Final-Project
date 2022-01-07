import React from 'react'

const ProfileButton = (props) => {
    return (
        <div>
            <div className="hidden md:block">
                <div className="cursor-pointer py-4 px-5 rounded-lg bg-button hover:bg-hover-button lg:w-72 xl:w-80">
                    <div className="flex gap-x-6 items-center">
                        <img className="h-10" src={props.pic} alt=""></img>
                        <div className="flex flex-col">
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
        </div>
    )
}

export default ProfileButton
