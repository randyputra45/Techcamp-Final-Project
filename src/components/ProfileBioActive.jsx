import React from 'react'
import Button from './Button'
import Form from './Form'

const ProfileBioActive = (props) => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="py-4 px-6 rounded-lg bg-button">
                    <div className="flex flex-col">
                        <div className="flex-flex-col">
                            <div className="text-xs text-gray-600">
                                Jenis Kelamin
                            </div>
                            <div className="mt-0.5 text-sm font-bold">
                                {props.kelamin}
                            </div>
                        </div>
                        <div className="flex-flex-col pt-3">
                            <div className="text-xs text-gray-600">
                                Profesi
                            </div>
                            <div className="mt-0.5 text-sm font-bold">
                                {props.profesi}
                            </div>
                        </div>
                        <div className="flex-flex-col pt-3">
                            <div className="text-xs text-gray-600">
                                Tanggal Lahir
                            </div>
                            <div className="mt-0.5 text-sm font-bold">
                                {props.tanggal}
                            </div>
                        </div>
                        <div className="flex-flex-col pt-3">
                            <div className="text-xs text-gray-600">
                                Kota Asal
                            </div>
                            <div className="mt-0.5 text-sm font-bold">
                                {props.kota}
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="hidden md:block">
                <div className="py-4 px-6 rounded-lg bg-button">
                    <div className="grid grid-cols-2">
                        <div className="flex-flex-col">
                            <div className="text-sm text-gray-600">
                                Jenis Kelamin
                            </div>
                            <div className="mt-2">
                                <Form />
                            </div>
                        </div>
                        <div className="flex-flex-col">
                            <div className="text-sm text-gray-600">
                                Profesi
                            </div>
                            <div className="mt-2">
                                <Form />
                            </div>
                        </div>
                        <div className="flex-flex-col pt-4">
                            <div className="text-sm text-gray-600">
                                Tanggal Lahir
                            </div>
                            <div className="mt-2">
                                <Form />
                            </div>
                        </div>
                        <div className="flex-flex-col pt-4">
                            <div className="text-sm text-gray-600">
                                Kota Asal
                            </div>
                            <div className="mt-2">
                                <Form />
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <Button
                            title="Simpan"
                        />
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default ProfileBioActive
