import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold">Methu Islam</h2>
            <p className="text-gray-400 mt-2">MERN Stack Developer</p>
            <p className="mt-2">📧 Email: engmethu@gmail.com</p>
            <p>📞 Phone: +880 1761654478</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="text-gray-400 mt-2">
              Passionate MERN Stack Developer, focusing on building high-quality web applications with modern technologies.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold">Follow Me</h3>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition text-2xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500 transition text-2xl">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Thank You */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300">Thank You for Visiting! 😊</p>
          <div className="text-3xl font-bold text-blue-500 animate-pulse mt-2">
            THANK YOU!
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
