import { useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import BlogHeader from "./HeaderBlog";

function IndividualCard(){

    // Temporary Taking the same state variable here , we can use react redux
    // So that we will get the access of this everywhere inside our whole webpage
    // For checking only I am taking by this

    const [blogEntry , setBlogEntry] = useState([
        {
            title : "Sci-tech club weekly magazine",
            author: "Aditya, Indian Institute of technology Bhilai",
            time : "5 min read",
            link :"#",
            source : "",
        },
        {
            title : "Sci-tech club weekly magazine",
            author: "Aditya, Indian Institute of technology Bhilai",
            time : "5 min read",
            link :"#",
            source : "",

        },
        {
            title : "Sci-tech club weekly magazine",
            author: "Aditya, Indian Institute of technology Bhilai",
            time : "5 min read",
            link :"#",
            source : "",

        },
        {
            title : "Sci-tech club weekly magazine",
            author: "Aditya, Indian Institute of technology Bhilai",
            time : "5 min read",
            link :"#",
            source : "",

        },
        {
            title : "Sci-tech club weekly magazine",
            author: "Aditya, Indian Institute of technology Bhilai",
            time : "5 min read",
            link :"#",
            source : "",

        },
        {
            title : "Sci-tech club weekly magazine",
            author: "Aditya, Indian Institute of technology Bhilai",
            time : "5 min read",
            link :"#",
            source : "",

        },
    ]);



    // Taking the array index
    const {value} = useParams();
    console.log(value);

    const data = blogEntry[value];
    console.log(data);

    return (
        <div className="flex bg-black">
            <SideBar name="Blogs"/>
            {/* Remaining addition of the blog elements */}
            <div className="w-[70%] ml-[30%] p-2">
               <BlogHeader clubname="Block Chain Club"/>
               <section className="py-2 text-white">
                <div className="flex flex-col justify-center space-x-4">
                    {/* Printing the Data */}
                    <div className="flex flex-col justify-center items-center mt-[2%]">
                        {/* Give the Image access to this also */}
                        <img className="w-full" src="/blog.png" alt="Blog" />
                        <div className="px-6 py-4 flex flex-col gap-3">
                            <div className="text-blue-500  font-bold text-3xl mb-2">{data.title}</div>
                            <p className="text-gray-700 dark:text-gray-300 text-base">{data.author}</p>

                            <div className="flex space-x-2 items-center">
                                <svg width="15" height="15" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0859 1.17161C12.8893 0.737754 11.7362 0.544264 10.724 0.527077C9.14323 0.551556 8.04948 0.981504 7.5 1.24895C6.95052 0.981504 5.83073 0.551035 4.29167 0.526556C3.25 0.525254 2.09375 0.744004 0.914062 1.17161C0.369271 1.36848 0 1.8914 0 2.47187V10.3599C0 10.7417 0.179036 11.0906 0.491927 11.3182C0.799479 11.5404 1.18568 11.6042 1.5526 11.4948C4.64896 10.5485 7.00313 11.9909 7.13333 12.0727C7.23438 12.1307 7.32292 12.1932 7.47656 12.1932C7.64635 12.1932 7.7401 12.1314 7.84297 12.074C8.1237 11.8998 10.4029 10.5724 13.4237 11.4941C13.7911 11.6047 14.1753 11.5396 14.4849 11.3167C14.8203 11.0891 15 10.7401 15 10.3599V2.47187C15 1.89166 14.6302 1.369 14.0859 1.17161ZM7.08333 11.1021C6.43359 10.7888 5.23411 10.3372 3.6849 10.3372C2.96016 10.3372 2.16146 10.4365 1.31016 10.6958C1.19542 10.7308 1.07578 10.7113 0.979687 10.6425C0.885937 10.5734 0.833333 10.451 0.833333 10.3599V2.47187C0.833333 2.24117 0.978177 2.03359 1.19427 1.95546C2.28281 1.56041 3.33073 1.35859 4.28385 1.35989C5.63281 1.38098 6.61979 1.75729 7.08333 1.97604V11.1021ZM14.1667 10.3599C14.1667 10.4738 14.1142 10.5743 14.021 10.6422C13.9229 10.7126 13.8049 10.7313 13.6905 10.6975C11.0443 9.89114 8.88802 10.6411 7.91667 11.1073V1.97604C8.38021 1.75729 9.36719 1.38098 10.7135 1.35989C11.6331 1.35825 12.7016 1.55479 13.8073 1.95572C14.0208 2.03385 14.1667 2.24114 14.1667 2.47187V10.3599Z" fill="#94A3B8" />
                                </svg>

                                <p className="text-gray-700 dark:text-gray-300 text-base">{data.time}</p>
                            </div>
                        </div>
                    </div>



                    {/* After collecting the data , we can maintain our database , from that we can fetch and display dynamically */}
                    <div>
                        <h1 className="font-semibold text-xl mt-2"> Exploring The Boundaries Of Spaces :</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis. Pharetra massa massa ultricies mi quis hendrerit. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Est ultricies integer quis auctor. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Sit amet risus nullam eget felis. Amet mauris commodo quis imperdiet massa tincidunt. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Odio ut sem nulla pharetra diam sit amet. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Nunc sed augue lacus viverra vitae. Non odio euismod lacinia at quis risus sed vulputate. Morbi tincidunt augue interdum velit euismod.
                        </p>
                    </div>


                </div>
            </section>
            </div>
        </div>
    )
}
export default IndividualCard;