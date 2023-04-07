import React from 'react'
import Loading from '../components/Loading'

export const LoadingPage = () => {
    return (
        <div className="bg-teal-700 h-screen">
            <div className="flex flex-col h-screen">
                <div className="flex flex-col h-screen items-center justify-center">
                <Loading />
                <div className="pt-4 md:pt-6 text-white text-md md:text-xl font-bold select-none">
                    Please Wait
                </div>
                </div>
                <div className="flex justify-center pb-9">
                    <img className="h-8" src="gocure.svg" alt="" />   
                </div>
            </div>
        </div>
    )
}
