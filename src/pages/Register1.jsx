import React from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import PhoneDropdown from '../components/PhoneDropdown'
import Form from '../components/Form'
import ChartBar from '../components/ChartBar'
import PassSpecs from '../components/PassSpecs'

import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';

const Register1 = () => {
  const { values, handleChange } = useForm({
    initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        no_telp: "",
        confirm_password: ""
    }
  });
  const { registerUser, error } = useAuth();

  const handleRegister = async (e) => {
      e.preventDefault();
      console.log(values)
      await registerUser(values);
  }

  return (
    <div>
        <div className="block md:hidden">
            <div className="px-8 pt-12">
                <ChartBar />
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
                        placeholder="*******"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="pt-2 flex justify-between items-center gap-x-4">
                        <Box />
                        <Box />
                        <Box />
                    </div>
                    <div className="pt-1.5 text-xs text-gray-700">
                        Password Strength : <b>Low</b>
                    </div>
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
                        placeholder="*******"
                    />
                </div>
                <div className="pt-5">
                    <div className="font-bold">
                        No Telepon
                    </div>
                    <div className="flex items-center gap-x-8">
                        <PhoneDropdown />
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
                <div className="pt-8 w-full">
                    <Button title="Daftar" type={"submit"}/>
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
                        <ChartBar />
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
                            placeholder="*******"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="pt-2 flex justify-between items-center gap-x-4">
                            <Box />
                            <Box />
                            <Box />
                        </div>
                        <div className="pt-1.5 text-xs text-gray-700">
                            Password Strength : <b>Low</b>
                            <div className="pt-6 pb-3 flex flex-col gap-y-3">
                                <PassSpecs 
                                    spec="Karakter Minimal 8 Karakter"
                                />
                                <PassSpecs 
                                    spec="Menggunakan Kapital"
                                />
                                <PassSpecs 
                                    spec="Tanpa Simbol"
                                />
                            </div>
                        </div>
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
                            placeholder="*******"
                        />
                    </div>
                    <div className="pt-5">
                        <div className="font-bold">
                            No Telepon
                        </div>
                        <div className="flex items-center gap-x-8">
                            <PhoneDropdown />
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
                    <div className="pt-8 w-full">
                        <Button title="Daftar" type={"submit"}/>
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
