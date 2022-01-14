import React, {useState} from 'react'
import Button from '../components/Button'
import ButtonAction from '../components/ButtonAction'
import DesktopAvatar from '../components/DesktopAvatar'
import Form from '../components/Form'
import Alert from "../components/Alert";

const Feedback = () => {
    const [alert, setAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    const handleClick = async () => {
        setAlert(true)
        setAlertMsg("Form telah terkirim, silahkan tunggu balasan kami")
    }
    return (
        <div>
            <div className="hidden md:block">
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
                                    <div className="text-3xl font-bold">Feedback</div>
                                    <div className="pt-8 text-gray-500 leading-relaxed">
                                        Disini anda dapat memberikan kritik atau saran bagi pengembangan website dan juga testimoni tentang layanan yang diberikan GoCure. Silahkan tinggalkan pesan pada form berikut, tanggapan anda akan sangat berarti.
                                    </div>
                                    <div className="pt-8">
                                        <div className="font-bold mb-2">Kolom Feedback</div>
                                        <Form />
                                    </div>
                                    {alert ? <Alert alertMsg={alertMsg}/> : ""}
                                    <div className="pt-8">
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

export default Feedback
