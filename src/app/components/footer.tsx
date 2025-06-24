/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer id='contact' className="bg-[#050316] text-white py-10 px-4 md:px-4 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
        {/* Left: Logo and Description */}
        <div className="flex flex-col ">
          <img src="/images/logo.svg" alt="Flare Logo" className="w-10 h-10 mb-4" />
          <p className="text-gray-300 mt-5">
            Flare is the decentralized finance network and liquidity hub built on the EVM Network.
          </p>
          <div className="flex space-x-4 mt-14">
            <a href="https://x.com/FlareNetworks" className="bg-[#FFFFFF14] p-3 rounded-full hover:bg-[#E32058] transition">
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/flare_networks/#" className="bg-[#FFFFFF14] p-3 rounded-full hover:bg-[#E32058] transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/flarenetwork/" className="bg-[#FFFFFF14] p-3 rounded-full hover:bg-[#E32058] transition">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Center: Contact Info */}
        <div className="md:border-l md:border-r py-4 border-gray-700 px-6 text-center md:text-left hidden md:block">
          <h3 className="text-xl text-center font-bold mb-2">CONTACT US</h3>
          <p className="text-white text-sm font-semibold mt-12 text-center">
            Copyright © {new Date().getFullYear()} Flare. All rights reserved.
          </p>
        </div>

        {/* Right: Email Signup */}
        <div>
          <h3 className="text-xl font-bold mb-2">SIGN UP FOR EMAIL UPDATES</h3>
          <p className="text-gray-400 mb-8">
            Sign up with your email address to receive news and updates
          </p>
          <form className="flex bg-white rounded-full md:py-4 py-2 pr-2">
          <input
  type="email"
  placeholder="Your Email Address"
  className="rounded-l-full  md:px-10 px-4 py-2 text-black w-full focus:outline-none focus:ring-0"
/>

            <button
              type="submit"
              className="bg-gradient-to-r  from-[#E32058] to-purple-500 text-white px-6 py-3 rounded-full font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="md:border-l md:border-r pt-10 py-4 border-gray-700 px-4  md:hidden">
          <h3 className="text-xl  font-bold mb-2">CONTACT US</h3>
          <p className="text-white text-sm font-semibold mt-12 ">
            Copyright © {new Date().getFullYear()} Flare. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
