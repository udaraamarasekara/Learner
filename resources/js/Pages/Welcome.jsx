import { Head, Link } from "@inertiajs/react";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/24/solid";
import BottomNavBar from "@/Components/BottomNavBar";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-white  min-h-full flex flex-col">
                <div className="bg-white p-8 md:h-full flex flex-col-reverse md:flex-row">
                    <div className="relative flex md:min-h-full flex-col w-full md:w-1/2 md:flex-row items-center  md:justify-center">
                        <div className="flex flex-col">
                            <div className="text-2xl md:text-8xl my-3 text-gray-900 font-bold">
                                Unlock Your potential with Byway
                            </div>
                            <div className=" text-xl md:text-2xl my-3 text-gray-700">
                                Welcome to Byway, where learning knows no
                                bounds. We believe that education is the key to
                                personal and professional growth, and we're here
                                to guide you on your journey to success.
                            </div>
                            <button onClick={() => router.visit("/login")} className="bg-[#3B82F6] text-white p-5 md:w-1/3 w-full rounded-md">
                                Start your instructor journey
                            </button>
                        </div>
                    </div>
                    <div className="relative flex w-full md:w-1/2  md:min-h-full flex-col md:flex-row items-center md:justify-center">
                        <div className="flex flex-col md:items-center  md:flex-row">
                            <div className="rounded-full hidden md:block relative w-48 h-48 bg-[#F87171]">
                                <img
                                    className="absolute right-5 bottom-10 object-cover   w-auto h-[90%]"
                                    src="image 6.png "
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-full hidden md:block my-7 relative w-48 h-48 bg-[#60A5FA]">
                                    <img
                                        className="absolute left-7 bottom-10 object-cover   w-auto h-[90%]"
                                        src="image 8.png "
                                    />
                                </div>
                                <div className="rounded-full  my-7 relative w-48 h-48 bg-[#FACC15]">
                                    <img
                                        className="absolute right-15 bottom-12 object-cover   w-auto h-[90%]"
                                        src="image 7.png "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 flex flex-col md:flex-row bg-[#F8FAFC] ">
                    <div className="flex md:border-r-4 border-[#E2E8F0] flex-col w-full md:w-1/4 items-center justify-center">
                        <div className="m-4 font-bold md:text-5xl">250+</div>
                        <div className="text-lg">
                            Courses by our best mentors
                        </div>
                    </div>
                    <div className="flex md:border-r-4 border-[#E2E8F0] flex-col w-full md:w-1/4 items-center justify-center">
                        <div className="m-4 font-bold md:text-5xl">250+</div>
                        <div className="text-lg">
                            Courses by our best mentors
                        </div>
                    </div>
                    <div className="flex md:border-r-4 border-[#E2E8F0] flex-col w-full md:w-1/4 items-center justify-center">
                        <div className="m-4 font-bold md:text-5xl">250+</div>
                        <div className="text-lg">
                            Courses by our best mentors
                        </div>
                    </div>
                    <div className="flex flex-col md:w-1/4 w-full items-center justify-center">
                        <div className="m-4 font-bold md:text-5xl">250+</div>
                        <div className="text-lg">
                            Courses by our best mentors
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white  md:h-full flex flex-col">
                <div className="flex flex-row p-8 justify-between">
                    <div className="text-xl font-bold">Top Categories</div>
                    <div className="text-lg text-[#3B82F6]">See all</div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 justify-between p-8">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full md:w-1/6 rounded-xl border aspect-square items-center justify-center flex flex-col  border-[#E2E8F0]"
                        >
                            <div className="w-24 h-24 sm:h-16 sm:w-16 flex items-center justify-center text-3xl font-extrabold text-[#3B82F6] rounded-full bg-[#E0F2FE]">
                                d
                            </div>
                            <div className="text-2xl font-bold">Subject</div>
                            <div className="text-[#334155] text-lg">
                                No of Courses
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row p-8 justify-between">
                    <div className="text-xl font-bold">Top Courses</div>
                    <div className="text-lg text-[#3B82F6]">See all</div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 overflow-auto justify-between p-8">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full md:w-1/6 rounded-xl min-w-64  border aspect-square items-start justify-between flex flex-col  border-[#E2E8F0]"
                        >
                            <img
                                className="object-cover w-full rounded-t-xl  h-48"
                                src="Rectangle 1080.png"
                            />
                            <div className="pl-5 mt-3">
                                <div className="text-2xl font-bold">
                                    Course Name
                                </div>
                                <div className="text-[#334155] text-lg">
                                    Lecturer
                                </div>

                                <div className="text-[#EAB308] mb-3 flex flex-row text-lg">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} className="w-8" />
                                    ))}
                                    <div className="text-[#334155] font-bold">
                                        (Rating)
                                    </div>
                                </div>
                                <div className="mb-3 flex justify-between text-[#334155]">
                                    <div>hours</div> <div>lectures</div>
                                    <div> difficulity</div>
                                </div>
                                <div className="text-xl mb-3 font-bold">
                                    FEE
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row p-8 justify-between">
                    <div className="text-xl font-bold">Top Instructors</div>
                    <div className="text-lg text-[#3B82F6]">See all</div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 overflow-auto justify-between p-8">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full min-w-64 md:w-1/6 rounded-xl border aspect-square items-center justify-between flex flex-col  border-[#E2E8F0]"
                        >
                            <div className="w-full flex items-center justify-center p-4">
                                <img
                                    className="object-cover w-full  rounded-t-xl  h-48"
                                    src="Rectangle 1136.png"
                                />
                            </div>
                            <div className="text-2xl font-bold">
                                Lecturer Name
                            </div>
                            <div className="text-[#334155] text-lg">
                                Subject
                            </div>
                            <div className="w-full p-4">
                                <div className="text-xl border-t-2  w-full border-[#E2E8F0] flex justify-between mb-3 font-bold">
                                    <div className="font-bold mt-5 flex flex-row">
                                        <StarIcon className="text-[#EAB308] w-8" />
                                        Rating
                                    </div>
                                    <div className="font-bold mt-5 flex flex-row">
                                        Subscription
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-[#F8FAFC]  min-h-full flex flex-col">
                    <div className="w-full p-4 flex flex-col md:flex-row  ">
                        <div className="flex flex-row px-4 w-full justify-between">
                            <div className="text-xl font-bold">
                                What Our Customer Say About Us
                            </div>
                            <div className="flex flex-row gap-5">
                                <button className="rounded-xl sm:hidden md:block text-xl w-16 h-8 text-white bg-[#94A3B8]">
                                    {"<"}
                                </button>
                                <button className="rounded-xl sm:hidden md:block text-xl w-16 h-8 text-white bg-[#94A3B8]">
                                    {">"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row px-4 w-full max-h-full max-w-screen mb-5 overflow-auto hide-scrollbar justify-between">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-1/5 min-w-[360px]  md:min-w-[610px] mx-4 mb-4 p-4 border flex flex-col justify-center bg-white border-[#E2E8F0] rounded-xl">
                                <div className="text-4xl text-[#3B82F6]">
                                    {" "}
                                    "{" "}
                                </div>
                                <div className="text-lg">
                                    "Byway's tech courses are top-notch! As
                                    someone who's always looking to stay ahead
                                    in the rapidly evolving tech world, I
                                    appreciate the up-to-date content and
                                    engaging multimedia.
                                </div>
                                <div className="flex flex-row items-center">
                                    <img
                                        className="object-cover w-12  rounded-full  h-12"
                                        src="Rectangle 1136.png"
                                    />
                                    <div className="flex mt-3 flex-col">
                                        <div className="mx-2 font-bold">
                                            User Role
                                        </div>
                                        <div className="mx-2 ">User Name</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-white  md:h-full flex flex-col">
                <div className="w-full  p-4 flex flex-col md:flex-row items-center justify-between">
                    <img src="image 10.png" className="w-1/5 mx-4" />
                    <div className="flex flex-col mx-4 md:w-1/2 justify-start">
                        <div className="text-2xl font-bold">
                            {" "}
                            Become an Instructor
                        </div>
                        <div className="text-xl">
                            Instructors from around the world teach millions of
                            students on Byway. We provide the tools and skills
                            to teach what you love.
                        </div>
                        <PrimaryButton onClick={() => router.visit("/login")} className="w-max rounded-lg">Start your Instructor journey <ArrowRightIcon className="w-8"/></PrimaryButton>
                    </div>
                </div>
            </div>
            <div className="bg-white  md:h-full flex flex-col">
                <div className="w-full  p-4 flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className="flex flex-col mx-4 md:w-1/2 justify-start">
                        <div className="text-2xl font-bold">
                            Transform your life through education
                        </div>
                        <div className="text-xl">
                            Learners around the world are launching new careers,
                            advancing in their fields, and enriching their
                            lives.{" "}
                        </div>
                                                <PrimaryButton onClick={() => router.visit("/courses")} className="w-max rounded-lg">Checkout Courses <ArrowRightIcon className="w-8"/></PrimaryButton>
                    </div>
                    <img src="image.png" className="w-1/5 mx-4" />
                </div>
            </div>
            <BottomNavBar/>
        </>
    );
}
