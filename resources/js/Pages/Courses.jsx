import { Head, Link } from "@inertiajs/react";
import { StarIcon } from "@heroicons/react/24/solid";
import BottomNavBar from "@/Components/BottomNavBar";
export default function Courses() {
    return (
        <div className="flex flex-col h-screen">
            <div className="p-8">
                <Head title="Courses" />
                <div className="text-xl my-3 font-bold">All Courses</div>

                <div class="grid grid-cols-1 justify-center items-center w-full  md:grid-cols-3 lg:grid-cols-6 gap-4">
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
            </div>
            <BottomNavBar/>

        </div>
    );
}
