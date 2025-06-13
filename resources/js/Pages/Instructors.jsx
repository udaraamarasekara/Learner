
import { Head, Link } from "@inertiajs/react";
import BottomNavBar from "@/Components/BottomNavBar";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Instructors() {
    return (
        <div className="flex flex-col h-screen">
            <div className="p-8">
                <Head title="Categories" />
                <div className="text-xl my-3 font-bold">All Instructors</div>

                <div class="grid grid-cols-1 justify-center items-center w-full  md:grid-cols-3 lg:grid-cols-6 gap-4">
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
            </div>

            <BottomNavBar />
        </div>
    );
}
