import React from 'react'
import { Link } from 'react-router-dom'

const ExpertCard = (props) => {
    return (
        <Link to={props.url}>
            <div className="cursor-pointer">
                <img src={props.pic} alt="" className='object-cover rounded h-48 w-full' />
                <div className="font-bold text-sm pt-2">
                    {props.name}
                </div>
                <div className="text-xs mt-1">
                    {props.role}
                </div>
            </div>
        </Link>
    )
}

export default ExpertCard