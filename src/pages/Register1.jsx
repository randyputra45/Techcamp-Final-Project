import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import PhoneDropdown from '../components/PhoneDropdown'
import Form from '../components/Form'
import ChartBar from '../components/ChartBar'
import PassSpecs from '../components/PassSpecs'

const Register1 = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="px-8 pt-12">
                    <ChartBar/>
                    <div className="pt-5">
                        <div className="">Tahap 1</div>
                        <div className="text-2xl font-bold">Registrasi</div>
                    </div>
                    <div className="pt-12">
                        <div className="font-bold">
                            Nama Depan
                        </div>
                        <Form
                            placeholder="John"
                        />
                    </div>
                    <div className="pt-4">
                        <div className="font-bold">
                            Nama Belakang
                        </div>
                        <Form 
                            placeholder="Doe"
                        />
                    </div>
                    <div className="pt-4">
                        <div className="font-bold">
                            Email
                        </div>
                        <Form 
                            placeholder="johndoe@mail.com"
                        />
                    </div>
                    <div className="pt-4">
                        <div className="font-bold">
                            Kata Sandi
                        </div>
                        <Form 
                            placeholder="*******"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="pt-2 grid grid-cols-3 gap-x-4">
                            <Box />
                            <Box />
                            <Box />
                        </div>
                        <div className="pt-1.5 text-xs text-gray-700">
                            Password Strength : <b>Low</b>
                        </div>
                        <div className="pt-6 pb-3 flex flex-col gap-y-3">
                            <PassSpecs 
                                spec="Karakter Minimal 8 Karakter"
                            />
                            <PassSpecs 
                                spec="Menggunakan Kapital"
                            />
                            <PassSpecs 
                                spec="Tanpa Simbol"
                            />
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="font-bold">
                            Konfirmasi Kata Sandi
                        </div>
                        <Form 
                            placeholder="*******"
                        />
                    </div>
                    <div className="pt-5">
                        <div className="font-bold">
                            No Telepon
                        </div>
                        <div className="flex items-center gap-x-8">
                            <PhoneDropdown />
                            <div className="w-full">
                                <Form 
                                    placeholder="0000-0000-0000"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 w-full">
                        <Button title="Daftar" />
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-begron">
                </div>
                <div className="py-16 flex items-center justify-center">
                    <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                        <div className="px-8 py-12">
                            <ChartBar />
                        <div className="pt-5">
                            <div className="">Tahap 1</div>
                            <div className="text-2xl font-bold">Registrasi</div>
                        </div>
                        <div className="pt-12 grid md:grid-cols-1 xl:grid-cols-2 gap-4">
                            <div className="">
                                <div className="font-bold">
                                    Nama Depan
                                </div>
                                <Form 
                                    placeholder="John"
                                />
                            </div>
                            <div className="">
                                <div className="font-bold">
                                    Nama Belakang
                                </div>
                                <Form 
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="font-bold">
                                Email
                            </div>
                            <Form 
                                placeholder="johndoe@mail.com"
                            />
                        </div>
                        <div className="pt-4">
                            <div className="font-bold">
                                Kata Sandi
                            </div>
                            <Form 
                                placeholder="*******"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="pt-2 grid grid-cols-3 gap-x-4">
                                <Box />
                                <Box />
                                <Box />
                            </div>
                            <div className="pt-1.5 text-xs text-gray-700">
                                Password Strength : <b>Low</b>
                                <div className="pt-6 pb-3 flex flex-col gap-y-3">
                                    <PassSpecs 
                                        spec="Karakter Minimal 8 Karakter"
                                    />
                                    <PassSpecs 
                                        spec="Menggunakan Kapital"
                                    />
                                    <PassSpecs 
                                        spec="Tanpa Simbol"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <div className="font-bold">
                                Konfirmasi Kata Sandi
                            </div>
                            <Form 
                                placeholder="*******"
                            />
                        </div>
                        <div className="pt-5">
                            <div className="font-bold">
                                No Telepon
                            </div>
                            <div className="flex items-center gap-x-8">
                                <PhoneDropdown />
                                <div className="w-full">
                                    <Form 
                                        placeholder="0000-0000-0000"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 w-full">
                            <Button title="Daftar" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register1
