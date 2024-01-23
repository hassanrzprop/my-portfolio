import Image from "next/image";
import Navbar from "./components/navbar";
import { MdWavingHand } from "react-icons/md";
export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home" className=" text-black h-screen bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="  grid items-center justify-center sm:py-[50px] ">
            <div className="mb-40 ml-20 mr-10 sm:py-[110px] md:h-screen md:items-center md:justify-center">
              <div className="text-[20px] text-blue-500 flex ">
                Hey There
                <span className="text-yellow-600">
                  <MdWavingHand />
                </span>{" "}
                I am
              </div>
              <div className="font-semibold text-[50px]">Hassan Raza</div>
              <div className="text-[20px]">
                {" "}
                Professional Fullstack developer
              </div>
              <div className="">
                  I've strong hands on the website devoplment using next.js 14
                using typescript.I'm qualified to develop optimized and high
                performance web app.
              </div>
              <div className="p-5">
              <button className='mb-3 text-white font-semibold  box decoration-clone  bg-gradient-to-r from-cyan-600 to-black rounded-full text-[23px] p-2 ml-10'>About me</button>
              <button className='mb-3  text-white font-semibold  box decoration-clone  bg-gradient-to-r from-cyan-600 to-black rounded-full text-[23px] p-2 ml-10'>Contact me</button>
              </div>
            </div>
          </div>

          <div className=" md:h-screen md:flex justify-center md:py-[40px]">
            <div>
              <Image
                className="flex justify-center ml-11 md:py-[100px] "
                src="/img/pic.png"
                alt="Profile pic"
                width={300}
                height={150}
              />
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-2">
          <div>
            <div className="text-xl flex px-[200px] ">Hey There<span className="text-yellow-600"><MdWavingHand /></span> I am</div>
            <div className="px-[200px]">Hassan Raza</div>
            <div className="px-[200px]"> Professional Fullstack developer</div>
          </div>
          <div>
            <Image className="m-auto  py-[20px] " src="/img/pic.png" alt="Profile pic"  width={200} height={150}/>
          </div>
        </div> */}
      </section>
      <section
        id="about"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  ">
          About
        </h1>
      </section>
      <section id="blog" className=" text-white h-screen bg-purple-900 flex">
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Blog
        </h1>
      </section>
      <section
        id="contact"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact{" "}
        </h1>
      </section>
      <section
        id="projects"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Projects
        </h1>
      </section>
    </div>
  );
}
