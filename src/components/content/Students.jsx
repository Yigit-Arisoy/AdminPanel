import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

import { AiOutlineDown as DropIcon } from "react-icons/ai";
import { AiOutlineLeft as LeftIcon } from "react-icons/ai";
import { AiOutlineRight as RightIcon } from "react-icons/ai";

import StudentForm from "./StudentForm";
import Student from "./Student";

function Students() {
  const [formVisible, setFormVisible] = useState(false);
  const [students, setStudents] = useState();
  const [studentToEdit, setStudentToEdit] = useState();
  const [studentToEditIndex, setStudentToEditIndex] = useState();

  let [total, setTotal] = useState(100);
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  let page =
    searchParams.get("page") == null ? 0 : Number(searchParams.get("page"));
  let query = searchParams.get("q") == null ? "" : searchParams.get("q");
  let limit =
    searchParams.get("limit") == null ? 6 : Number(searchParams.get("limit"));
  const limitArray = [6, 10, 20, 50];

  console.log("params: ", searchParams);

  const navigateNewPage = () => {
    navigate(`/students?q=${query}&limit=${limit}&page=${page}`);
  };

  const searchUsers = async () => {};

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${query}&limit=${limit}&skip=${page}`
      );
      const data = await response.json();
      setStudents(data.users);
      setTotal(data.total);
    })();
  }, [searchParams]);
  return (
    <div className="">
      <div className="relative">
        {formVisible && (
          <StudentForm
            setFormState={setFormVisible}
            setStudents={setStudents}
            student={studentToEdit}
            studentIndex={studentToEditIndex}
          />
        )}
        <div className="flex justify-between mx-8 py-4 items-center border-b-[1px] border-textLightGray">
          <div className="font-bold text-2xl">Students List</div>
          <div className="flex gap-4 items-center">
            <div>
              <input
                type="text"
                className="rounded-md border-[1px] border-textLightGray w-full px-4 py-1 mt-1 text-textBlack"
                placeholder="Search..."
                onChange={(e) => {
                  query = e.target.value;
                  navigateNewPage();
                }}
              />
            </div>
            <div>
              <button
                className="bg-bgOrange rounded-md text-bgWhite w-full py-2 px-8"
                onClick={() => {
                  setFormVisible(true);
                }}
              >
                ADD NEW STUDENT
              </button>
            </div>
          </div>
        </div>
        <div className="mx-8">
          <div className="grid grid-cols-21 justify-items-start text-textGray my-3 px-2">
            <div className="col-span-2"></div>
            <div className="col-span-3">Name</div>
            <div className="col-span-4">Email</div>
            <div className="col-span-3">Phone</div>
            <div className="col-span-4">Website</div>
            <div className="col-span-4">Company Name</div>
            <div className="col-span-1"></div>
          </div>

          {students &&
            students.map((student, i) => {
              return (
                <Student student={student} i={i} setStudents={setStudents} />
              );
            })}
          <div className="flex justify-end gap-12 text-textGray">
            <div className="flex items-center gap-2">
              <span>Rows per page: </span>
              <div className="dropdownMenu">
                <span>
                  {limit} <DropIcon className="inline" />
                </span>

                <div className="dropdownContent bg-bgGray px-1 py-2 rounded-xl">
                  {limitArray.map((limitCount) => {
                    return (
                      <button
                        className="bg-bgWhite px-8 py-1 text-sm hover:bg-bgOrange rounded-xl"
                        onClick={() => {
                          limit = limitCount;
                          navigateNewPage();
                        }}
                      >
                        {limitCount}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              {1 + page * limit} - {1 + page * limit + limit} of {total}
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  page = page - 1 < 0 ? page : page - 1;
                  navigateNewPage();
                }}
              >
                <LeftIcon />
              </button>
              <button
                onClick={() => {
                  page = page + 1;
                  navigateNewPage();
                }}
              >
                <RightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
