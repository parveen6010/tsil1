import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { FiAlignJustify } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegHandPointer } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";

const Intransitmsi = () => {
  const [trackby, setTrackby] = useState("");
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="  w-full pt-[5rem] pb-5 bg-gradient-to-tr relative from-white to-green-400">
        <div className="bg-white flex flex-col   w-full p-2 border-2 mx-auto">
      <h2 className="text-3xl font-bold text-green-500 text-center  p-5">
      MIS-REPORT
      </h2>
        <div className="container  lg:w-full lg:bg-white lg:h-[640px] ">
          <div className="lg:flex ">
            <div className="lg:ml-[2%] lg:mb-[6px] lg:font-semibold">
              From Date
            </div>
            <div className="lg:ml-[23%] lg:mb-[6px] lg:font-semibold">
              To Date
            </div>
          </div>
          <form className= " w-full lg:pl-6 lg:pt-4  lg:pb-4  lg:flex ">
            {/* <label className="" htmlFor="trackBy ">
              <DatePicker
                placeholderText="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control form-control-lg lg:rounded-md mr-5 lg:p-1 w-full lg:border lg:border-solid lg:border-lightblack lg:border-2 "
              />
            </label>
            <label className=" " htmlFor="refNo">
              <DatePicker
                placeholderText="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control form-control-lg lg:rounded-md mr-5 lg:p-1 lg:w-80 lg:border lg:border-solid lg:border-lightblack lg:border-2 "
              />
            </label> */}

            <button className="lg:rounded-md lg:border-2 lg:bg-green-500 lg:py-1 lg:px-8 lg:font-semibold ">
              Go
            </button>
          </form>

          <div className="w-full lg:border lg:border-solid lg:border-semiblack lg:border-opacity-1000"></div>

          <div
            className=" w-full ml-4 "
            style={{ overflowX: "auto", width: "100%", height: "auto" }}
          >
            <div className="  lg:flex lg:mt-4   lg:w-[191%] lg:h-[5%]  ">
              <div className="lg:bg-green-600 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
              OTP-verifiy-Dispatch
              </div>
              <div className="lg:bg-green-600 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                Loading Time
              </div>
              <div className="lg:bg-green-600 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
              Loading-Dispatch Time
              </div>
              <div className="lg:bg-green-600 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                Loading Time
              </div>
              <div className="lg:bg-green-600 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
              Dlivery-Time
              </div>
              <div className="lg:bg-green-600 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
              Dlivery-Dispatch Time
              </div>
              <div className="lg:bg-green-600 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                OTP-verifiy-Dispatch
              </div>
              <div className="lg:bg-green-600 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                Remark-note-Time
              </div>
              <div className="lg:bg-green-600 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                final-Dlivery-Time
              </div>
              <div className="lg:bg-green-600 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                From
              </div>

            </div>
            <div className="  lg:flex  lg:w-[191%] lg:h-[5%]  ">
            <div className="lg:bg-gray-300 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                OTP-verifiy-Dispatch
              </div>
              <div className="lg:bg-gray-300 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                Loading Time
              </div>
              <div className="lg:bg-gray-300 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
              Loading-Dispatch Time
              </div>
              <div className="lg:bg-gray-300 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                Loading Time
              </div>
              <div className="lg:bg-gray-300 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
              Dlivery-Time
              </div>
              <div className="lg:bg-gray-300 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
              Dlivery-Dispatch Time
              </div>
              <div className="lg:bg-gray-300 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                OTP-verifiy-Dispatch
              </div>
              <div className="lg:bg-gray-300 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                Remark-note-Time
              </div>
              <div className="lg:bg-gray-300 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                final-Dlivery-Time
              </div>
              <div className="lg:bg-gray-300 lg:w-[100%] lg:p-1 lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]     ">
                From
              </div>
              
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Intransitmsi;