"use client"
import React from "react";
import Image from "next/image";

import { FaTag } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Data from "../../assets/data/courses.json";
// Swiper Slide
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { sliderSitting } from "../../assets/sliderSitting";

const Slider = () => {
    return (
        <div className="container w-[77%] mx-auto px-[2rem]">
            <div className="mt-[3rem]">
                <h1 className="text-2xl font-extrabold font-Regular mb-20">
                    USEFUL CONTENTS
                </h1>
                <div data-aos="fade-up" data-aos-duration="2000">
                    <Swiper
                        {...sliderSitting}
                        loop={true}
                        slidesPerView={3}
                        pagination={true}
                        modules={[Autoplay]}
                        autoplay={{ delay: 2000 }}
                    >
                        <SliderButtons />
                        {
                            <div className="flex items-center justify-center">
                                {Data.map((e, id) => (
                                    <SwiperSlide key={id}>
                                        <div className="flex items-center justify-center rounded-2xl bg-white">
                                            <div className="font-Regular">
                                                <div>
                                                    <Image
                                                        src={e.image}
                                                        alt={e.title}
                                                        width={e.width}
                                                        height={e.height}
                                                        className="overflow-hidden rounded-2xl"
                                                    />
                                                </div>
                                                <div className="grid gap-3 px-5 py-5">
                                                    <div className="flex items-center justify-between text-[13px]">
                                                        <p className="flex gap-1 place-items-center">
                                                            <FaTag className="text-slate-500 text-[12px]" />
                                                            {e.blog}
                                                        </p>
                                                        <p>{e.date}</p>
                                                    </div>
                                                    <p className="line-clamp-1">{e.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </div>
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <section className="flex items-center justify-center gap-5 mt-4 mb-6">
            <div
                className="bg-slate-100 px-2 py-2 text-2xl font-bold w-max flex place-items-center rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-slate-900 hover:text-slate-50"
                onClick={() => swiper.slidePrev()}
            >
                <IoIosArrowBack />
            </div>
            <div
                className=" bg-slate-100 px-2 py-2 text-2xl font-bold w-max flex place-items-center rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-slate-900 hover:text-slate-50"
                onClick={() => swiper.slideNext()}
            >
                <IoIosArrowForward />
            </div>
        </section>
    );
};
