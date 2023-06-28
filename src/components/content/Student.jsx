import { set } from "mongoose";
import React, { useState } from "react";
import { BsPen as EditIcon } from "react-icons/bs";
import { AiOutlineSave as SaveIcon } from "react-icons/ai";
import { BsTrash3 as DeleteIcon } from "react-icons/bs";

function Student({ student, i, setStudents }) {
  const [edit, setEdit] = useState(false);

  let firstName = student.firstName;
  let lastName = student.lastName;
  let email = student.email;
  let phone = student.phone;
  let website = student.domain;
  let companyName = student.company.name;

  return (
    <div>
      <div
        className="grid grid-cols-21 justify-items-start items-center text-textGray mb-3 bg-[#ffffff] rounded-xl px-2 h-20"
        key={i}
      >
        <div className="col-span-2">
          <img src={student.image} alt="" className="w-20" />
        </div>
        <div className="col-span-3">
          {edit ? (
            <div className="flex flex-col">
              <input
                type="text"
                className="rounded-md border-[1px] w-32 border-textLightGray px-4 py-1 mt-1 text-textBlack"
                defaultValue={firstName}
                onChange={(e) => {
                  firstName = e.target.value;
                }}
              />
              <input
                type="text"
                className="rounded-md border-[1px] w-32 border-textLightGray px-4 py-1 mt-1 text-textBlack"
                defaultValue={lastName}
                onChange={(e) => {
                  lastName = e.target.value;
                }}
              />
            </div>
          ) : (
            firstName + " " + lastName
          )}
        </div>
        <div className="col-span-4">
          {edit ? (
            <input
              type="text"
              className="rounded-md border-[1px] w-64 border-textLightGray px-4 py-1 mt-1 text-textBlack"
              defaultValue={email}
              onChange={(e) => {
                email = e.target.value;
              }}
            />
          ) : (
            email
          )}
        </div>
        <div className="col-span-3">
          {edit ? (
            <input
              type="text"
              className="rounded-md border-[1px] w-48 border-textLightGray px-4 py-1 mt-1 text-textBlack"
              defaultValue={phone}
              onChange={(e) => {
                phone = e.target.value;
              }}
            />
          ) : (
            phone
          )}
        </div>
        <div className="col-span-4">
          {edit ? (
            <input
              type="text"
              className="rounded-md border-[1px] w-48 border-textLightGray px-4 py-1 mt-1 text-textBlack"
              defaultValue={website}
              onChange={(e) => {
                website = e.target.value;
              }}
            />
          ) : (
            website
          )}
        </div>
        <div className="col-span-4">
          {edit ? (
            <input
              type="text"
              className="rounded-md border-[1px] w-64 border-textLightGray px-4 py-1 mt-1 text-textBlack"
              defaultValue={companyName}
              onChange={(e) => {
                companyName = e.target.value;
              }}
            />
          ) : (
            companyName
          )}
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-8 text-bgOrange">
            <button
              onClick={() => {
                if (edit) {
                  setStudents((prev) => {
                    let newData = [...prev];
                    newData[i] = {
                      firstName,
                      lastName,
                      email,
                      phone,
                      domain: website,
                      company: {
                        name: companyName,
                      },
                    };

                    return newData;
                  });
                }
                setEdit(!edit);
              }}
            >
              {edit ? <SaveIcon /> : <EditIcon />}
            </button>
            <button>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
