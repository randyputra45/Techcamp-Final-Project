import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import PhoneDropdown from '../components/PhoneDropdown'
import Form from '../components/Form'
import ChartBar from '../components/ChartBar'
import MobileButton from '../components/MobileButton'
import FormGiant from '../components/FormGiant'

const Register3backup = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="px-8 pt-12">
                    <ChartBar />
                    <div className="pt-5">
                        <div className="text-xs mb-1">Tahap 2</div>
                        <div className="text-lg font-bold">Verifikasi Akun</div>
                    </div>
                    <div className="pt-8">
                        <FormGiant 
                            placeholder="XXXXXX"
                        />
                        <div className="pt-4">
                            Masukan kode verifikasi dari email yang sudah kami berikan ke <b>salmansetiawan@gmail.com</b>  (jangan lupa untuk tetap periksa folder spam pada email anda.)
                        </div>
                        <div className="pt-4">
                            <csb className="cursor-pointer text-blue-600">Klik disini </csb>apabila belum menerima kode verifikasi dari kami
                        </div>
                    </div>
                    <div className="pt-8 w-full">
                        <Button title="Verifikasi" />
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-begron"></div>
                <div className="pt-52 pb-20 flex items-center justify-center">
                    <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                        <div className="px-8 py-12">
                            <ChartBar />
                            <div className="pt-5">
                                <div className="text-xs mb-1">Tahap 2</div>
                                <div className="text-lg font-bold">Verifikasi Akun</div>
                            </div>
                            <div className="pt-8">
                                <FormGiant 
                                    placeholder="XXXXXX"
                                />
                                <div className="pt-4">
                                    Masukan kode verifikasi dari email yang sudah kami berikan ke <b>salmansetiawan@gmail.com</b> (jangan lupa untuk tetap periksa folder spam pada email anda.)
                                </div>
                                <div className="pt-4">
                                    <csb className="cursor-pointer text-blue-600">Klik disini </csb>apabila belum menerima kode verifikasi dari kami
                                </div>
                            </div>
                            <div className="pt-8 w-full">
                                <Button title="Verifikasi" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register3backup
