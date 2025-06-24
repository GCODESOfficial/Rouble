/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'WHY FLARE', href: '#whyflare' },
  { name: 'FEATURE', href: '#feature' },
  { name: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);


  const toggleMenu = () => setIsOpen(!isOpen);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<nav className={`navbar-container  w-full px-3 md:px-5 py-4 transition-all duration-500 ${
scrolled
  ? 'bg-[#050316] translate-y-0 shadow-md backdrop-blur-md'
  : 'bg-transparent -translate-y-2 md:fixed top-4 md:top-5 left-0 '
}`}>     <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="cursor-pointer">
  <img
    src="/images/logo.svg"
    alt="Flare Logo"
    className="md:w-16 md:h-16 h-10 w-10"
  />
</a>


        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-16  font-bold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-[#E32058] ${
                  pathname === link.href ? 'text-[#E32058]' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/connect">
  <button className="hidden md:block hover:bg-black hover:text-white cursor-pointer bg-white text-[#050316] font-semibold px-8 py-4 rounded-full">
    Connect Wallet
  </button>
</Link>


        {/* Mobile Menu Icon */}
        <div className="md:hidden bg-[#E32058] rounded-full h-10 w-10 flex justify-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

{isOpen && (
  <div className="mobile-menu-overlay bg-black/60 md:hidden" onClick={toggleMenu}>
      <div className="mobile-menu-content bg-[#050316]" onClick={(e) => e.stopPropagation()}>
      {/* Cancel icon */}
      <div className="flex justify-end p-8 px-4">
        <button onClick={toggleMenu} className="text-white text-3xl">
          <FiX />
        </button>
      </div>

      {/* Menu content */}
      <div className="flex flex-col justify-between space-y-10 p-6  ">
        <ul className="space-y-6 font-bold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-[#E32058] ${
                  pathname === link.href ? 'text-[#E32058]' : ''
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/connect">
          <button className="bg-[#E32058] text-white font-semibold px-6 py-2 rounded-full">
            Connect Wallet
          </button>
        </Link>
      </div>
    </div>
  </div>
)}


    </nav>
  );
};

export default Navbar;
