"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import TypingEffectName from "./components/TypingEffect/name";
import Porto from "./components/porto/porto";
import Skill from "./components/skill/skill";
import Project from "./components/project/project";

const Navbar = dynamic(() => import("./components/navbar/navbar"));
const NavItem = dynamic(() => import("./components/navbar/navbarItem"));

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <main className="">
      <div id="navbar" className="flex items-center justify-between p-12">
        <span className="text-3xl font-semibold">Fahri</span>

        {/* Hamburger icon for small screens */}
        <div className="lg:hidden relative">
          <button onClick={toggleNav}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navbar items for larger screens */}
        <div className="hidden lg:flex">
          <Navbar>
            <NavItem href="/" isActive>
              Home
            </NavItem>
            <NavItem href="/about">Skill</NavItem>
            <NavItem href="/contact">Portofolio</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </Navbar>
        </div>

        {/* Mobile navigation menu */}
        {isNavOpen && (
          <div className="lg:hidden absolute left-1/2 transform w-full -translate-x-1/2 mt-36 opacity-100 transition-opacity duration-500 border rounded-md shadow-md">
            <Navbar>
              <NavItem href="/" isActive>
                Home
              </NavItem>
              <NavItem href="/about">Skill</NavItem>
              <NavItem href="/contact">Portofolio</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </Navbar>
          </div>
        )}
      </div>
      <div className="mt-32 flex flex-col sm:flex-row mb-32 p-12">
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-2xl font-medium text-[#ADADAD] xl:text-3xl 2xl:text-5xl">
            Fullstack Developer
          </h1>
          <TypingEffectName />
          <p className="mt-10 text-sm md:text-md lg:text-lg xl:text-xl w-120 xl:w-520 2xl:text-2xl">
            Fullstack Developer dengan pengalaman selama 1 tahun. Menguasai
            beberapa bahasa pemrograman seperti Kotlin, JavaScript, Python, PHP
            dengan framework React.JS, Next.JS, Laravel. Serta mampu mengelola
            database MongoDB dan mySQL.
          </p>
          <h2 className="font-bold text-md mt-24 cursor-pointer">Learn More</h2>
        </div>
        <Image
          src={"/img_header.png"}
          width={525}
          height={670}
          className=""
          alt="header image"
        />
      </div>
      <Porto />
      <Project />
      <div className="flex flex-col md:flex-row p-12 justify-between" id="skill-section">
    <div className="flex flex-col">
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold">My Awesome</h1>
        <h1 className="text-2xl md:text-3xl lg:text-6xl mt-5 font-bold">Skill</h1>
        <p className="text-md md:text-md lg:text-3xl mt-5 w-96">
            Skill yang saya kuasai dan sudah mendapat sertifikasi dari beberapa lembaga
        </p>
    </div>

    <div className="flex flex-col md:ml-24 p-4">
        <Skill />
    </div>
    
    </div>

    </main>
  );
}
