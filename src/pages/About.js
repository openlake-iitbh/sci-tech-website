import NavBar from "../components/NavBar";

export const OurStory = () => {
    return (
        <div className="text-white flex m-[5rem] overflow-hidden">
            {/* Image */}
            <img 
                src="Arbaz shaikh.jpg"
                className="h-[100vh] w-[50%]"
            />
            <div className="w-[50%] h-[100vh] bg-gray-600 flex items-center justify-center">
                <div className="p-[2rem] m-[3rem] flex flex-col items-center justify-center gap-6 pt-10">
                    <h1 className="text-4xl font-semibold"> OUR <span className="text-sky-500"> STORY </span> </h1>
                    <p className="text-3xl"> "Innovate , Collaborate , Excel"</p>
                    <p className="text-center">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </div>
            </div>
        </div>
    )
};

function About(){

    // Our Story Function

    return(
        <div className="home-bg">
            <div className="section-2">
                <NavBar />
                <h1 className="w-fit text-[3rem] text-sky-500 font-bold m-auto mt-[10rem]">About Us</h1>
            </div>

            {/* Adding everything based on the function */}
            <OurStory />

            {/* Corousel */}

            



        </div>
    )
}
export default About;