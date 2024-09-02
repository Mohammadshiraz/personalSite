// import Button1 from "../assets/Button1.png";
// import Button2 from "../assets/Button2.png";
// import Button3 from "../assets/Button3.png";
// import Button4 from "../assets/Button4.png";
// import Frame from "../assets/frame.png";

// import React from "react";

// const HeroSection = () => {
//   return (
//     //hero section
//     <div className="">
//       {/* container */}
//       <div className="py-10 px-4 flex flex-col gap-12">
//         {/* column 1 or banner*/}
//         <div className="">
//           <img src={Frame}></img>
//         </div>
//         {/* columns 2 or banner */}
//         <div className=" flex flex-col gap-8 ">
//           {/* heading */}
//           <div className="flex flex-col gap-3 ">
//             <h1 className="text-3xl">
//               hello I'm <span className=" font-bold">Mohammad Shiraz</span>
//             </h1>
//             <h1 className="text-3xl">
//               <span className=" font-bold">Web</span> Developer
//             </h1>
//             <h1 className="text-3xl">
//               Based In <span className=" font-bold">India</span>
//             </h1>
//           </div>
//           {/* paragraph */}
//           <p className="text-xl font-mono ">
//             I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
//             typesetting industry. Lorem Ipsum has been the industry's standard
//             dummy text ever since the 1500s, when an unknown printer took a
//             galley of type and scrambled it to specimen book.
//           </p>
//           {/* buttons */}
//           <div className="flex gap-6">
//             <div>
//               <img src={Button1} alt="" />
//             </div>
//             <div>
//               <img src={Button2} alt="" />
//             </div>
//             <div>
//               <img src={Button3} alt="" />
//             </div>
//             <div>
//               <img src={Button4} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* frame */}
//       <div></div>
//     </div>
//   );
// };

// export default HeroSection;

import Button1 from "../assets/Button1.png";
import Button2 from "../assets/Button2.png";
import Button3 from "../assets/Button3.png";
import Button4 from "../assets/Button4.png";
import Frame from "../assets/frame.png";

import React from "react";

const HeroSection = () => {
  return (
    //hero section
    <div className="md:px-40  md:py-15 z-[-20] ">
      {/* container */}
      <div className="relative py-10 px-4   flex flex-col gap-12 md:px-8 md:flex-row-reverse">
        {/* column 1 or banner*/}
        <div className=" ">
          <img
            className="  md:w-[889px] md:h-[556px] lg:absolute top-[40px] right-0 "
            src={Frame}
          ></img>
        </div>
        {/* columns 2 or banner */}
        <div className=" lg:absolute left-0 top-[170px] md:w-[600px] md:h-[376px] flex flex-col gap-8 ">
          {/* heading */}
          <div className="flex flex-col gap-3 ">
            <h1 className="text-3xl">
              hello I'm <span className=" font-bold">Mohammad Shiraz</span>
            </h1>
            <h1 className="text-3xl">
              <span className=" font-bold">Web</span> Developer
            </h1>
            <h1 className="text-3xl">
              Based In <span className=" font-bold">India</span>
            </h1>
          </div>
          {/* paragraph */}
          <p className="text-xl font-mono ">
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
          </p>
          {/* buttons */}
          <div className="flex gap-6 lg:absolute top-[392px]">
            <div>
              <img src={Button1} alt="" />
            </div>
            <div>
              <img src={Button2} alt="" />
            </div>
            <div>
              <img src={Button3} alt="" />
            </div>
            <div>
              <img src={Button4} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* frame */}
      <div></div>
    </div>
  );
};

export default HeroSection;
