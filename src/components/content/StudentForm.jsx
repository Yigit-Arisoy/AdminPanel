import React, { useState } from "react";

function StudentForm({ setFormState, setStudents }) {
  const [submitError, setSubmitError] = useState(false);
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [website, setWebsite] = useState("");
  let [companyName, setCompanyName] = useState("");

  return (
    <div className="w-full h-full absolute top-0 bg-bgGray rounded-xl">
      <div className="flex justify-between mx-8 py-4 items-center border-b-[1px] border-textLightGray">
        <div className="text-2xl font-bold">Add New Student</div>
        <button
          onClick={() => {
            setFormState(false);
          }}
          className="bg-bgOrange rounded-md text-bgWhite py-2 px-16"
        >
          <div className="">Close</div>
        </button>
      </div>

      <div id="studentForm" className="text-left mx-8 mt-12">
        <div className="mb-2">Please enter the required credentials</div>
        <div>
          <input
            type="text"
            className="rounded-md border-[1px] border-textLightGray px-4 py-1 mt-1 text-textBlack"
            placeholder="First Name"
            defaultValue={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            className="rounded-md border-[1px] border-textLightGray px-4 py-1 mt-1 text-textBlack"
            placeholder="Last Name"
            defaultValue={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            className="rounded-md border-[1px] border-textLightGray px-4 py-1 mt-1 text-textBlack"
            placeholder="Email"
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            className="rounded-md border-[1px] border-textLightGray px-4 py-1 mt-1 text-textBlack"
            placeholder="Phone"
            defaultValue={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            className="rounded-md border-[1px] border-textLightGray px-4 py-1 mt-1 text-textBlack"
            placeholder="Website"
            defaultValue={website}
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            className="rounded-md border-[1px] border-textLightGray px-4 py-1 mt-1 text-textBlack"
            placeholder="Company Name"
            defaultValue={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          />
        </div>
        <div className="mt-8 flex items-center gap-4">
          <button
            className="bg-bgOrange rounded-md text-bgWhite py-2 px-8"
            onClick={() => {
              if (
                !(
                  firstName &&
                  lastName &&
                  email &&
                  phone &&
                  website &&
                  companyName
                )
              )
                setSubmitError(true);
              else {
                setStudents((prev) => {
                  return [
                    {
                      firstName,
                      lastName,
                      email,
                      phone,
                      domain: website,
                      company: {
                        name: companyName,
                      },
                    },
                    ...prev,
                  ];
                });
                setFormState(false);
              }
            }}
          >
            Save
          </button>
          {submitError && (
            <div className="text-[#ff5555]">Please fill all the fields!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
//
// Name
// Email
// Phone
// Website
// Company Name
