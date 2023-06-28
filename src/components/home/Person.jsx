import React from "react";
import { BsPersonCircle as PersonIcon } from "react-icons/bs";

function Person() {
  return (
    <div>
      <div className="flex justify-center mt-8 ">
        <PersonIcon className="text-8xl text-bgOrange" />
      </div>
      <div className="font-bold mt-4 text-xl">John Doe</div>
      <div className="text-bgOrange mt-2">Admin</div>
    </div>
  );
}

export default Person;
