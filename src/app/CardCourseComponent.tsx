export const CardCourseComponent = () => {
    return (
      <>
          <h1 className="w-10/12 mx-auto text-3xl mb-5 mt-10 font-bold">COURSES</h1>
          <div className="w-10/12 mx-auto grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-3 lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-8">
              <FlutterCard/>
              <DevOpsCard/>
              <SQLCard/>
              <WebDesignCard/>
              <IOSCard/>
              <CProgrammingCard/>
              <DockerCard/>
              <DataAnalyticsCard/>
              <NextJSCard/>
              <JavaCard/>
              <BlockChainCard/>
              <SpringCard/>
              <LinuxCard/>
              <AndriodCard/>
          </div>
      </>
    )
  }
  export function FlutterCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function SQLCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function DevOpsCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function WebDesignCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function IOSCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function CProgrammingCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/73c3424a-39e0-450c-8969-8b35559594f5.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function DockerCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function DataAnalyticsCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/a3c4f87e-7a85-44c3-a568-6c5abef76cfe.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function NextJSCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/dea9d967-e99e-49f3-a999-5b710dd5daf3.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function JavaCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/b0b3f26d-4d21-45c6-9ed4-8e1f9f11e534.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function BlockChainCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/24c392c2-152b-49c0-bddb-dc12b9403b3e.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function LinuxCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/b9bf96d7-c352-4533-8025-f017517ba648.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function SpringCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/c8c41751-3bc0-4f07-9658-7d95efbae692.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  export function AndriodCard() {
      return (
          <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
              <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                  <img src="https://api.istad.co/media/image/0d254e62-5896-4c61-b1aa-c7de02d8d40d.png" alt="" className="object-contain max-w-full max-h-full" />
              </div>
              <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                  <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                  <div className="w-full h-auto m-1">
                      <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                  </div>
                  <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
              </div>
              <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                  
                  <h1 className="md:py-4 ">80 hours</h1>
                  <h1>Medium</h1>
              </div>
          </div>
      );
  }
  