import React from 'react'
import { Link } from 'react-router-dom'
import HeartFill from '../images/heart-fill.svg'

const VideoCard = (props) => {
    return (
        <Link to={props.url}>
            <div>
                <div className="rounded bg-button md:w-80 cursor-pointer hover:bg-pink-600 hover:text-gray-50">
                    <div className="">
                    <img className='rounded-t w-full h-36 object-cover' alt="blogpic" src={props.pic} />  
                    </div>
                    <div className="flex flex-col px-4 py-5">
                        <div className="text-sm font-bold">
                            {props.title}
                        </div>  
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard