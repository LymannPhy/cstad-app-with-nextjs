import { Carousel } from "flowbite-react";
import { CardCourseComponent } from "./CardCourseComponent";

export default function Home() {
  return (
    <>
      <div className="h-[700px] z-10 relative flex ">
        <Carousel slideInterval={1000}>
          <div
            className=" bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-start justify-center text-white text-center p-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://th.bing.com/th/id/R.0e2a712b84bfbd099664094e46cd5f28?rik=owB7%2bRyBOUOkpQ&riu=http%3a%2f%2fnewadvancedtechnologies.com%2fwp-content%2fuploads%2f2017%2f03%2fshutterstock_527035084_Medium-1000x472.jpg&ehk=NbEH5FG5b8D4roSoB5%2bHzWD7MuoSkPhsbUsZqf3igK4%3d&risl=&pid=ImgRaw&r=0')",
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
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://th.bing.com/th/id/R.4c15e575e7460014113441779bdfe127?rik=eG%2bHocxJdTRGjg&riu=http%3a%2f%2fphilmangroup.com%2fwp-content%2fuploads%2f2018%2f05%2fbanner-engineering-design-services.jpg&ehk=ksLKmvbkyDvKPue6Z3GO2tqglLbTkfLrjjVr2AZj0VI%3d&risl=&pid=ImgRaw&r=0')",
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
    </>
  );
}