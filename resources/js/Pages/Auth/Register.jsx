import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Button } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <div className="bg-white min-h-screen items-center  flex flex-col-reverse gap-3 md:flex-row">
            <div className="w-full md:w-1/2 gap-3 p-8 flex flex-col">
                <div className="w-full text-center text-2xl font-bold">
                    Sign in to your account
                </div>
                <label className="text-xl font-bold">Whatsapp Number</label>
                <TextInput  placeholder="Whatsapp number" />
                 <label className="text-xl font-bold">Password</label>
                <TextInput type="password" placeholder="Password" />
                            <PrimaryButton className="w-max">

                               { 'Sign in ->'}
                            </PrimaryButton>

            </div>
            <img src="Frame 427319048 (1).png" className="object-cover md:pt-5 sm:h-full md:h-screen w-full md:w-1/2"/>
        </div>
    );
}
