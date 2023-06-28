import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Menu({ menuItems }) {
  const location = useLocation();
  const currentMenu = location.pathname;

  return (
    <div className="flex flex-col items-center justify-center text-lg">
      <div className="text-left">
        {menuItems.map((item, i) => {
          return (
            <Link to={item.link} key={i}>
              <div className="">
                <button>
                  <div
                    className={`${
                      currentMenu == item.link.toLowerCase()
                        ? "bg-bgOrange "
                        : ""
                    } rounded-lg flex items-center gap-4 justify-items-start my-2 px-16 py-2 hover:bg-bgOrange duration-300`}
                  >
                    <div>{item.icon}</div> <div>{item.name}</div>
                  </div>
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
