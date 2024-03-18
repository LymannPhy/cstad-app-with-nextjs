'use client';

import { Navbar } from 'flowbite-react';

export const NavbarComponent = () => {
  return (
    <Navbar fluid rounded className="bg-blue-700 z-20 fixed w-screen justify-center">
      <Navbar.Brand>
        <img src="https://istad.co/resources/img/CSTAD_120.png" className="mr-3 h-6 sm:h-9" alt="CSTAD Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">CSTAD</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-white" href="/">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Enroll
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">Course</Navbar.Link>
        <Navbar.Link className="text-white" href="#">IT News</Navbar.Link>
        <Navbar.Link className="text-white" href="#">Job Opportunity</Navbar.Link>
        <Navbar.Link className="text-white" href="#">About Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
