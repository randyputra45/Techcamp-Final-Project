import React from 'react'
import { Link } from 'react-router-dom'

const LandingButton1 = (props) => {
    return (
        <Link to={props.url}>
            <div className="block md:hidden">
                <div className="p-6 rounded-lg bg-button">
                    <div className="flex">
                        <img src={props.pic} alt=""></img>
                    </div>
                </div>  
            </div>
            <div className="hidden md:block">
                <div className="cursor-pointer pt-5 px-6 pb-6 border border-gray-300 rounded-lg hover:text-blue-600 hover:border-gray-400">    
                    <div className="flex gap-x-4 items-center">
                        <img src={props.pic} alt="" className='h-10'></img>
                        <div className="font-bold">{props.title}</div>  
                    </div>
                    <div className='text-sm pt-4 leading-relaxed text-gray-600 h-20'>
                        {props.desc}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default LandingButton1
