import React from "react";
import { BsBookmark as CourseIcon } from "react-icons/bs";
import { PiGraduationCapLight as StudentIcon } from "react-icons/pi";
import { BiMoneyWithdraw as PaymentIcon } from "react-icons/bi";
import { BsPersonCircle as PersonIcon } from "react-icons/bs";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="flex justify-center gap-10 mx-8">
        <div className="bg-lightBlue px-4 py-4 rounded-xl w-full">
          <Link to={"/students"}>
            <div className="text-left">
              <div>
                <StudentIcon className="text-Blue text-4xl mb-2" />
              </div>
              <div className="text-textGray">Students</div>
            </div>
            <div className="font-bold text-3xl text-right">243</div>
          </Link>
        </div>

        <div className="bg-lightPink px-4 py-4 rounded-xl w-full">
          <Link to={"/course"}>
            <div className="text-left">
              <div>
                <CourseIcon className="text-Pink text-4xl mb-2" />
              </div>
              <div className="text-textGray">Course</div>
            </div>
            <div className="font-bold text-3xl text-right">13</div>
          </Link>
        </div>

        <div className="bg-lightYellow px-4 py-4 rounded-xl w-full">
          <Link to={"/payments"}>
            <div className="text-left">
              <div>
                <PaymentIcon className="text-Yellow text-4xl mb-2" />
              </div>
              <div className="text-textGray">Payments</div>
            </div>
            <div className="font-bold text-3xl text-right">556,000</div>
          </Link>
        </div>

        <div className="gradientBg px-4 py-4 rounded-xl w-full">
          <Link to={"/users"}>
            <div className="text-left">
              <div>
                <PersonIcon className="text-[#ffffff] text-4xl mb-2" />
              </div>
              <div className="text-[#ffffff]">Users</div>
            </div>
            <div className="font-bold text-3xl text-right">3</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
