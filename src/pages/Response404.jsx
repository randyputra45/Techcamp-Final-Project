import React from 'react'

const Response404 = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="flex h-screen justify-center">
                    <div className="flex">
                        <img src="404.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-begron2">
                </div>
                <div className="flex h-screen justify-center">
                    <div className="flex">
                        <img src="404.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Response404
