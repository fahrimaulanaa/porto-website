import React from 'react'
import Image from 'next/image'

export default function Project() {
    return(
        <div className="flex flex-col">
        <div className="flex flex-row items-center px-12 pt-16 justify-between">
          <h1 className="text-white font-semibold text-5xl pt-6">
            My Portofolio
          </h1>
          <p className="pt-10 cursor-pointer text-[#005CA1] text-lg">See All</p>
        </div>
        {/* fisrt section */}
        <div className="flex flex-col lg:flex-row justify-between p-12" id="first-porto-section">
          <div className="flex flex-col" id="first-porto">
            <Image src={"/porto_first.png"} width={450} height={300} alt="first porto" id="porto-img-first" className="cursor-pointer" />
            <h1 className="text-white font-semibold text-2xl pt-6 cursor-pointer" id="first-project-title">YIA Atis Website</h1>
            <p className="text-[#ADADAD] pt-4" id="first-project-category">Web Development</p>
          </div>
          <div className="flex flex-col" id="second-porto">
            <Image src={"/porto_second.png"} width={450} height={300} alt="second porto" id="porto-img-second" className="cursor-pointer" />
            <h1 className="text-white font-semibold text-2xl pt-6 cursor-pointer" id="second-project-title">ARC Mobile Application</h1>
            <p className="text-[#ADADAD] pt-4" id="second-project-category">Mobile Application</p>
          </div>
          <div className="flex flex-col" id="third-porto">
            <Image src={"/porto_third.png"} width={450} height={300} alt="third porto" id="porto-img-third" className="cursor-pointer" />
            <h1 className="text-white font-semibold text-2xl pt-6 cursor-pointer" id="third-project-title">RentCar App</h1>
            <p className="text-[#ADADAD] pt-4" id="third-project-category">Mobile Application</p>
          </div>
        </div>
        {/* second section */}
        <div className="flex flex-col lg:flex-row justify-between p-12" id="second-porto-section">
          <div className="flex flex-col" id="fourth-porto">
            <Image src={"/porto_fourth.png"} width={450} height={300} alt="fourth porto" id="porto-img-fourth" className="cursor-pointer" />
            <h1 className="text-white font-semibold text-2xl pt-6 cursor-pointer" id="fourth-project-title">YIA Atis Website</h1>
            <p className="text-[#ADADAD] pt-4" id="fourth-project-category">Web Development</p>
          </div>
          <div className="flex flex-col" id="fifth-porto">
            <Image src={"/porto_fifth.png"} width={450} height={300} alt="fifth porto" id="porto-img-fifth" className="cursor-pointer" />
            <h1 className="text-white font-semibold text-2xl pt-6 cursor-pointer" id="fifth-project-title">CoffeeShop POS</h1>
            <p className="text-[#ADADAD] pt-4" id="fifth-project-category">Mobile Application</p>
          </div>
          <div className="flex flex-col" id="sixth-porto">
            <Image src={"/porto_sixth.png"} width={450} height={300} alt="sixth porto" id="porto-img-sixth" className="cursor-pointer" />
            <h1 className="text-white font-semibold text-2xl pt-6 cursor-pointer" id="sixth-project-title">PSSI Football App</h1>
            <p className="text-[#ADADAD] pt-4" id="sixth-project-category">Mobile Application</p>
          </div>
          </div>
      </div>
    )
}