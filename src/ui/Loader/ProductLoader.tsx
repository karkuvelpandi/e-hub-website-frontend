import React from "react";

export const ProductLoader = () => {
  return (
    <div className="w-full h-full flex justify-center gap-5 flex-wrap">
      {new Array(4).fill(0).map((_, index) => {
        return (
          <div
            key={index}
            className="w-64 h-80 rounded-md flex flex-col gap-1 justify-around border-[1px] p-2"
          >
            <p className="loader-bg h-40 w-full"></p>
            <p className="loader-bg h-4 w-full"></p>
            <p className="loader-bg h-4 w-full"></p>
            <p className="loader-bg h-4 w-1/4"></p>
            <p className="loader-bg h-6 w-2/4"></p>
            <p className="loader-bg h-6 w-1/4"></p>
            <p className="loader-bg h-4 w-3/4"></p>
          </div>
        );
      })}
    </div>
  );
};
