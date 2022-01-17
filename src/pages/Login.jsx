import React, {useState, useContext} from 'react'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Form from '../components/Form'
import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
import Alert from "../components/Alert";
import { Link, useHistory } from 'react-router-dom';
import useFindUser from "../hooks/useFindUser";
import { UserContext } from '../context/userContext';

const Login = () => {
    const history = useHistory()

    const { user } = useContext(UserContext);

    if(user) {
        history.push("/home")
    }

    const { values, handleChange } = useForm({
        initialValues: {
            email: '',
            password: ''
        }
    });
    const { loginUser, error } = useAuth();
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
            setAlertMsg("Invalid email")
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
            setInterval(
                function(){ history.go(0) },
                2000
            );
        }
        else{
            setAlert(false);
            await loginUser(values);
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
                                <Link to="/profile/changepass">
                                    <div className="cursor-pointer text-sm text-blue-500">
                                        Lupa Password?
                                    </div>
                                </Link>
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
