import React from 'react'

const LandingInfo2 = (props) => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center md:gap-8 xl:gap-x-24 xl:px-12 2xl:px-16">
                <img src={props.pic2} alt="" className='lg:hidden block object-cover w-full' />
                <div className='flex flex-col lg:w-4/6'>
                    <div className="md:text-2xl xl:text-3xl font-bold">
                        {props.title}
                    </div>
                    <div className="mt-4 md:text-base xl:text-lg leading-relaxed">
                        {props.desc}
                    </div>
                </div>
                <img src={props.pic} alt="" className='hidden lg:block object-cover w-4/6' />
            </div>
        </div>
    )
}

export default LandingInfo2
