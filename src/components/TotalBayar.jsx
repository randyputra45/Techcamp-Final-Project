import React from 'react'
import Button from './Button'

const TotalBayar = (props) => {
    return (
        <div>
            <div className="bg-base px-6 py-8">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <p className="font-medium text-sm mb-1">
                            Total Bayar
                        </p>
                        <p className="font-black text-2xl">
                            {props.total}
                        </p>
                    </div>
                    <Button 
                        title="Bayar"
                    />
                </div>
            </div>
        </div>
    )
}

export default TotalBayar
