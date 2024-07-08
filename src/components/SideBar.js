import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Passed with the help of props
function SideBar({ name }) {
    return (
        <section className="fixed top-0 left-0 w-[30%] h-full text-white bg-blue-700 flex flex-col gap-[20%]">
            {/* Logo */}
            <div className="pt-3">
                <div className="flex justify-center items-center gap-2">
                    <img src="iit-bh-logo.png" className="w-[4rem] h-[4rem]" />
                    <span className="text-lg font-bold">SCITECH COUNCIL</span>
                </div>
            </div>

            {/* Another part */}
            <div className="flex flex-col gap-10 items-center justify-center py-8 transform -rotate-90 mt-5">
                <div className="flex items-center justify-between w-full px-4">
                    <div className="relative flex-1 w-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-0.5 bg-white"></div>
                        </div>
                        <div className="text-6xl relative z-10 flex justify-center tracking-widest">
                            {name}
                        </div>
                    </div>
                </div>
                <div className="flex gap-[5rem]">
                    <button className="p-2 bg-white rounded-full">
                        <FaArrowLeft className="text-black" />
                    </button>
                    <button className="p-2 bg-white rounded-full">
                        <FaArrowRight className="text-black" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default SideBar;
