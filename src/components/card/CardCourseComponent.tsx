import React from 'react'

export const CardCourseComponent = () => {
    return (
        <>
            <h1 className="font-semibold text-2xl w-[77%] mx-auto">COURSE</h1>
            <div className="min-h-screen from-red-300 to-yellow-200 flex justify-center items-center py-10">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <h3 className="mb-3 font-bold text-indigo-600">Beginner Friendly</h3>
                        <div className="relative">
                            <img className="w-full rounded-xl" src="https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png" alt="Colors" />
                            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
                        </div>
                        <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">Javascript Bootcamp for Absolute Beginners</h1>
                        <div className="my-4">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <p>50:34:23 Minutes</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <p>3 Parts</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                <p>Vanilla JS</p>
                            </div>
                            <button className="mt-4 w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View Details</button>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <h3 className="mb-3 font-bold text-indigo-600">Intermediate</h3>
                        <div className="relative">
                            <img className="w-full rounded-xl" src="https://api.istad.co/media/image/24c392c2-152b-49c0-bddb-dc12b9403b3e.png" alt="Colors" />
                            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$12</p>
                            <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">%20 Discount</p>
                        </div>
                        <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">Write a Gatsby plugin using Typescript</h1>
                        <div className="my-4">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <p>1:34:23 Minutes</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <p>3 Parts</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                <p>TypeScript</p>
                            </div>
                            <button className="mt-4 w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View Details</button>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <h3 className="mb-3 font-bold text-indigo-600">Beginner Friendly</h3>
                        <div className="relative">
                            <img className="w-full rounded-xl" src="https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png" alt="Colors" />
                            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$50</p>
                        </div>
                        <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">Advanced React Native for Sustainability</h1>
                        <div className="my-4">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <p>1:34:23 Minutes</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <p>3 Parts</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                <p>Vanilla JS</p>
                            </div>
                            <button className="mt-4 w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View Details</button>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <h3 className="mb-3 font-bold text-indigo-600">Beginner Friendly</h3>
                        <div className="relative">
                            <img className="w-full rounded-xl" src="https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png" alt="Colors" />
                            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
                        </div>
                        <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">Javascript Bootcamp for Absolute Beginners</h1>
                        <div className="my-4">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <p>1:34:23 Minutes</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <p>3 Parts</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                <p>Vanilla JS</p>
                            </div>
                            <button className="mt-4 w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View Details</button>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <h3 className="mb-3 font-bold text-indigo-600">Intermediate</h3>
                        <div className="relative">
                            <img className="w-full rounded-xl" src="https://api.istad.co/media/image/a3c4f87e-7a85-44c3-a568-6c5abef76cfe.png" alt="Colors" />
                            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$12</p>
                            <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">%20 Discount</p>
                        </div>
                        <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">Write a Gatsby plugin using Typescript</h1>
                        <div className="my-4">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <p>1:34:23 Minutes</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <p>3 Parts</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                <p>TypeScript</p>
                            </div>
                            <button className="mt-4 w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View Details</button>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <h3 className="mb-3 font-bold text-indigo-600">Intermediate</h3>
                        <div className="relative">
                            <img className="w-full rounded-xl" src="https://api.istad.co/media/image/73c3424a-39e0-450c-8969-8b35559594f5.png" alt="Colors" />
                            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$12</p>
                            <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">%20 Discount</p>
                        </div>
                        <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">Write a Gatsby plugin using Typescript</h1>
                        <div className="my-4">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <p>1:34:23 Minutes</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <p>3 Parts</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                <p>TypeScript</p>
                            </div>
                            <button className="mt-4 w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
