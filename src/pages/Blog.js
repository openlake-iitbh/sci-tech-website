import { useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogHeader from "../components/HeaderBlog";
import SideBar from "../components/SideBar";

function Blog(){
    //  Pointing the entry with the help of indexing
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

    return (
        <div className="flex bg-black">
            <SideBar name="Blogs"/>
            {/* Remaining addition of the blog elements */}
            <div className="w-[70%] ml-[30%] p-2">
               <BlogHeader clubname="Block Chain Club"/>
               <section id="blogs" className="py-2 text-white">
                <div className="flex flex-wrap justify-center space-x-4">

                    {/* This will help me for printing the individual details , as I will access them with the help of array (index) */}

                    (
                        {
                            blogEntry.map((blog , index) => {
                                return (<BlogCard key={index} title={blog.title} author={blog.author} time={blog.time} link={blog.link} value={index} />)
                            })
                        }
                    )

                </div>
                <div className="text-center mt-8">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Learn More
                    </button>
                </div>
            </section>
            </div>
        </div>
    )
}

export default Blog;