import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Button } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { router } from "@inertiajs/react";
export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        whatsapp: "",
        password: "",
     
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
        });
    };

    return (
        <>
        <Head title="Log in" />
        <div className="bg-white min-h-screen items-center  flex flex-col-reverse gap-3 md:flex-row">
            <div className="w-full md:w-1/2 gap-3 p-8 flex flex-col">
                <div className="w-full text-center text-2xl font-bold">
                    Sign in to your account
                </div>
                <label className="text-xl font-bold">Whatsapp Number</label>
                <TextInput value={data.whatsapp} onChange={(e)=>{setData('whatsapp',e.target.value)}} placeholder="Whatsapp number" />
                 <label className="text-xl font-bold">Password</label>
                <TextInput value={data.password} onChange={(e)=>{setData('password',e.target.value)}}  type="password" placeholder="Password" />
                            <PrimaryButton disabled={processing} onClick={(e)=>submit(e)} className="w-max">

                               Sign in  <ArrowRightIcon className="w-5"/>
                            </PrimaryButton>
                <div className="text-center text-gray-500 hover:underline hover:cursor-pointer text-sm mt-2" onClick={() => router.visit("/register")}>Register instead</div>

            </div>
            <img src="Frame 427319048 (1).png" className="object-cover md:pt-5 sm:h-full md:h-screen w-full md:w-1/2"/>
        </div>
        </>
    );
}
