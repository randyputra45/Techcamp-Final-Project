import React from 'react'

const WebinarCard2 = (props) => {
    return (
        <div>
            <div className="rounded-xl bg-card py-4 px-4">
                <div className="flex flex-wrap flex-col gap-y-16">
                    <div className="flex justify-between">
                        <p className="text-xxs">MS Wellbeing</p>
                        <p className="text-xxs">Webinar</p>
                    </div>
                    <div className="flex justify-between gap-x-4 items-end">
                        <div className="font-bold">
                            {props.title}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebinarCard2
