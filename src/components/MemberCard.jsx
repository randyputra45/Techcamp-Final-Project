import React from 'react'

const MemberCard = (props) => {
    return (
        <div>
            <div className="">
                <div className='flex flex-col'>
                    <div className="md:text-2xl xl:text-3xl font-bold">
                        {props.title}
                    </div>
                    <div className="mt-2 text-gray-500">
                        {props.role}
                    </div>
                    <div className="mt-6 md:text-base xl:text-lg leading-relaxed">
                        {props.desc}
                    </div>
                    <div className="mt-6 flex gap-x-6">

                        <svg className="h-8 w-8 cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        
                        <svg className="h-8 w-8 cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
