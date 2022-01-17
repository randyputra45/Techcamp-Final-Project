import React, {useState} from 'react'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import Form from '../components/Form'
import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
import Alert from "../components/Alert";

const ProfilGantiPassEmail = () => {
    const [alertMsg, setAlertMsg] = useState("");
    const [alert, setAlert] = useState(false);
    const {error, forgotPassword} = useAuth()

    const { values, handleChange } = useForm({
        initialValues: {
            email: "",
        }
    });

    const handleForgotPassEmail = async (e) => {
        e.preventDefault();
        if (values.email === "") {
            setAlertMsg("Please fill in all the required fields")
            setAlert(true);
        } else {
            setAlert(false);
            await forgotPassword(values)
            if (error) {
                setAlertMsg(error)
                setAlert(true);
            }
            else {
                setAlertMsg("Email sent. Please be patient maybe it's take several minutes")
                setAlert(true);
            }
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
                    <div className="md:w-1/2 lg:w-2/5 2xl:w-2/6 bg-white rounded-xl">
                        <form onSubmit={handleForgotPassEmail}>
                        <div className="px-10 py-12">
                            <div className="text-xl font-bold">Ganti Kata Sandi</div>
                            <div className="pt-12">
                                <div className="font-bold mb-2">
                                    Masukan email untuk reset password
                                </div>
                                <Form
                                    type={"email"}
                                    name={"email"} 
                                    value={values.email} 
                                    handleChange={handleChange}
                                    placeholder="yourmail@mail.com"
                                />
                            </div>
                            {alert && <Alert alertMsg={alertMsg}/>}
                            <div className="pt-8">
                                <Button
                                    title="Kirim Email"
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

export default ProfilGantiPassEmail
