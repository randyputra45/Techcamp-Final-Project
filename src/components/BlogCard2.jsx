import React from 'react'

const BlogCard2 = (props) => {
    return (
        <div>
            <div className="rounded-lg bg-button">
                <img className='object-cover rounded-t-lg w-full h-32 xl:h-40' src={props.pic} alt="" />
                <div className="flex flex-col p-4">
                    <div className="font-bold">
                        {props.title}
                    </div>
                    <div className="mt-1 text-xs text-gray-600">
                        {props.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard2
