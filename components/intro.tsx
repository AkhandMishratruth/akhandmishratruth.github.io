"use client";

import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";
import {useSectionInView} from "@/lib/hooks";
import {useActiveSectionContext} from "@/context/active-section-context";
import {DotLottiePlayer} from "@dotlottie/react-player";

export default function Intro() {
  const {ref} = useSectionInView("Home", 0.5);
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-[50rem] text-left sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/IMG_4193.jpg"
              alt="Akhand Mishra portrait"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-56 w-56 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] sm:text-4xl"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="text-lg">Hi there, I'm</span><br/>
        <span className="font-bold text-5xl">Akhand Mishra.</span><br/>
        <span className="text-2xl">
          <span className="font-bold">Full Stack Developer </span>
          and
          <span className="font-bold"> Software Engineer </span>
          with over
          <span className="text-bold"> 5 years </span>
          of experience. I enjoy building
          <span className="italic"> SEO friendly sites & apps.</span>
        </span>
      </motion.h1>

      <div className="flex flex-col items-center">
        <motion.div
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{
            delay: 0.1,
          }}
        >
          <div className="flex flex-col items-center justify-center gap-6 px-4 text-lg font-medium">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact me here{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
              </Link>

              <a
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="https://drive.google.com/file/d/1aJq3vwUediOndnBKTLvdmrnX10x42q3R/view?usp=sharing"
                target="_blank"
              >
                Download CV{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/akhand-mishra-600824117"
                target="_blank"
              >
                <BsLinkedin/>
              </a>

              <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/AkhandMishratruth"
                target="_blank"
              >
                <FaGithubSquare/>
              </a>
            </div>
          </div>
        </motion.div>
        <DotLottiePlayer
          className="w-16"
          src="/scroll animation.lottie"
          autoplay
          loop
        />
      </div>
    </section>
  );
}
