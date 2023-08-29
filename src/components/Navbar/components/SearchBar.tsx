import React, { useState } from "react";
import searchIcon from "../../../ui/svgs/searchIcon.svg";

type SearchBarProps = {
  context?: "desktop" | "mobile";
};

export const SearchBar = (props: SearchBarProps) => {
  const [searchName, setSearchName] = useState<string>("");
  let searchHandler = () => {
    if (!searchName) {
      //   setAllContacts(availableContacts);
    }
    if (searchName !== "") {
      //   const result = availableContacts.filter((singleData) => {
      //     return (
      //       (singleData.firstName + singleData.lastName)
      //         .toLowerCase()
      //         .includes(searchName.toLowerCase()) ||
      //       singleData.email.toLowerCase().includes(searchName.toLowerCase())
      //     );
      //   });
      //   setAllContacts(result);
    }
  };
  return (
    <div className="flex gap-2 h-10 w-full">
      <input
        type="text"
        placeholder="Search product..."
        className="outline-none px-2 h-10 w-full"
        onChange={(e) => setSearchName(e.target.value)}
        // onFocus={() => setAllContacts(availableContacts)}
      />
      <button className=" bg-gray-700 px-2">
        <img
          src={searchIcon}
          height="25px"
          width="25px"
          alt=""
          className="ml-1"
          onClick={() => searchHandler()}
        />
      </button>
    </div>
  );
};
