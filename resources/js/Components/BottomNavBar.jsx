export default function BottomNavBar({ className = "", ...props }) {
    return (
        <div className="bg-[#1E293B] p-8 mt-auto justify-between text-white md:h-min md:flex-row flex flex-col">
                        <div className="flex flex-col md:w-2/6">
                            <div className="flex flex-row text-2xl font-bold">
                                <img src="image 4.png" />
                            </div>
                            <div className="text-lg text-[#CBD5E1]">
                                Empowering learners through accessible and
                                engaging online education. Byway is a leading
                                online learning platform dedicated to providing
                                high-quality, flexible, and affordable
                                educational experiences.
                            </div>
                        </div>
                        <div className="flex flex-col md:w-1/6">
                            <div className="flex flex-row text-2xl font-bold">
                                Get Help
                            </div>
                            <div className="text-lg text-[#CBD5E1]">
                                Contact Us
                            </div>
                            <div className="text-lg text-[#CBD5E1]">
                                Latest Articles
                            </div>
                            <div className="text-lg text-[#CBD5E1]">FAQ</div>
                        </div>
                        <div className="flex flex-col md:w-1/6">
                            <div className="flex flex-row text-2xl font-bold">
                                Get Help
                            </div>
                            <div className="text-lg text-[#CBD5E1]">
                                Contact Us
                            </div>
                            <div className="text-lg text-[#CBD5E1]">
                                Latest Articles
                            </div>
                            <div className="text-lg text-[#CBD5E1]">FAQ</div>
                        </div>
                    </div>
    );
}
