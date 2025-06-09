import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-white  min-h-screen flex flex-col">
                <div className="bg-white p-8 md:h-screen flex flex-col-reverse md:flex-row">
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
                            <button className="bg-[#3B82F6] text-white p-5 md:w-1/3 w-full rounded-md">
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
                    <div className="m-4 font-bold md:text-5xl" >250+</div>
                    <div className="text-lg">Courses by our best mentors</div>
                  </div>  
                   <div className="flex md:border-r-4 border-[#E2E8F0] flex-col w-full md:w-1/4 items-center justify-center">
                    <div className="m-4 font-bold md:text-5xl" >250+</div>
                    <div className="text-lg">Courses by our best mentors</div>
                  </div> 
                   <div className="flex md:border-r-4 border-[#E2E8F0] flex-col w-full md:w-1/4 items-center justify-center">
                    <div className="m-4 font-bold md:text-5xl" >250+</div>
                    <div className="text-lg">Courses by our best mentors</div>
                  </div> 
                   <div className="flex flex-col md:w-1/4 w-full items-center justify-center">
                    <div className="m-4 font-bold md:text-5xl" >250+</div>
                    <div className="text-lg">Courses by our best mentors</div>
                  </div> 
                </div>
            </div>
             <div className="bg-white  md:h-screen flex flex-col">
              <div className="flex flex-row p-8 justify-between">
                <div className="text-xl font-bold" >Top Categories</div>
                <div className="text-lg text-[#3B82F6]">See all</div>
              </div> 

                <div className="flex flex-row gap-3 justify-between p-8">
                                        {[...Array(5)].map((_, i) => (

                   <div className="w-full md:w-1/6 rounded-xl border aspect-square items-center justify-center flex flex-col  border-[#E2E8F0]">
                      <div className="w-24 h-24 flex items-center justify-center text-3xl font-extrabold text-[#3B82F6] rounded-full bg-[#E0F2FE]" >d</div>
                      <div className="text-2xl font-bold">Subject</div>
                      <div className="text-[#334155] text-lg">No of Courses</div>
                   </div>
                                         ))}

                </div>

            </div>
        </>
    );
}
