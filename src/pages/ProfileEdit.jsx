import React, {useState, useContext} from 'react'
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
import { UserContext } from '../context/userContext';


const ProfileEdit = () => {
    const history = useHistory()

    const { user } = useContext(UserContext);
    
    let dateNow = new Date().toLocaleDateString('en-CA', {timeZone: "Asia/Jakarta"})    
    const { editUser, error } = useAuth();
    const [alert, setAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    const { values, handleChange } = useForm({
        initialValues: {
            first_name: "",
            last_name: "",
            no_telp: "",
            sex: "",
            city: "",
            job: "",
            birth_date: ""
        }
    });

    const handleEdit = async (e) => {
        e.preventDefault();
        const inputData = JSON.parse(JSON.stringify(values),
        (key, value) => value === null || value === '' ? undefined : value);

        if (values.first_name === "" && values.last_name === "" && values.sex === "" && values.no_telp === ""&& values.birth_date === "" &&  values.city === "" &&  values.job === "") {
            setAlertMsg("Please fill in atleast one field")
            setAlert(true);
        }
        else{
            await editUser(inputData, `/users/${user._id}`);
            if (error) {
                setAlertMsg("Please fill in atleast one field")
                setAlert(true);
            } else {
                setAlertMsg("Data successfully updated")
                setAlert(true);
            }
        }
    }

  return (
    <div>
        <div className="block md:hidden">
            <div className="px-8 pt-12">
                <div className="pt-5">
                    <div className="text-2xl font-bold">Edit Profile</div>
                    <div className="">Edit atleast one field</div>
                </div>
                <form onSubmit={handleEdit}>
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
                <div className="pt-4">
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
                <div className="pt-4">
                    <div className="font-bold">
                        Kota Asal
                    </div>
                    <div className="flex items-center gap-x-8">
                        <div className="w-full">
                            <Form
                                type={"text"}
                                name={"city"} 
                                value={values.city} 
                                handleChange={handleChange}
                                placeholder="Jakarta"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                        <div className="font-bold">
                            Status Pekerjaan
                        </div>
                        <div className="flex items-center gap-x-8">
                            <div className="w-full">
                                <Form
                                  type={"text"}
                                  name={"job"} 
                                  value={values.job} 
                                  handleChange={handleChange}
                                  placeholder="Mahasiswa"
                                />
                            </div>
                        </div>
                    </div>
                <div className="pt-4">
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
                    <Button title="Edit Data" type={"submit"} url="/verify"/>
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
                    <div className="pt-5">
                        <div className="text-2xl font-bold">Edit Profile</div>
                        <div className="">Edit atleast one field</div>
                    </div>
                    <form onSubmit={handleEdit}>
                    
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
                    <div className="pt-5">
                        <div className="font-bold">
                            Kota Asal
                        </div>
                        <div className="flex items-center gap-x-8">
                            <div className="w-full">
                                <Form
                                  type={"text"}
                                  name={"city"} 
                                  value={values.city} 
                                  handleChange={handleChange}
                                  placeholder="Jakarta"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="font-bold">
                            Status Pekerjaan
                        </div>
                        <div className="flex items-center gap-x-8">
                            <div className="w-full">
                                <Form
                                  type={"text"}
                                  name={"job"} 
                                  value={values.job} 
                                  handleChange={handleChange}
                                  placeholder="Mahasiswa"
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
                        <Button title="Edit Data" type={"submit"}/>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
};

export default ProfileEdit;
