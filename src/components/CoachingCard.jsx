import React from 'react'

const CoachingCard = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className='cursor-pointer'>
                    <img src={props.pic} alt="" className='rounded-xl coach-card'/>
                    <div className="flex justify-end -mt-16 mr-2">
                        <div className="bg-white rounded-xl p-4 font-bold">
                            {props.price}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CoachingCard
