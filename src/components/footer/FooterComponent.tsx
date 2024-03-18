
'use client';

import { Footer } from 'flowbite-react';
import { color } from 'framer-motion';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export function FooterComponent() {
  return (
    <Footer container className="bg-blue-700">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://istad.co/enroll"
              src="https://istad.co/resources/img/CSTAD_120.png"
              alt="CSTAD Logo"
              name="CSTAD"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-white" title="Learn More" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white" href="#">Course</Footer.Link>
                <Footer.Link className="text-white" href="#">IT News</Footer.Link>
                <Footer.Link className="text-white" href="#">Job Opportunity</Footer.Link>
                <Footer.Link className="text-white" href="#">Privacy Policy</Footer.Link>
                <Footer.Link className="text-white" href="#">FAQ</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white" title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white" href="#">Github</Footer.Link>
                <Footer.Link className="text-white" href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white" title="Contact Us" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white" href="#">(+855) 95-990-910</Footer.Link>
                <Footer.Link className="text-white" href="#">(+855) 93-990-910</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className="text-white" href="#" by="Center of Science and Technology Advanced Development | All Rights Reserved" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
            <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
            <Footer.Icon className="text-white" href="#" icon={BsTwitter} />
            <Footer.Icon className="text-white" href="#" icon={BsGithub} />
            <Footer.Icon className="text-white" href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
