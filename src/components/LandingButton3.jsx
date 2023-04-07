import React from 'react'
import { Link } from 'react-router-dom'

const LandingButton3 = (props) => {
    return (
        <Link to={props.url}>
            <div className="">
                <div className="cursor-pointer pt-5 px-6 pb-6 border border-gray-300 rounded-lg hover:text-blue-600 hover:border-gray-400">    
                    <div className="flex flex-col gap-y-4 items-center">
                        <img src={props.pic} alt="" className='h-12'></img>
                        <div className='text-sm leading-relaxed text-gray-600'>
                            {props.desc}
                        </div> 
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default LandingButton3
