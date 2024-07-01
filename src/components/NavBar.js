function NavBar() {
    return (
        <nav className="p-8 flex justify-between">
            <div className="flex items-center space-x-2">
                <img className="h-16 w-16" src="iit-bh-logo.png" alt="logo" />
                <h1 className="font-bold font-[poppins] text-white">SCITECH COUNCIL</h1>
            </div>
            <div className="flex justify-evenly">
                <ul className="flex justify-evenly list-none space-x-4 text-gray-500">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/events">Events</a></li>
                    <li><a href="/clubs" className="bg-blue-500 rounded hover:bg-blue-700 text-white py-1 px-2">Clubs</a></li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar;