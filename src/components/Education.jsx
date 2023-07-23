import React from "react";
import VerticalCard from "./Card";
const Education = () => {
  return (
    <div name="education" className="w-full  antialiased h-screen bg-[#0a192f]">
      <div className="min-h-screen py-8 md:px-32 md:pl-[200px] pt-[200px] sm:pt-[150px] px-4">
        <h1 className="text-3xl font-bold text-center text-gray-300 mb-10 border-b-[2px] border-yellow-600 ">
          Education
        </h1>
        <div className="flex flex-col space-y-4">
          <VerticalCard
            imageUrl=""
            link="http://www.ipu.ac.in/"
            title="University"
            college="Guru Gobind Singh Indraprastha University"
            description="2020-2024 | CSE | 9.1 CGPA"
          />
          <VerticalCard
            imageUrl=""
            link=""
            title="High School"
            college="SAM International School"
            description="2018-2020 | Science | 8 CGPA"
          />
          <VerticalCard
            imageUrl=""
            link=""
            title="Intermediate"
            college="SAM International School"
            description=" 8 CGPA"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
