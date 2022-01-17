import React, {useState} from 'react'
import Button from '../components/Button'
import ButtonAction from '../components/ButtonAction'
import DesktopAvatar from '../components/DesktopAvatar'
import Form from '../components/Form'
import Alert from "../components/Alert";

const Partnership = () => {
    const [alert, setAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    const handleClick = () => {
        setAlert(true)
        setAlertMsg("Form telah terkirim, silahkan tunggu balasan kami")
    }

    return (
        <div>
            <div className="">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="pt-36 pb-24">
                    <div className="flex justify-center">
                        <div className="w-5/6 lg:w-4/6 xl:w-1/2">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="mb-1">Lainnya</div>
                                    <div className="text-3xl font-bold">Partnership</div>
                                    <div className="pt-8 text-gray-500 leading-relaxed">
                                        Disini anda dapat menghubungi kami untuk melakukan kerja sama di bidang Psikologi. Kami terbuka untuk bekerja sama dengan siapa pun, Anda dapat mengisi form berikut dan tim kami akan menghubungi Anda.
                                    </div>
                                    <div className="pt-8">
                                        <div className="font-bold mb-2">Nama</div>
                                        <Form />
                                    </div>
                                    <div className="pt-4">
                                        <div className="font-bold mb-2">Instansi</div>
                                        <Form />
                                    </div>
                                    <div className="pt-4">
                                        <div className="font-bold mb-2">Email</div>
                                        <Form />
                                    </div>
                                    <div className="pt-4 pb-4">
                                        <div className="font-bold mb-2">Nomor Handphone</div>
                                        <Form />
                                    </div>
                                    {alert ? <Alert alertMsg={alertMsg}/> : ""}
                                    <div className="pt-4 pb-4">
                                        <button onClick={() => handleClick()}>
                                        <ButtonAction
                                            title="Kirim"
                                        />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partnership
