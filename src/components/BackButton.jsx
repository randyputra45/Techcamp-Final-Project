import React from 'react'

const BackButton = () => {
    return (
        <div>
            <div className="cursor-pointer flex items-center gap-x-2">
                <img src="back.svg" alt="" />
                <p className="text-sm">
                    kembali
                </p>
            </div>
        </div>
    )
}

export default BackButton
