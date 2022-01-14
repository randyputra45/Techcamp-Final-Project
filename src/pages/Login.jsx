import React, {useState} from 'react'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Form from '../components/Form'
import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
import Alert from "../components/Alert";
import { Link, useHistory } from 'react-router-dom';
import useFindUser from "../hooks/useFindUser";

const Login = () => {
    const { values, handleChange } = useForm({
        initialValues: {
            email: '',
            password: ''
        }
    });
    const { loginUser, error } = useAuth();
    const { allUsers } = useFindUser();
    const [alert, setAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/

    const handleLogin = async (e) => {
        e.preventDefault();

        if (values.email === "" || values.password === "") {
            setAlertMsg("Please fill in all the required fields")
            setAlert(true);
        }
        else if (!emailRegex.test(values.email)){
            setAlertMsg("Invalid email.")
            setAlert(true);
        }
        else if (!passwordRegex.test(values.password)){
            setAlertMsg("Password should contain at least 8 characters")
            setAlert(true);
        }
        else if (error) {
            console.log(error)
            setAlertMsg(error)
            setAlert(true);
        }
        else{
            // const userFind = allUsers.find(user => user.email === values.email)
            // if(userFind.verified === true){
                setAlert(false);
                await loginUser(values);
            // } else if (userFind.verified === false) {
            //     setAlertMsg("Account not found, please Register")
            //     setAlert(true); 
            // } else {
            //     setAlertMsg("Account not found, please Register")
            //     setAlert(true); 
            // }
        }
    }

    return (
        <div>
            <div className="block md:hidden">
                <div className="px-8 pt-12">
                    <div className="flex justify-center">
                        <img src="gocure.svg" alt="" className='h-16' />
                    </div>
                    <div className="pt-12 text-xl font-bold">Masuk</div>
                    <form onSubmit={handleLogin}>
                    <div className="pt-12">
                        <div className="font-bold">
                            Email
                        </div>
                        <Form
                            type={"text"}
                            name={"email"} 
                            value={values.email} 
                            handleChange={handleChange}
                            placeholder="johndoe@mail.com"
                        />
                    </div>
                    <div className="pt-4">
                        <div className="font-bold">
                            Kata Sandi
                        </div>
                        <Form 
                            type={"password"}
                            name={"password"} 
                            value={values.password} 
                            handleChange={handleChange}
                            placeholder="********"
                        />
                    </div>
                    {alert && <Alert alertMsg={alertMsg}/>}
                    <div className="flex justify-center pt-12">
                        <Button title="Login" type={"submit"}/>
                    </div>
                    </form>
                    <div className="pt-16">
                        <div className="flex justify-center gap-x-1">
                            <div className="text-sm">Tidak punya akun? klik</div>
                            <Link to="/register">
                                <div className="cursor-pointer font-semibold text-sm text-blue-500">Disini</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-begron"></div>
                <div className="flex h-screen items-center justify-center">
                    <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                        <form onSubmit={handleLogin}>
                        <div className="px-8 py-8">
                            <div className="text-xl font-bold">Masuk</div>
                            <div className="pt-12">
                                <div className="font-bold">
                                    Email
                                </div>
                                <Form
                                    type={"text"}
                                    name={"email"} 
                                    value={values.email} 
                                    handleChange={handleChange}
                                    placeholder="johndoe@mail.com"
                                />
                            </div>
                            <div className="pt-4">
                                <div className="font-bold">
                                    Kata Sandi
                                </div>
                                <Form 
                                    type={"password"}
                                    name={"password"} 
                                    value={values.password} 
                                    handleChange={handleChange}
                                    placeholder="********"
                                />
                            </div>
                            <div className="pt-2 pb-3 flex justify-between items-center">
                                <div className="cursor-pointer text-sm text-blue-500">
                                    Lupa Password?
                                </div>
                            </div>
                            {alert && <Alert alertMsg={alertMsg}/>}
                            <div className="flex justify-center pt-8">
                                <Button title="Login" type={"submit"}/>
                            </div>
                            <div className="pt-3">
                                <div className="flex justify-center gap-x-1">
                                    <div className="text-sm">Belum punya akun? </div>
                                    <Link to="/register">
                                        <div className="cursor-pointer font-semibold text-sm text-blue-500">Register</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
