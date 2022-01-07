import React, {useEffect} from 'react'
import ChartBar from '../components/ChartBar'
import axios from "axios";


const Register3 = () => {
    const verifyToken = window.location.pathname;
    console.log(verifyToken)

    useEffect(() =>{
        async function verifyUser() {
            await axios.get(`${verifyToken}`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err);
            });
        }
        
        verifyUser();  
    }, [verifyToken]);

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
                        <div className="pt-4">
                        Tolong periksa email anda <b>salmansetiawan@gmail.com</b> untuk konfirmasi akun anda (jangan lupa untuk periksa folder spam pada email anda.)
                        </div>
                        <div className="pt-4">
                            <csb className="cursor-pointer text-blue-600">Klik disini </csb>apabila belum menerima kode verifikasi dari kami
                        </div>
                        <div className="pt-12 text-xs leading-relaxed">
                            jika masih belum menemukan coba cari "in:allsubject:(confirm your account on Heroku)" pada email anda
                        </div>
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
                                <div className="pt-4">
                                    Tolong periksa email anda <b>salmansetiawan@gmail.com</b> untuk konfirmasi akun anda (jangan lupa untuk periksa folder spam pada email anda.)
                                </div>
                                <div className="pt-6">
                                    <csb className="cursor-pointer text-blue-600">Klik disini </csb>apabila belum menerima kode verifikasi dari kami
                                </div>
                                <div className="pt-12 text-xs leading-relaxed">
                                    jika masih belum menemukan coba cari "in:allsubject:(confirm your account on Heroku)" pada email anda
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register3
