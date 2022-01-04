import React from 'react'

const BlogButton = (props) => {
    return (
        <div>
            <div className="rounded-lg p-4 bg-active-button">
                <img src={props.pic} alt="" />
            </div>
        </div>
    )
}

export default BlogButton
