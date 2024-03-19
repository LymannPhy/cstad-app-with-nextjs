'use client';

import { Navbar } from 'flowbite-react';
import Image from 'next/image';

export const NavbarComponent = () => {
  return (
    <Navbar rounded className="bg-blue-900 z-20 fixed w-screen justify-center px-[2rem]">
      <Navbar.Brand>
        <img src="/asset/CSTAD_120.png" className="mr-3 h-6 sm:h-9" alt="CSTAD Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">CSTAD</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-white" href="/">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" href="/enroll">
          Enroll
        </Navbar.Link>
        <Navbar.Link className="text-white" href="/course-page">Course</Navbar.Link>
        <Navbar.Link className="text-white" href="/news">IT News</Navbar.Link>
        <Navbar.Link className="text-white" href="/job">Job Opportunity</Navbar.Link>
        <Navbar.Link className="text-white" href="/about-us">About Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
