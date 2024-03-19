"use client"
import { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { CardCourseComponent } from "../components/card/CardCourseComponent";
import Slider from "@/components/slider/Slider";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      delay: 700,
      easing: "ease-in-out-back",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
      loop: true
    });
  }, []);

  return (
    <>
      <div className="h-[700px] z-10 relative flex mb-10">
        <Carousel slideInterval={1000}>
          <div
            className=" bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-start justify-center text-white text-center p-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://www.sellx.co/wp-content/uploads/2018/05/sellX.jpg')",
            }}
          >
            <div className="w-[80%] mx-auto flex flex-col justify-center items-start">
              <h1 className="mb-5 text-left text-2xl md:text-5xl font-bold  ">
                Center of Science and Technology Advanced Development
              </h1>
              <p className="mb-5 max-w-md text-left">
                CSTAD is a noteworthy science and technology center in Cambodia.
                CSTAD has routed Cambodian students to advanced science and
                technology, research, and develop digital skills and our
                graduates have been guaranteed excellent job opportunities with
                the Top IT company. Enroll Now
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enroll Now
              </a>
            </div>
          </div>

          <div
            className=" bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-start justify-center text-white text-center p-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://www.openxcell.com/wp-content/uploads/2021/09/Programming-Software-1024x523.jpg')",
            }}
          >
            <div className="w-[80%] mx-auto flex flex-col justify-center items-start">
              <h1 className="mb-5 text-left text-2xl md:text-5xl font-bold  ">
                Vision
              </h1>
              <p className="mb-5 max-w-md text-left">
                Advanced IT Center in Cambodia
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enroll Now
              </a>
            </div>
          </div>

          <div
            className=" bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-start justify-center text-white text-center p-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://wallpapercave.com/wp/wp8778419.png')",
            }}
          >
            <div className="w-[80%] mx-auto flex flex-col justify-center items-start">
              <h1 className="mb-5 text-left text-2xl md:text-5xl font-bold  ">
                Mission
              </h1>
              <p className="mb-5 max-w-md text-left">

                Provide the latest methodology with high-quality training and mentoring

                Build up the capacity and career of IT experts Cambodia

                Consult and connect CSTAD trainees to top IT careers


              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enroll Now
              </a>
            </div>
          </div>

        </Carousel>
      </div>

      <CardCourseComponent />
      <Slider />
    </>
  );
}