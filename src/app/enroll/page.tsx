import React from "react";

export function EnrollmentForm() {
  return (
    <section className="w-[80%] mx-auto">
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-bold text-3xl text-gray-600 text-center mt-24">Enroll Form</h2>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 mt-5">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                    <div className="md:col-span-3">
                      <label>FULL NAME (EN)</label>
                      <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Lymann Phy" required />
                    </div>

                    <div className="md:col-span-3">
                      <label>EMAIL</label>
                      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="lymannphy9@gmail.com" required />
                    </div>
                    <div className="md:col-span-3">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <div className="md:col-span-3">
                      <label>PHONE NUMBER</label>
                      <input type="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="+855 315-958-866" required />
                    </div>
                    <div className="md:col-span-3">
                      <label>DATE OF BIRTH</label>
                      <input type="date" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>

                    <div className="md:col-span-3">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UNIVERSITY</label>
                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select University</option>
                        <option value="Male">RUPP</option>
                        <option value="Female">NORTON</option>
                      </select>
                    </div>

                    <div className="md:col-span-3">
                      <label>PLACE OF BIRTH</label>
                      <select id="place_of_birth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select place of birth</option>
                        <option value="Male">Battambang</option>
                        <option value="Female">Phnom Penh</option>
                      </select>
                    </div>

                    <div className="md:col-span-3">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">EDUCATION</label>
                      <select id="education" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select Education</option>
                        <option value="Male">Bachelor Degree</option>
                        <option value="Female">Association</option>
                      </select>
                    </div>

                    <div className="md:col-span-3">
                      <label>COURSES</label>
                      <select id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select course</option>
                        <option>Spring Boot</option>
                        <option>BlockChain</option>
                        <option>DevOps</option>
                        <option>Data Analytics</option>
                      </select>
                    </div>
                    

                    <div className="md:col-span-6">
                      <div className="inline-flex items-center">
                        <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                        <label className="ml-2 text-red-600">Please filter available courses to select the class...!</label>
                      </div>
                    </div>
                    <div className="md:col-span-6 text-right">
                      <div className="inline-flex items-end">
                        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
                        <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Enroll Now</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnrollmentForm;