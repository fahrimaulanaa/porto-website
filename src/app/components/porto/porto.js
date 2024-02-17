import React from "react";
import Image from "next/image";

export default function Porto() {
  return (
    <div className="flex justify-center items-center bg-gray-400 py-4">
      <div className="flex justify-between items-center px-24">
        <Image src="/benahce.png" alt="Behance" width={150} height={500} className="mx-24 cursor-pointer" />
        <Image src="/dribbble.png" alt="Dribbble" width={150} height={500} className="mx-24 cursor-pointer" />
        <Image src="/github.png" alt="GitHub" width={150} height={500} className="mx-24 cursor-pointer" />
        <Image src="/linkedin.png" alt="LinkedIn" width={150} height={500} className="mx-24 cursor-pointer" />
      </div>
    </div>
  );
}
