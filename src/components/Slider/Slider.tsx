import React, { useState, useEffect, ReactNode } from "react";

type SliderProps = {
  children: ReactNode[];
  sliderClass: string;
  dotClass: string;
  dotColor: string;
  dotContainerClass: string;
  dots: boolean;
  arrow: boolean;
};
export const Slider = ({
  children,
  sliderClass = "",
  dotClass = "",
  dotColor = "",
  dotContainerClass = "",
  dots = false,
  arrow = false,
}: SliderProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (children) {
      interval = setInterval(() => {
        setActiveTab((prevTab) => (prevTab + 1) % children.length);
      }, 3000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeTab, children]);

  const handleScrollLeft = () => {
    if (activeTab === 0 && children) {
      setActiveTab(children.length - 1);
    } else setActiveTab((prevTab) => prevTab - 1);
  };

  const handleScrollRight = () => {
    setActiveTab((prevTab) => (prevTab + 1) % children.length);
  };
  // Function to update touch is started.
  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
    console.log("Touch started");
  };
  // Function to update swiping value will update slide value.
  const handleTouchMove = (e: any) => {
    if (touchStartX === null) return;
    const touchCurrentX = e.touches[0].clientX;
    const touchDiff = touchStartX - touchCurrentX;
    if (touchDiff > 10) {
      // Swiped right
      setActiveTab((prevTab) => (prevTab + 1) % children.length);
    } else if (touchDiff < -10) {
      // Swiped left
      if (activeTab === 0 && children) {
        setActiveTab(children.length - 1);
      } else setActiveTab((prevTab) => prevTab - 1);
    }
    setTouchStartX(null);
  };

  if (!children) return null;
  return (
    <>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={`${sliderClass} w-full`}
      >
        {children.map((child: ReactNode, index: number) => {
          return <div key={index}>{index === activeTab ? child : null}</div>;
        })}

        {arrow && (
          <>
            <button
              className="rounded-full w-8 h-8 absolute left-2 sm:left-5 top-[calc(50%-1rem)] sm:top-[calc(50%-1rem)]  z-20 hover:bg-blue-300 active:bg-blue-500 border-white text-white border-2 active:translate-y-1"
              onClick={handleScrollLeft}
            >
              &#129032;
            </button>
            <button
              className="rounded-full w-8 h-8 absolute right-2 sm:right-5 top-[calc(50%-1rem)] sm:top-[calc(50%-1rem)] z-20 hover:bg-blue-300 active:bg-blue-500  border-white text-white border-2 active:translate-y-1"
              onClick={handleScrollRight}
            >
              &#129034;
            </button>
          </>
        )}
        {dots && (
          <div className={dotContainerClass}>
            {[...Array(children.length)].map((a, i) => {
              return (
                <p
                  key={i}
                  style={
                    dots && activeTab === i
                      ? { backgroundColor: dotColor || "black" }
                      : { backgroundColor: "white" }
                  }
                  className={`${
                    dots
                      ? activeTab === i
                        ? "w-5 h-2 rounded-full transition-all duration-500"
                        : "w-3 h-2 rounded-full transition-all duration-500"
                      : ""
                  }`}
                  onClick={() => setActiveTab(i)}
                >
                  {!dots && i + 1}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

// usage
// eslint-disable-next-line no-lone-blocks
{
  /* <Slider>
            {array.map((tab) => (
              <div className="h-full w-36 bg-slate-400">
                <p>{tab.title}</p>
                <p>{tab.instruction}</p>
              </div>
            ))}
          </Slider> */
}
