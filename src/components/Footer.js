import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap justify-center mb-4 space-x-4 md:space-x-10">
          <a href="https://www.facebook.com" className="mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" className="mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" className="mx-2">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.telegram.com" className="mx-2">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="https://www.instagram.com" className="mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.github.com" className="mx-2">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-24 mb-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/blogs" className="hover:underline">Blogs</a>
          <a href="/gallery" className="hover:underline">Gallery</a>
          <a href="/events" className="hover:underline">Events</a>
          <a href="/clubs" className="hover:underline">Clubs</a>
        </nav>
        <div>
          <button className="bg-white font-[roboto] text-gray-900 px-4 py-2 rounded-full hover:bg-gray-200">
            Contact Us
          </button>
        </div>
        <div className="mt-4">
          <hr className="border-gray-700" />
          <p className="mt-4">© 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
