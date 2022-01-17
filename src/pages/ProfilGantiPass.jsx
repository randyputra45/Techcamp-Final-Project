import React, {useState} from 'react'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import Form from '../components/Form'
import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
import Alert from "../components/Alert";

const ProfilGantiPass = () => {
    const [alertMsg, setAlertMsg] = useState("");
    const [alert, setAlert] = useState(false);
    const [password, setPassword] = useState("");
    const {error, resetPassword} = useAuth();
    const path = window.location.pathname;

    const { values, handleChange } = useForm({
        initialValues: {
            password: "",
            confirm_password: "",
        }
    });

    const handleForgotPass = async (e) => {
        e.preventDefault();
        console.log(values.password)
        if (values.password === "" || values.confirm_password === "") {
            setAlertMsg(error);
            setAlert(true);
        } else if (values.password !== values.confirm_password){
            setAlertMsg("Password don't match.")
            setAlert(true);
        } else {
            await resetPassword(values.password, path)
            setAlertMsg(error)
            setAlert(true);
        }
    }

    return (
        <div>
            <div className="hidden md:block">
                <div className="bg-begron"></div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="flex h-screen items-center justify-center">
                    <div className="md:w-1/2 lg:w-2/5 2xl:w-2/6 bg-white rounded-xl mt-12">
                        <form onSubmit={handleForgotPass}>
                        <div className="px-10 py-20">
                            <div className="text-xl font-bold">Ganti Kata Sandi</div>
                            <div className="pt-12">
                                <div className="font-bold mb-2">
                                    Masukan password baru
                                </div>
                                <Form 
                                    type={"password"}
                                    name={"password"} 
                                    value={values.password} 
                                    handleChange={handleChange}
                                    placeholder="********"
                                />
                            </div>
                            <div className="pt-6 pb-3">
                                <div className="font-bold mb-2">
                                    Masukan konfirmasi password baru
                                </div>
                                <Form 
                                    type={"password"}
                                    name={"confirm_password"} 
                                    value={values.confirm_password} 
                                    handleChange={handleChange}
                                    placeholder="********"
                                />
                            </div>
                            {alert && <Alert alertMsg={alertMsg}/>}
                            <div className="pt-8">
                                <Button
                                    title="Ganti Password"
                                    type={"submit"}
                                />
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilGantiPass
