import React, {useState} from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import ChartBar from '../components/ChartBar'

import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
import FormDropdown from "../components/FormDropdown";
import FormDatepicker from "../components/FormDatepicker";
import Alert from "../components/Alert";
import useFindUser from "../hooks/useFindUser";
import { Link, useHistory } from "react-router-dom";

const Register1 = () => {
  const history = useHistory()
  let dateNow = new Date().toLocaleDateString('en-CA', {timeZone: "Asia/Jakarta"})    
  const { registerUser } = useAuth();
  const { allUsers } = useFindUser();
  const [alert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const { values, handleChange } = useForm({
    initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        no_telp: "",
        sex: "",
        birth_date: ""
    }
  });

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const passwordRegex = /^[a-zA-Z0-9]{8,}$/

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(values)

    if (values.first_name === "" || values.last_name === "" || values.email === "" || values.password === "" || values.confirm_password === "" || values.sex === ""|| values.no_telp === ""|| values.birth_date === "") {
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
    else if (values.password !== values.confirm_password){
        setAlertMsg("Password don't match.")
        setAlert(true);
    }
    else{
        const userFind = allUsers.find(user => user.email === values.email)
        if(userFind){
            setAlertMsg("The email account is already exist, please Login")
            setAlert(true); 
        } else {
            setAlert(false);
            await registerUser(values);
            history.push({
                pathname: "/register/checkemail",
                state: {email: values.email}
            })
        }
    }
  }

  return (
    <div>
        <div className="block md:hidden">
            <div className="px-8 pt-12">
                <ChartBar bar="bar5"/>
                <div className="pt-5">
                    <div className="">Tahap 1</div>
                    <div className="text-2xl font-bold">Registrasi</div>
                </div>
                <form onSubmit={handleRegister}>
                <div className="pt-12">
                    <div className="font-bold">
                        Nama Depan
                    </div>
                    <Form
                        type={"text"}
                        name={"first_name"} 
                        value={values.first_name} 
                        handleChange={handleChange}
                        placeholder="John"
                    />
                </div>
                <div className="pt-4">
                    <div className="font-bold">
                        Nama Belakang
                    </div>
                    <Form 
                        type={"text"}
                        name={"last_name"} 
                        value={values.last_name} 
                        handleChange={handleChange}
                        placeholder="Doe"
                    />
                </div>
                <div className="pt-4">
                    <div className="font-bold">
                        Email
                    </div>
                    <Form 
                        type={"email"}
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
                        placeholder="Minimum 8 character length"
                    />
                </div>
                <div className="flex flex-col">
                </div>
                <div className="pt-5">
                    <div className="font-bold">
                        Konfirmasi Kata Sandi
                    </div>
                    <Form
                        type={"password"}
                        name={"confirm_password"} 
                        value={values.confirm_password} 
                        handleChange={handleChange}
                        placeholder="Minimum 8 character length"
                    />
                </div>
                <div className="pt-5">
                    <div className="font-bold">
                        No Telepon
                    </div>
                    <div className="flex items-center gap-x-8">
                        <div className="w-full">
                            <Form
                              type={"text"}
                              name={"no_telp"} 
                              value={values.no_telp} 
                              handleChange={handleChange}
                              placeholder="0000-0000-0000"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="font-bold">
                        Jenis Kelamin
                    </div>
                    <div className="flex items-center gap-x-8">
                        <div className="w-full">
                            <FormDropdown
                                type={"text"}
                                name={"sex"} 
                                value={values.sex} 
                                handleChange={handleChange}
                                placeholder="0000-0000-0000"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="font-bold">
                        Tanggal Lahir
                    </div>
                    <div className="flex items-center gap-x-8">
                        <div className="w-full mt-3">
                            <FormDatepicker 
                                type={"date"}
                                name={"birth_date"} 
                                value={values.birth_date} 
                                max={dateNow}
                                handleChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                {alert && <Alert alertMsg={alertMsg}/>}
                <div className="pt-8 flex justify-center">
                    <Button title="Daftar" type={"submit"} url="/verify"/>
                </div>
                <div className="mt-3 flex justify-center gap-x-1">
                    <div className="text-sm">Sudah punya akun? </div>
                    <Link to="/login">
                        <div className="cursor-pointer font-semibold text-sm text-blue-500">Login</div>
                    </Link>
                </div>
                </form>
            </div>
        </div>
        <div className="hidden md:block">
            <div className="bg-begron">
            </div>
            <div className="py-16 flex items-center justify-center">
                <div className="md:w-1/2 lg:w-2/5 bg-white rounded-xl">
                    <div className="px-8 py-12">
                        <ChartBar bar="bar3"/>
                    <div className="pt-5">
                        <div className="">Tahap 1</div>
                        <div className="text-2xl font-bold">Registrasi</div>
                    </div>
                    <form onSubmit={handleRegister}>
                    
                    <div className="pt-12 grid md:grid-cols-1 xl:grid-cols-2 gap-4">
                        <div className="">
                          <div className="font-bold">
                              Nama Depan
                          </div>
                          <Form 
                              type={"text"}
                              name={"first_name"} 
                              value={values.first_name} 
                              handleChange={handleChange}
                              placeholder="John"
                          />
                        </div>
                        <div className="">
                          <div className="font-bold">
                              Nama Belakang
                          </div>
                          <Form 
                              type={"text"}
                              name={"last_name"} 
                              value={values.last_name} 
                              handleChange={handleChange}
                              placeholder="Doe"
                          />
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="font-bold">
                            Email
                        </div>
                        <Form 
                            type={"email"}
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
                            placeholder="Minimum 8 character length"
                        />
                    </div>
                    <div className="pt-5">
                        <div className="font-bold">
                            Konfirmasi Kata Sandi
                        </div>
                        <Form 
                            type={"password"}
                            name={"confirm_password"} 
                            value={values.confirm_password} 
                            handleChange={handleChange}
                            placeholder="Minimum 8 character length"
                        />
                    </div>
                    <div className="pt-5">
                        <div className="font-bold">
                            No Telepon
                        </div>
                        <div className="flex items-center gap-x-8">
                            <div className="w-full">
                                <Form
                                  type={"text"}
                                  name={"no_telp"} 
                                  value={values.no_telp} 
                                  handleChange={handleChange}
                                  placeholder="0800-0000-0000"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="font-bold">
                            Jenis Kelamin
                        </div>
                        <div className="flex items-center gap-x-8">
                            <div className="w-full">
                                <FormDropdown
                                  type={"text"}
                                  name={"sex"} 
                                  value={values.sex} 
                                  handleChange={handleChange}
                                  placeholder="0000-0000-0000"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 mb-5">
                        <div className="font-bold">
                            Tanggal Lahir
                        </div>
                        <div className="flex items-center gap-x-8">
                            <div className="w-full mt-3">
                                <FormDatepicker 
                                    type={"date"}
                                    name={"birth_date"} 
                                    value={values.birth_date} 
                                    max={dateNow}
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    {alert && <Alert alertMsg={alertMsg}/>}
                    <div className="pt-8 flex justify-center">
                        <Button title="Daftar" type={"submit"}/>
                    </div>
                    <div className="mt-3 flex justify-center gap-x-1">
                        <div className="text-sm">Sudah punya akun? </div>
                        <Link to="/login">
                            <div className="cursor-pointer font-semibold text-sm text-blue-500">Login</div>
                        </Link>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
};

export default Register1;
