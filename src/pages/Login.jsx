import React from 'react'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Form from '../components/Form'

const Login = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="px-8 pt-12">
                    <div className="flex justify-center">
                        <img src="gocure.svg" alt="" className='h-16' />
                    </div>
                    <div className="pt-12 text-xl font-bold">Masuk</div>
                    <div className="pt-12">
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
                            placeholder="********"
                        />
                    </div>
                    <div className="pt-2 flex justify-between items-center">
                        <Checkbox title="Ingat Password" />
                        <div className="cursor-pointer text-sm text-blue-500">
                            Lupa Password?
                        </div>
                    </div>
                    <div className="pt-12 w-full">
                        <Button title="Login" />
                    </div>
                    <div className="pt-16">
                        <div className="flex justify-center gap-x-1">
                            <div className="text-sm">Apabila tidak punya akun, klik</div>
                            <div className="cursor-pointer font-semibold text-sm text-blue-500">Disini</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-begron"></div>
                <div className="flex items-center justify-center">
                    <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                        <div className="px-8 py-12">
                            <div className="text-xl font-bold">Masuk</div>
                            <div className="pt-12">
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
                                    placeholder="********"
                                />
                            </div>
                            <div className="pt-2 flex justify-between items-center">
                                <Checkbox title="Ingat Password" />
                                <div className="cursor-pointer text-sm text-blue-500">
                                    Lupa Password?
                                </div>
                            </div>
                            <div className="pt-12 w-full">
                                <Button title="Login" />
                            </div>
                            <div className="pt-16">
                                <div className="flex justify-center gap-x-1">
                                    <div className="text-sm">Apabila tidak punya akun, klik</div>
                                    <div className="cursor-pointer font-semibold text-sm text-blue-500">Disini</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
