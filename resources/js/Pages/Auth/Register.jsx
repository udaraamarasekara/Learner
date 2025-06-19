import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Button } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ErrorMessagePopup from "@/Components/ErrorMessagePopup";
import { useState } from "react";
import { router } from "@inertiajs/react";
export default function Register() {
    const { data, setData, post, processing, reset } = useForm({
        first_name:"",
        last_name:"",
        role:"",
        user_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        whatsapp: "",
        
    });
    const [error,setError]=useState("")
    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
            onError:(error)=>{
                console.log(error)
                setError(Object.values(error)[0])}
        });
    };

    return (
        <>
        <Head title="Register" />
        {error!=="" && <ErrorMessagePopup hideErrorPopup={() => setError("")} message={error}/>}
        <div className="bg-white min-h-screen items-center  flex flex-col-reverse gap-3 md:flex-row">
                        <img src="Frame 427319048 (1).png" className="object-cover md:pt-5 sm:h-full md:h-screen w-full md:w-1/2"/>

            <div className="w-full md:w-1/2 gap-3 p-8 flex flex-col">
                <div className="w-full text-center text-2xl font-bold">
                    Create your account
                </div>
                  <div className="w-full text-center text-xl font-bold">
                    Role
                </div>
                <select onChange={(e)=>{setData('role',e.target.value)}} className="w-1/3 rounded-md border-black mx-auto shadow-sm focus:border-black focus:ring-black ">
                   <option value={""}>Teacher Or Student</option>    
                   <option value={"teacher"}>Teacher</option>    
                   <option value={"student"}>Student</option>    

                </select>  
                <label className="text-xl font-bold">Name</label>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <TextInput onChange={(e)=>{setData('first_name',e.target.value)}} value={data.first_name}  placeholder="First Name" />
                    <TextInput onChange={(e)=>{setData('last_name',e.target.value)}} value={data.last_name}   placeholder="Last Name" />
                </div>
                 <label className="text-xl font-bold">User name</label>
                <TextInput onChange={(e)=>{setData('user_name',e.target.value)}} value={data.user_name}  type="text" placeholder="username" />
                <label className="text-xl font-bold">Email</label>
                <TextInput onChange={(e)=>{setData('email',e.target.value)}} value={data.email} type="email" placeholder="email" />
                     <label className="text-xl font-bold">Password</label>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <TextInput onChange={(e)=>{setData('password',e.target.value)}} value={data.password}  placeholder="Password" />
                    <TextInput onChange={(e)=>{setData('password_confirmation',e.target.value)}} value={data.password_confirmation}  placeholder="Confirm password" />
                   <div className="flex flex-col">
                   <label className="text-xl font-bold">Whatsapp number</label>
                    <TextInput onChange={(e)=>{setData('whatsapp',e.target.value)}} value={data.whatsapp}  placeholder="Whatsapp number" />

                   </div>

                </div>
                            <PrimaryButton onClick={(e)=>{submit(e)}} disabled={processing} className="w-max">

                               Create Account <ArrowRightIcon className="w-5"/>
                            </PrimaryButton>
                <div className="text-center text-gray-500 hover:underline hover:cursor-pointer text-sm mt-2" onClick={() => router.visit("/login")}>login instead</div>

            </div>
        </div>
        </>
    );
}
