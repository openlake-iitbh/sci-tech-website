import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="p-8 flex justify-between">
            <div className="flex items-center space-x-2">
            <Link to="/" ><img className="h-20 w-20" src="Sci-Tech-Council.png" alt="logo" /></Link>
                <Link to="/" ><h1 className="font-bold font-[poppins] text-white">SCITECH COUNCIL</h1></Link>
            </div>
            <div className="flex justify-evenly">
                <ul className="flex justify-evenly list-none space-x-4 text-white">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/#blogs">Blogs</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/#clubs" className="bg-blue-500 rounded hover:bg-blue-700 text-white py-1 px-2">Clubs</Link></li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar;