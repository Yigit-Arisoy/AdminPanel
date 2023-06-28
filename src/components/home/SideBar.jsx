import React from "react";

import Person from "./Person";
import Menu from "./Menu";
import { FiLogOut as LogOutIcon } from "react-icons/fi";

function SideBar({ menuItems }) {
  return (
    <div>
      <div className="border-l-4 border-bgOrange mx-12 font-bold text-xl mt-6">
        MANAGE COURSES
      </div>
      <div className="mt-16">
        <Person />
      </div>
      <div className="mt-24">
        <Menu menuItems={menuItems} />
      </div>
      <div className="mt-32">
        <button>
          <div className="flex gap-4 items-center">
            Logout <LogOutIcon />
          </div>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
