import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GeneralProvider } from "./context/GeneralContext";
import { useEffect, useState } from "react";

import SideBar from "./components/home/SideBar";
import Login from "./pages/Login";

import Course from "./components/content/Course";
import Home from "./components/content/Home";
import Payment from "./components/content/Payment";
import Report from "./components/content/Report";
import Settings from "./components/content/Settings";
import Students from "./components/content/Students";

import { BiArrowBack as BackIcon } from "react-icons/bi";
import { IoIosNotificationsOutline as NotifIcon } from "react-icons/io";

import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { BsBookmark as CourseIcon } from "react-icons/bs";
import { PiGraduationCapLight as StudentIcon } from "react-icons/pi";
import { BiMoneyWithdraw as PaymentIcon } from "react-icons/bi";
import { TbFileReport as ReportIcon } from "react-icons/tb";
import { GiSettingsKnobs as SettingsIcon } from "react-icons/gi";

function App() {
  const menuItems = [
    { name: "Home", icon: <HomeIcon />, link: "/", element: <Home /> },
    {
      name: "Course",
      icon: <CourseIcon />,
      link: "/course",
      element: <Course />,
    },
    {
      name: "Students",
      icon: <StudentIcon />,
      link: "/students",
      element: <Students />,
    },
    {
      name: "Payment",
      icon: <PaymentIcon />,
      link: "/payment",
      element: <Payment />,
    },
    {
      name: "Reports",
      icon: <ReportIcon />,
      link: "/reports",
      element: <Report />,
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
      link: "/settings",
      element: <Settings />,
    },
  ];

  return (
    <div id="app" className="App">
      <GeneralProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="*"
              element={
                <div className="grid grid-cols-6 h-screen">
                  <div className="col-span-1 bg-bgBeige">
                    <SideBar menuItems={menuItems} />
                  </div>

                  <div className="col-span-5 h-screen bg-bgGray">
                    <div
                      className="flex justify-between px-8 py-4 bg-bgWhite"
                      id="navbar"
                    >
                      <div>
                        <BackIcon className="text-textGray" />
                      </div>
                      <div>
                        <NotifIcon className="text-textGray text-xl" />
                      </div>
                    </div>
                    <Routes>
                      {menuItems.map((item) => {
                        return (
                          <Route path={item.link} element={item.element} />
                        );
                      })}
                    </Routes>
                  </div>
                </div>
              }
            />

            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </GeneralProvider>
    </div>
  );
}

export default App;
