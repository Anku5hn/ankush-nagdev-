import React,{useState, useEffect} from "react";
import { GithubOutlined, LinkedinFilled, XOutlined } from "@ant-design/icons";
import StoreOne from "../assets/project-images/StoreOne.png";
import WorldLink from "../assets/project-images/WorldLink.png";
import ToDo from "../assets/project-images/ToDo.png";
import VueTopics from "../assets/project-images/VueTopics.png";
import GentleSense from "../assets/project-images/GentleSense.png";
import SpentIt from "../assets/project-images/SpentIt.png";
import MoveIt from "../assets/project-images/MoveIt.png";
import Tindog from "../assets/project-images/Tindog.png";
const Home = () => {
  const [about, setAbout] = useState(true);
  const [childOne, setChildOne]= useState(false);
  const [childTwo, setChildTwo] = useState(false);

  const handleScrollBtn = (val) =>{
    const parentContainer = document.getElementById('parentContainer');
    parentContainer.scrollTop = val;
  }

  useEffect(()=>{
const parentDiv = document.getElementById('parentContainer');
const handleScroll = () =>{
  if(parentDiv.scrollTop >= 0 && parentDiv.scrollTop < 360){
    setAbout(true);
    setChildOne(false);
    setChildTwo(false);
  }else if(parentDiv.scrollTop >= 360 && parentDiv.scrollTop < 900){
    setAbout(false);
    setChildOne(true);
    setChildTwo(false);
  }else if(parentDiv.scrollTop >= 900){
    setAbout(false);
    setChildOne(false);
    setChildTwo(true);
  }

}
parentDiv.addEventListener('scroll',()=>{

handleScroll();
})
  },[])
  return (
    <>
      <div className="px-6 py-12 md:hidden lg:hidden block font-serif">
        <div>
          {/*Heading Section*/}
          <h1 className="text-4xl tracking-tight font-bold">Ankush Nagdev</h1>
          <p className="text-xl tracking-tight font-medium">Web Developer</p>
          <p className="text-gray-500">
            I design and develop innovating web experiences that work!
          </p>
          <div className="w-[50%] flex gap-5 text-2xl mt-2 ">
            <a href="https://github.com/Anku5hn" target="_blank">
              <span className="text-gray-500">
                {" "}
                <GithubOutlined />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/ankush-nagdev-009b2113a/"
              target="_blank"
            >
              <span className="text-gray-500">
                <LinkedinFilled />
              </span>
            </a>
            <a href="https://x.com/ankushxcode" target="_blank">
              <span className="text-gray-500">
                <XOutlined />
              </span>
            </a>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-bold">ABOUT</h2>
          <p className="text-gray-500 mt-2">
            I'm a web developer passionate about crafting engaging and
            innovative web experiences for users. I transform creative designs
            into functional and responsive websites and applications. My
            expertise lies in JavaScript and React, and I'm always eager to
            explore new frameworks to stay ahead of web development trends;
            currently, I'm learning Vue. I believe a well-crafted front-end is
            crucial for UX and making a business successful.
          </p>
          <p className="text-gray-500 mt-5">
            With over 1 year of experience in frontend development, I have had
            the opportunity to work on a diverse range of projects, from
            eCommerce to interactive web applications. I specialize in creating
            responsive designs that work flawlessly on various screen sizes. My
            focus is on creating web experiences that are not only visually
            appealing and creative, but also achieve business objectives. I'm
            proficient in HTML5, CSS3, Tailwind, JavaScript, and React.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-bold">EXPERIENCE</h2>
          <p className="text-gray-500 mt-2">2023 - 2024</p>
          <a href="https://sivanandaelectronics.com/" target="_blank">
            <span className="text-black">
              Sivananda Electronics
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p className="text-gray-500 text-lg">Junior Frontend Developer</p>
          <p className="text-gray-500">
            Crafted, styled, and shipped high-quality websites, collaborating
            with backend developers to integrate the frontend. Converted Figma
            designs to reusable React components.
          </p>
          <p className="mt-3 text-xs">
            <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
              HTML
            </span>{" "}
            <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
              CSS
            </span>{" "}
            <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
              JavaScript
            </span>{" "}
            <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
              React
            </span>{" "}
            <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
              Tailwind
            </span>{" "}
          </p>
          <p className="text-gray-500 mt-5">2022 - 2023</p>
          <a href="https://igeeksclub.com/author/ankushnagdev/" target="_blank">
            <span className="text-black">
              iGeeksClub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p className="text-gray-500 text-lg">HTML Developer</p>
          <p className="text-gray-500">
            Created user facing features using HTML5 and CSS3. Wrote clean and
            efficient code resulting in shortening the review cycles by 10%.
            Increased traffic by 5–10% per week by optimizing web pages for SEO.
          </p>
          <p className="mt-3 text-xs">
            <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
              HTML
            </span>{" "}
            <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
              CSS
            </span>
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-bold">PROJECTS</h2>
          <p className="text-gray-500">Some of the things I've built!</p>
          <p className="mt-5 text-xl">React Projects</p>
          <a href="https://store-one-three-phi.vercel.app/" target="_blank">
            <p className="text-gray-500 mt-5">2025</p>
            <span className="text-black">
              StoreOne
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p className="text-gray-500">
            Dubizzle inspired eCommerce web app with{" "}
            <span className="text-black">light mode and dark mode </span>
            functionality. Topics Covered: Tailwind, React,{" "}
            <span className="text-black">Context API</span>, Responsive Design,
            and more.
          </p>
          <a href="https://store-one-three-phi.vercel.app/" target="_blank">
            <img
              src={StoreOne}
              alt="StoreOne"
              className="w-[200px] h-auto grayscale hover:filter-none"
            />
          </a>
          <a href="https://worldlink-ashy.vercel.app/" target="_blank">
            <p className="text-gray-500 mt-5">2025</p>
            <span className="text-black">
              WorldLink
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p className="text-gray-500">
            A logistics website with a lot of{" "}
            <span className="text-black">animations</span>. Topics Covered:
            Tailwind, React, <span className="text-black">CSS Animations</span>,
            custom cursor, and more.
          </p>
          <a href="" target="_blank">
            <img
              src={WorldLink}
              alt="WorldLink"
              className="w-[200px] h-auto grayscale hover:filter-none"
            />
          </a>
          <a href="https://to-do-eta-red.vercel.app/" target="_blank">
            <p className="text-gray-500 mt-5">2025</p>
            <span className="text-black">
              ToDo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p className="text-gray-500">
            A simple ToDo list app to learn{" "}
            <span className="text-black">State Management</span>. Topics
            Covered: Tailwind, React,{" "}
            <span className="text-black">Context API</span>, Responsive Design,
            and more.
          </p>
          <a href="https://to-do-eta-red.vercel.app/" target="_blank">
            <img
              src={ToDo}
              alt="ToDo"
              className="w-[200px] h-auto grayscale hover:filter-none"
            />
          </a>
          <p className="mt-5 text-xl">Vue Project</p>
          <a href="https://vue-topics.vercel.app/" target="_blank">
            <p className="text-gray-500 mt-5">2025</p>
            <span className="text-black">
              Vue Topics
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p className="text-gray-500">
            Project about all Vue topics made with{" "}
            <span className="text-black">Vue</span>. Topics Covered: Vue, Axios,
            <span className="text-black">Pinia</span>, Directives, and more.
          </p>
          <a href="https://vue-topics.vercel.app/" target="_blank">
            <img
              src={VueTopics}
              alt="Vue Topics"
              className="w-[200px] h-auto grayscale hover:filter-none"
            />
          </a>
          <p className="mt-5 text-xl">Full Stack Projects</p>
          {/*card starts here*/}
          <a href="https://gentlesense-9iz3.onrender.com/" target="_blank">
            <p className="text-gray-500 mt-5">2024</p>
            <span className="text-black">
              GentleSense
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p className="text-gray-500">
            An eCommerce store made with{" "}
            <span className="text-black">MERN Stack</span>. Topics Covered:
            MongoDB, ExpressJS,
            <span className="text-black">
              React, NodeJS, RESTful API, JWT,
            </span>{" "}
            and more.
          </p>
          <a href="https://gentlesense-9iz3.onrender.com/" target="_blank">
            <img
              src={GentleSense}
              alt="GentleSense"
              className="w-[200px] h-auto grayscale hover:filter-none"
            />
          </a>
          {/*card ends here */}
          {/*card starts here*/}
          <a href="https://spentit-j1er.onrender.com/" target="_blank">
            <p className="text-gray-500 mt-5">2024</p>
            <span className="text-black">
              SpentIt
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p className="text-gray-500">
            An expense management app made with{" "}
            <span className="text-black">MERN Stack</span>. Topics Covered:
            MongoDB, ExpressJS,
            <span className="text-black">
              React, NodeJS, RESTful API, JWT,
            </span>{" "}
            and more.
          </p>
          <a href="https://spentit-j1er.onrender.com/" target="_blank">
            <img
              src={SpentIt}
              alt="SpentIt"
              className="w-[200px] h-auto grayscale hover:filter-none"
            />
          </a>
          {/*card ends here */}
          <p className="mt-10 text-xl">HTML + Bootstrap Projects</p>
          <a href="https://anku5hn.github.io/moveit/" target="_blank">
            <p className="text-gray-500 mt-5">2024</p>
            <span className="text-black">
              MoveIt
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p className="text-gray-500">
            A moving services site made with{" "}
            <span className="text-black">HTML, Bootstrap</span>. Topics Covered:
            HTML, CSS,
            <span className="text-black">
              {" "}
              Bootstrap, Responsive Design,
            </span>{" "}
            and more. Made while doing The Complete Full Stack Web development
            Bootcamp on udemy.
          </p>
          <a href="https://anku5hn.github.io/moveit/" target="_blank">
            <img
              src={MoveIt}
              alt="MoveIt"
              className="w-[200px] h-auto grayscale hover:filter-none"
            />
          </a>
          {/*card ends here */}
          {/*card ends here */}
          <a href="https://anku5hn.github.io/tindog/" target="_blank">
            <p className="text-gray-500 mt-5">2024</p>
            <span className="text-black">
              Tindog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
          <p className="text-gray-500">
            Dating website for dogs made with{" "}
            <span className="text-black">HTML, Bootstrap</span>. Topics Covered:
            HTML, CSS,
            <span className="text-black">
              {" "}
              Bootstrap, Responsive Design,
            </span>{" "}
            and more. Made while doing The Complete Full Stack Web development
            Bootcamp on udemy.
          </p>
          <a href="https://anku5hn.github.io/tindog/" target="_blank">
            <img
              src={Tindog}
              alt="Tindog"
              className="w-[200px] h-auto grayscale hover:filter-none"
            />
          </a>
          {/*card ends here */}
        </div>
        <div>
          <a
            href="https://docs.google.com/document/d/1hnkQ8ivl4wL76XwtlkqIACaeUec6QJ4cYbp1S1MJQmU/edit?usp=sharing"
            target="_blank"
          >
            <span className="text-black">
              View Full Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
        </div>
        <div>
          <p className="text-gray-500 mt-10">
            Created using{" "}
            <span className="font-semibold text-black">Visual Studio Code</span>
            . Built with{" "}
            <span className="font-semibold text-black">React.js</span> and{" "}
            <span className="font-semibold text-black">TailwindCSS</span>
          </p>
        </div>
      </div>
      {/*MOBILE ENDS HERE*/}
      <div className="w-full hidden h-screen md:flex lg:flex justify-center items-center font-serif">
        <div className="w-5/6 h-full flex justify-between">
          <div className="sticky top-0 w-1/2 h-full p-4">
            <h1 className="text-4xl font-bold tracking-tight mt-10">
              Ankush Nagdev
            </h1>
            <p className="text-xl font-bold">Web Developer</p>
            <p className="text-gray-500 mt-5">
              I design and develop innovating web experiences that work!
            </p>
            <ul className="list-disc list-inside mt-[100px]">
              <li className= {about && "font-bold"}><button className="cursor-pointer" onClick={()=>{handleScrollBtn(0)}}>About</button></li>
              <li className={childOne && "font-bold"}><button className="cursor-pointer" onClick={()=>{handleScrollBtn(360)}}>Experience</button></li>
              <li className={childTwo && "font-bold"}><button className="cursor-pointer" onClick={()=>{handleScrollBtn(901);}}>Projects</button></li>
            </ul>
            <div className="flex gap-3 text-2xl mt-2 absolute bottom-10">
              <a href="https://github.com/Anku5hn" target="_blank">
                <span className="text-gray-500 hover:text-black">
                  {" "}
                  <GithubOutlined />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/ankush-nagdev-009b2113a/"
                target="_blank"
              >
                <span className="text-gray-500 hover:text-black">
                  <LinkedinFilled />
                </span>
              </a>
              <a href="https://x.com/ankushxcode" target="_blank">
                <span className="text-gray-500 hover:text-black">
                  <XOutlined />
                </span>
              </a>
            </div>
          </div>
          <div className="w-1/2 overflow-y-auto p-4" id="parentContainer">
            <p className="text-gray-500 mt-10 px-5">
              I'm a web developer passionate about crafting engaging and
              innovative web experiences for users. I transform creative designs
              into functional and responsive websites and applications. My
              expertise lies in JavaScript and React, and I'm always eager to
              explore new frameworks to stay ahead of web development trends;
              currently, I'm learning Vue. I believe a well-crafted front-end is
              crucial for UX and making a business successful.
            </p>
            <p className="text-gray-500 mt-5 px-5">
              With over 1 year of experience in frontend development, I have had
              the opportunity to work on a diverse range of projects, from
              eCommerce to interactive web applications. I specialize in
              creating responsive designs that work flawlessly on various screen
              sizes. My focus is on creating web experiences that are not only
              visually appealing and creative, but also achieve business
              objectives. I'm proficient in HTML5, CSS3, Tailwind, JavaScript,
              and React.
            </p>
            <div className="mt-10">
              <h2 className="text-lg font-bold p-5" id="childOne">EXPERIENCE</h2>
              <div className="hover:bg-gray-200 rounded-md cursor-pointer p-5">
                <p className="text-gray-500 mt-2">2023 - 2024</p>
                <a href="https://sivanandaelectronics.com/" target="_blank">
                  <span className="text-black">
                    Sivananda Electronics
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <p className="text-gray-500 text-lg">
                  Junior Frontend Developer
                </p>
                <p className="text-gray-500">
                  Crafted, styled, and shipped high-quality websites,
                  collaborating with backend developers to integrate the
                  frontend. Converted Figma designs to reusable React
                  components.
                </p>
                <p className="mt-3 text-xs">
                  <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
                    HTML
                  </span>{" "}
                  <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
                    CSS
                  </span>{" "}
                  <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
                    JavaScript
                  </span>{" "}
                  <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
                    React
                  </span>{" "}
                  <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
                    Tailwind
                  </span>{" "}
                </p>
              </div>
              <div className="hover:bg-gray-200 rounded-md cursor-pointer p-5">
                <p className="text-gray-500 mt-5">2022 - 2023</p>
                <a
                  href="https://igeeksclub.com/author/ankushnagdev/"
                  target="_blank"
                >
                  <span className="text-black">
                    iGeeksClub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <p className="text-gray-500 text-lg">HTML Developer</p>
                <p className="text-gray-500">
                  Created user facing features using HTML5 and CSS3. Wrote clean
                  and efficient code resulting in shortening the review cycles
                  by 10%. Increased traffic by 5–10% per week by optimizing web
                  pages for SEO.
                </p>
                <p className="mt-3 text-xs">
                  <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
                    HTML
                  </span>{" "}
                  <span className="px-2 py-1 rounded-l-full rounded-r-full font-bold text-white bg-gray-500">
                    CSS
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-lg font-bold p-5" id="childTwo">PROJECTS</h2>
              <p className="text-gray-500 p-5">
                Some of the things I've built!
              </p>
              <p className="mt-5 text-xl p-5">React Projects</p>
              <div className="hover:bg-gray-200 p-5 rounded-md">
                <a
                  href="https://store-one-three-phi.vercel.app/"
                  target="_blank"
                >
                  <p className="text-gray-500 mt-5">2025</p>
                  <span className="text-black">
                    StoreOne
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <p className="text-gray-500">
                  Dubizzle inspired eCommerce web app with{" "}
                  <span className="text-black">light mode and dark mode </span>
                  functionality. Topics Covered: Tailwind, React,{" "}
                  <span className="text-black">Context API</span>, Responsive
                  Design, and more.
                </p>
                <a
                  href="https://store-one-three-phi.vercel.app/"
                  target="_blank"
                >
                  <img
                    src={StoreOne}
                    alt="StoreOne"
                    className="w-[200px] h-auto grayscale hover:filter-none"
                  />
                </a>
              </div>
              <div className="hover:bg-gray-200 p-5 rounded-md">
                <a href="https://worldlink-ashy.vercel.app/" target="_blank">
                  <p className="text-gray-500 mt-5">2025</p>
                  <span className="text-black">
                    WorldLink
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <p className="text-gray-500">
                  A logistics website with a lot of{" "}
                  <span className="text-black">animations</span>. Topics
                  Covered: Tailwind, React,{" "}
                  <span className="text-black">CSS Animations</span>, custom
                  cursor, and more.
                </p>
                <a href="https://worldlink-ashy.vercel.app/" target="_blank">
                  <img
                    src={WorldLink}
                    alt="WorldLink"
                    className="w-[200px] h-auto grayscale hover:filter-none"
                  />
                </a>
              </div>
              <div className="hover:bg-gray-200 p-5 rounded-md">
                <a href="https://to-do-eta-red.vercel.app/" target="_blank">
                  <p className="text-gray-500 mt-5">2025</p>
                  <span className="text-black">
                    ToDo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <p className="text-gray-500">
                  A simple ToDo list app to learn{" "}
                  <span className="text-black">State Management</span>. Topics
                  Covered: Tailwind, React,{" "}
                  <span className="text-black">Context API</span>, Responsive
                  Design, and more.
                </p>
                <a href="https://to-do-eta-red.vercel.app/" target="_blank">
                  <img
                    src={ToDo}
                    alt="ToDo"
                    className="w-[200px] h-auto grayscale hover:filter-none"
                  />
                </a>
              </div>
              <p className="mt-5 text-xl p-5">Vue Project</p>
              <div className="hover:bg-gray-200 p-5 rounded-md">
                <a href="https://vue-topics.vercel.app/" target="_blank">
                  <p className="text-gray-500 mt-5">2025</p>
                  <span className="text-black">
                    Vue Topics
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <p className="text-gray-500">
                  Project about all Vue topics made with{" "}
                  <span className="text-black">Vue</span>. Topics Covered: Vue,
                  Axios,
                  <span className="text-black">Pinia</span>, Directives, and
                  more.
                </p>
                <a href="https://vue-topics.vercel.app/" target="_blank">
                  <img
                    src={VueTopics}
                    alt="Vue Topics"
                    className="w-[200px] h-auto grayscale hover:filter-none"
                  />
                </a>
              </div>
              <p className="mt-5 text-xl p-5">Full Stack Projects</p>
              {/*card starts here*/}
              <div className="hover:bg-gray-200 p-5 rounded-md">
                <a
                  href="https://gentlesense-9iz3.onrender.com/"
                  target="_blank"
                >
                  <p className="text-gray-500 mt-5">2024</p>
                  <span className="text-black">
                    GentleSense
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <p className="text-gray-500">
                  An eCommerce store made with{" "}
                  <span className="text-black">MERN Stack</span>. Topics
                  Covered: MongoDB, ExpressJS,
                  <span className="text-black">
                    React, NodeJS, RESTful API, JWT,
                  </span>{" "}
                  and more.
                </p>
                <a
                  href="https://gentlesense-9iz3.onrender.com/"
                  target="_blank"
                >
                  <img
                    src={GentleSense}
                    alt="GentleSense"
                    className="w-[200px] h-auto grayscale hover:filter-none"
                  />
                </a>
              </div>
              {/*card ends here */}
              {/*card starts here*/}
              <div className="hover:bg-gray-200 p-5 rounded-md">
                <a href="https://spentit-j1er.onrender.com/" target="_blank">
                  <p className="text-gray-500 mt-5">2024</p>
                  <span className="text-black">
                    SpentIt
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <p className="text-gray-500">
                  An expense management app made with{" "}
                  <span className="text-black">MERN Stack</span>. Topics
                  Covered: MongoDB, ExpressJS,
                  <span className="text-black">
                    React, NodeJS, RESTful API, JWT,
                  </span>{" "}
                  and more.
                </p>
                <a href="https://spentit-j1er.onrender.com/" target="_blank">
                  <img
                    src={SpentIt}
                    alt="SpentIt"
                    className="w-[200px] h-auto grayscale hover:filter-none"
                  />
                </a>
              </div>
              {/*card ends here */}
              <p className="mt-10 text-xl p-5">HTML + Bootstrap Projects</p>
              <div className="hover:bg-gray-200 p-5 rounded-md">
                <a href="https://anku5hn.github.io/moveit/" target="_blank">
                  <p className="text-gray-500 mt-5">2024</p>
                  <span className="text-black">
                    MoveIt
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <p className="text-gray-500">
                  A moving services site made with{" "}
                  <span className="text-black">HTML, Bootstrap</span>. Topics
                  Covered: HTML, CSS,
                  <span className="text-black">
                    {" "}
                    Bootstrap, Responsive Design,
                  </span>{" "}
                  and more. Made while doing The Complete Full Stack Web
                  development Bootcamp on udemy.
                </p>
                <a href="https://anku5hn.github.io/moveit/" target="_blank">
                  <img
                    src={MoveIt}
                    alt="MoveIt"
                    className="w-[200px] h-auto grayscale hover:filter-none"
                  />
                </a>
              </div>
              {/*card ends here */}
              {/*card ends here */}
              <div className="hover:bg-gray-200 p-5 rounded-md">
                <a href="https://anku5hn.github.io/tindog/" target="_blank">
                  <p className="text-gray-500 mt-5">2024</p>
                  <span className="text-black">
                    Tindog
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
                <p className="text-gray-500">
                  Dating website for dogs made with{" "}
                  <span className="text-black">HTML, Bootstrap</span>. Topics
                  Covered: HTML, CSS,
                  <span className="text-black">
                    {" "}
                    Bootstrap, Responsive Design,
                  </span>{" "}
                  and more. Made while doing The Complete Full Stack Web
                  development Bootcamp on udemy.
                </p>
                <a href="https://anku5hn.github.io/tindog/" target="_blank">
                  <img
                    src={Tindog}
                    alt="Tindog"
                    className="w-[200px] h-auto grayscale hover:filter-none"
                  />
                </a>
              </div>
              <a
                href="https://docs.google.com/document/d/1hnkQ8ivl4wL76XwtlkqIACaeUec6QJ4cYbp1S1MJQmU/edit?usp=sharing"
                target="_blank"
                className="p-5"
              >
                <span className="text-black">
                  View Full Resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
              <p className="text-gray-500 mt-10 p-5">
                Created using{" "}
                <span className="font-semibold text-black">
                  Visual Studio Code
                </span>
                . Built with{" "}
                <span className="font-semibold text-black">React.js</span> and{" "}
                <span className="font-semibold text-black">TailwindCSS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
