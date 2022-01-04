import React from 'react'

const SidebarButton = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="cursor-pointer flex items-center font-medium text-sm">
                    <img className="w-5" src={props.icon} alt="" />
                    <div className="pl-2">
                        {props.name}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default SidebarButton
