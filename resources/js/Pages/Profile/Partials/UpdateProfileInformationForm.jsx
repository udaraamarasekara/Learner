import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import FileInput from "@/Components/FileInput";
export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            user_name: user.user_name,
            email: user.email,
            whatsapp: user.whatsapp,
            photo: user.photo,
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("profile.update") // Important for file uploads
);
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="user_name" value="Name" />

                    <TextInput
                        id="user_name"
                        className="mt-1 block w-full"
                        value={data.user_name}
                        onChange={(e) => setData("user_name", e.target.value)}
                        required
                        isFocused
                        autoComplete="user_name"
                    />

                    <InputError className="mt-2" message={errors.user_name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="user_name"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div>
                    <InputLabel htmlFor="whatsapp" value="Whatsapp" />

                    <TextInput
                        id="whatsapp"
                        className="mt-1 block w-full"
                        value={data.whatsapp}
                        onChange={(e) => setData("whatsapp", e.target.value)}
                        required
                        isFocused
                        autoComplete="whatsapp"
                    />

                    <InputError className="mt-2" message={errors.whatsapp} />
                </div>

                <div>
                    <InputLabel htmlFor="photo" value="photo" />

                  <FileInput
                            id="photo"
                            accept="image/*"
                            multiple={false}
                            name="photo"
                            files={data.photo}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('photo', e.target.files[0])}
                        />

                    <InputError className="mt-2" message={errors.photo} />
                </div>
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
