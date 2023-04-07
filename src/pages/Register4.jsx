import React, {useEffect} from 'react'
import Button from '../components/Button'
import ChartBar from '../components/ChartBar'
import axios from "axios";
import ButtonAction from '../components/ButtonAction';
import { Link } from 'react-router-dom';

const Register4 = () => {
    const verifyToken = window.location.pathname;

    console.log(verifyToken)

    useEffect(() =>{
        async function verifyUser() {
            await axios.get(`https://gocure.netlify.app/api${verifyToken}`, { withCredentials: true })
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
                    <ChartBar bar="bar10"/>
                    <div className="pt-5">
                        <div className="text-xs mb-1">Tahap 3</div>
                        <div className="text-lg font-bold">Selamat Akun Telah Terverifikasi</div>
                    </div>
                    <div className="p-12">
                        <img src="after-register.svg" alt="" />
                    </div>
                    <div className="font-bold text-sm">
                        Pendaftaranmu hampir selesai
                    </div>
                    <div className="mt-2 text-sm">
                        Silahkan untuk <a href='/login'><b>Login </b></a>mengakses fitur di website GoCure
                    </div>
                    <div className="pt-12 w-full">
                        <Link to="/login">
                            <ButtonAction title="Login" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-begron"></div>
                <div className="py-24 flex items-center justify-center">
                    <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                        <div className="px-8 py-12">
                            <ChartBar />
                            <div className="pt-5">
                                <div className="text-lg font-bold text-center">Selamat Akun Telah Terverifikasi</div>
                            </div>
                            <div className="p-12 flex justify-center">
                                <img src="after-register.svg" alt="" />
                            </div>
                            <div className="mt-2 text-sm text-center">
                                Ayo <b>login</b> sekarang untuk mengakses fitur website GoCure
                            </div>
                            <div className="pt-6 flex justify-center">
                                <Link to="/login">
                                    <ButtonAction title="Login" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register4
