import React, { useState } from "react";

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.classList.add("nav-open", "nav-fixed-top");
    } else {
      body.classList.remove("nav-open", "nav-fixed-top");
    }

    // Clean up on component unmount
    return () => {
      body.classList.remove("nav-open", "nav-fixed-top");
    };
  }, [isOpen]);

  return (
    <button
      className="hamburger--btn relative z-[101] self-end sm:self-center"
      onClick={handleClick}
    >
      <span className="border-0 w-[24px] h-[18px] bg-[transparent] flex relative z-[199] m-0 cursor-pointer before:absolute before:content-[&#x27;&#x27;] before:w-[100%] before:h-[3px] before:rounded-[100px] before:left-[0px] before:bg-[#fff] after:absolute after:content-[&#x27;&#x27;] after:w-[100%] after:h-[3px] after:rounded-[100px] after:left-[0px] after:bg-[#fff] before:bottom-[0px] after:top-[0px] after:mt-[0px] nav-bar_menu__eM2RY">
        <span className="w-[100%] bg-color-mob  h-[3px] bg-[#fff] rounded-[100px] visible mb-[0px] mt-[-2px] opacity-[1] absolute left-[0px] top-[50%] translate-y-[25%] bg-color-mob"></span>
      </span>
    </button>
  );
};

export default HamburgerButton;
