import { Head, Link } from "@inertiajs/react";
import BottomNavBar from "@/Components/BottomNavBar";
export default function Categories() {
    return (
        <div className="flex flex-col h-screen">
            <div className="p-8">
                <Head title="Categories" />
                <div className="text-xl my-3 font-bold">All Categories</div>

                <div class="grid grid-cols-1 justify-center items-center w-full  md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full  rounded-xl border aspect-square items-center justify-center flex flex-col  border-[#E2E8F0]"
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
            </div>

            <BottomNavBar />
        </div>
    );
}
