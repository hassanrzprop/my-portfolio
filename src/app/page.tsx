import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import { MdWavingHand } from "react-icons/md";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home" className=" text-black h-screen bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="  grid items-center justify-center  ">
            <div className="mb-40 ml-20 mr-10 sm:py-[110px] md:h-screen md:items-center md:justify-center">
              <div className="text-[20px] text-blue-500 flex ">
                Hey There
                <span className="text-yellow-600">
                  <MdWavingHand />
                </span>{" "}
                I am
              </div>
              <div className="font-semibold text-[40px]">Hassan Raza</div>
              <div className="text-[30px]">
                {" "}
                Professional Fullstack developer
              </div>
              <div className="h-[100px] text-[20px]">
                I've strong hands on the website devoplment using next.js 14
                with typescript.I'm qualified to develop optimized and high
                performance web app.
              </div>
              <div className="p-5">
                <Link href="#about">
                <button className="mb-3 text-white font-semibold box decoration-clone bg-gradient-to-r from-cyan-600 to-black rounded-full text-[23px] p-2 ml-10 transform transition-transform hover:scale-105 shadow-md">
  About me
</button>

                </Link>
                <Link href="#contact">
                <button className="mb-3 text-white font-semibold box decoration-clone bg-gradient-to-r from-cyan-600 to-black rounded-full text-[23px] p-2 ml-10 transform transition-transform hover:scale-105 shadow-md">
  Contact me
</button>

                </Link>
              </div>
            </div>
          </div>

          <div className=" md:h-screen flex justify-center md:py-[40px]">
            <div className="md:mt-[150px] font-bold md:flex ">
              <div className="text-blue-700">D</div>
              <div className="text-red-700">E</div>
              <div className="text-green-700">S</div>
              <div className="text-indigo-600">I</div>
              <div className="text-yellow-700">G</div>
              <div className="text-gray-800">N</div>
              <div className="text-purple-600">E</div>
              <div className="text-cyan-600">R</div>
            </div>
            <div>
              <Image
                className="flex justify-center  md:py-[100px]"
                src="/img/pic.png"
                alt="Profile pic"
                width={300}
                height={150}
              />
            </div>
            <div className="md:mt-[150px] font-bold md:flex justify-center">
              <div className="mt-1"><FaLessThan/></div>
              <div>C</div>
              <div>O</div>
              <div>D</div>
              <div>E</div>
              <div>R</div>
              <div className="mt-1"><FaGreaterThan/></div>
              
            </div>
          </div>
        </div>
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
