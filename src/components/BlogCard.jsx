import React from 'react'

const BlogCard = (props) => {
    return (
        <div>
            <div className="rounded bg-button md:w-96 cursor-pointer hover:bg-pink-600 hover:text-gray-50">
                <div className="">
                <img className='rounded-t w-full h-36 object-cover' src={props.pic} />  
                </div>
                <div className="flex flex-col px-4 py-5">
                    <div className="text-sm font-bold">
                        {props.title}
                    </div>
                    <div className="mt-1 text-xxs">
                        {props.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
