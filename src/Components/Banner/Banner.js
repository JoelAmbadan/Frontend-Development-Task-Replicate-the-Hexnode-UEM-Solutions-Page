import React from "react";
import banner1 from "../../images/Banner/banner.webp";
import banner2 from "../../images/Banner/banner2.png";



function Banner() {
  return (
    
      <div className="p-[85px_0_30px]  xl:p-[130px_0_60px] bg-[#020A19]">
        <div className="w-[88%] max-w-[1300px] mx-auto">
          <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between">
            <div className=" flex flex-col w-full max-w-full md:max-w-[554px] order-2 xl:order-1">
              <div className>
                <div className="mb-[20px] md:mb-[10px] flex flex-col max-xl:mt-[40px] max-xl:items-center max-xl:justify-center">
                  <h1 className="text-[rgb(191,193,197,60%)] text-[16px] leading-[20px] xl:text-left font-semibold mb-[10px]">
                    Unified Endpoint Management
                  </h1>
                  <h2 className="text-[#FFFFFF] text-[34px] leading-[44px] text-center lg:text-[42px] lg:leading-[53px] xl:text-left font-bold antialiased">
                    Gain control and visibility over your endpoints
                  </h2>
                </div>
              </div>
              <div className="mb-[20px]">
                <p className="text-[rgb(255,255,255,75%)] font-normal text-[18px] leading-[28px] text-center xl:text-left">
                  Hexnode&#x27;s UEM solution allows you to simplify endpoint
                  management and free up IT. Focus on the big picture while
                  Hexnode works on the details.
                </p>
              </div>
              <div className="banner-sec-left__footer">
                <form className="p-0 m-0">
                  <div className="flex justify-between flex-col items-center sm:flex-row !justify-center xl:!justify-start">
                    <div className="w-full max-w-[325px] sm:mr-[8px] max-w-[340px] sm:max-w-[280px] sm:mr-[10px] ">
                      <input
                        placeholder="Email"
                        type="text"
                        name="email"
                        id="signup-email"
                        className="text-[18px] leading-[24px] w-full h-[53px] rounded-[3px] px-[10px] shadow-none transition-all duration-[0.3s] ease-in-out placeholder:text-[#c6c6c6] !text-[17px] !leading-[21px] "
                        
                      />
                    </div>
                    <div className="w-full max-w-[325px] mt-[15px] sm:max-w-[195px] sm:mt-[0px] max-w-[340px] sm:max-w-[210px] max-sm:mt-[20px] ">
                      <button
                        role="button"
                        className="text-[17px] leading-[24px] uppercase text-[#fff] font-normal bg-[#dd0735] w-full h-[53px] border-[0] flex justify-center items-center rounded-[3px] transition-all ease-in-out duration-[0.25s] cursor-pointer hover:text-[#fff] hover:bg-[#bb022a] hover:no-underline focus:text-[#fff] focus:bg-[#bb022a] focus:no-underline"
                      >
                        LET&#x27;S TRY IT OUT!
                        <span className="overflow-hidden animate-spin flex justify-center items-center max-w-[0px] w-[0px] h-[0px]">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.1"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM12.359 8c0 0 0 0 0 0 0-0.906 0.735-1.641 1.641-1.641s1.641 0.735 1.641 1.641c0 0 0 0 0 0 0 0.906-0.735 1.641-1.641 1.641s-1.641-0.735-1.641-1.641zM10.757 12.243c0-0.821 0.665-1.486 1.486-1.486s1.486 0.665 1.486 1.486c0 0.821-0.665 1.486-1.486 1.486s-1.486-0.665-1.486-1.486zM6.654 14c0-0.743 0.603-1.346 1.346-1.346s1.346 0.603 1.346 1.346c0 0.743-0.603 1.346-1.346 1.346s-1.346-0.603-1.346-1.346zM2.538 12.243c0-0.673 0.546-1.219 1.219-1.219s1.219 0.546 1.219 1.219c0 0.673-0.546 1.219-1.219 1.219s-1.219-0.546-1.219-1.219zM0.896 8c0-0.61 0.494-1.104 1.104-1.104s1.104 0.494 1.104 1.104c0 0.61-0.494 1.104-1.104 1.104s-1.104-0.494-1.104-1.104zM2.757 3.757c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM14.054 3.757c0 1-0.811 1.811-1.812 1.811s-1.812-0.811-1.812-1.811c0-1.001 0.811-1.811 1.812-1.811s1.812 0.811 1.812 1.811z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="pt-[8px] sm:pt-[15px] !relative !pt-[20px]">
                  <span className="text-[18px] leading-[24px] text-[#fff] font-extralight text-center block relative p-0 m-0 !absolute !text-[14px] !leading-[24px] !top-[0px] !left-[50%] !translate-x-[-50%] w-full SignupStripe_er-msg__aeULY "></span>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full md:max-w-[610px] order-1 xl:order-2">
              <div className="w-full max-w-[610px] relative mx-auto">
                <div className="w-full h-full max-w-[610px]">
                  <img
                    alt="Hexnode UEM"
                    fetchpriority="high"
                    width="610"
                    height="465"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-full"
                    style={{ color: "transparent" }}
                    srcSet={banner1}
                    src={banner1}
                  />
                </div>
                <div className="absolute w-full h-full top-[0px] z-1 pointer-events-none">
                  <img
                    alt="Hexnode UEM"
                    fetchpriority="high"
                    width="393"
                    height="753"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-full"
                    style={{ color: "transparent" }}
                    srcSet={banner2}
                    src={banner2}
                  />
                </div>
                <div className="group flex bg-[#FCD598] rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute top-[14%] left-[5%] sm:left-[13%] md:left-[6%] overflow-hidden banner_tick-animate-wrap__7tPRE">
                  <div className="w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] group-hover:scale-[20] banner_tick-animate__Cw5VR"></div>
                  <div className="w-[19px] h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] ">
                    <div className="w-[8px] h-[4px] sm:w-[14px] sm:h-[8px] justify-center items-center flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.188"
                        height="11.021"
                        viewBox="0 0 16.188 11.021"
                        className
                      >
                        <path
                          id="Path_4891"
                          data-name="Path 4891"
                          d="M-1939.354-218.176l5.416,5.14,9.4-8.917"
                          transform="translate(1940.042 222.678)"
                          fill="none"
                          stroke="#db962c"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[8px] leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[21px] text-left z-1 undefined">
                    Password policy applied
                  </span>
                </div>
                <div className="group flex bg-[#C3E1E7] rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute top-[40%] right-[-2%] sm:right-[-1%] md:right-[-6%] overflow-hidden banner_tick-animate-wrap__7tPRE">
                  <div className="w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%] group-hover:scale-[20] banner_tick-animate__Cw5VR"></div>
                  <div className="w-[19px] h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] top-[50%] translate-x-[-2%] translate-y-[-50%]">
                    <div className="w-[8px] h-[4px] sm:w-[14px] sm:h-[8px] justify-center items-center flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.188"
                        height="11.021"
                        viewBox="0 0 16.188 11.021"
                        className
                      >
                        <path
                          id="Path_4891"
                          data-name="Path 4891"
                          d="M-1939.354-218.176l5.416,5.14,9.4-8.917"
                          transform="translate(1940.042 222.678)"
                          fill="none"
                          stroke="#44aec4"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[8px] leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[21px] text-left z-1 undefined">
                    TvOS Kiosk Active
                  </span>
                </div>
                <div className="group flex bg-[#BCDCBE] rounded-[21px] p-[5px_10px_5px_25px] sm:p-[10px_20px_10px_45px] absolute bottom-[13%] right-[26%] z-2 overflow-hidden banner_tick-animate-wrap__7tPRE ">
                  <div className="w-[19px] h-[19px] sm:w-[33px] flex items-center sm:h-[33px] bg-[#FFFFFF] rounded-[21px] absolute left-[2%] translate-x-[-2%] min-[391px]:left-[3%] top-[50%] min-[391px]:top-[51%] min-[391px]:translate-x-[-3%] translate-y-[-50%] min-[391px]:translate-y-[-51%] group-hover:scale-[20] banner_tick-animate__Cw5VR"></div>
                  <div className="w-[19px] h-[19px] sm:w-[33px] sm:h-[33px] absolute flex items-center justify-center left-[2%] translate-x-[-2%] min-[391px]:left-[3%] top-[50%] min-[391px]:top-[51%] min-[391px]:translate-x-[-3%] translate-y-[-50%] min-[391px]:translate-y-[-51%]">
                    <div className="w-[8px] h-[4px] sm:w-[14px] sm:h-[8px] justify-center items-center flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.188"
                        height="11.021"
                        viewBox="0 0 16.188 11.021"
                        className
                      >
                        <path
                          id="Path_4891"
                          data-name="Path 4891"
                          d="M-1939.354-218.176l5.416,5.14,9.4-8.917"
                          transform="translate(1940.042 222.678)"
                          fill="none"
                          stroke="#35943b"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span className="text-[8px] leading-[11px] min-[391px]:text-[11px] min-[391px]:leading-[14px] text-[#020A19] font-normal min-[480px]:text-[16px] min-[480px]:leading-[18px] md:text-[20px] md:leading-[21px] text-left z-1 undefined">
                    Device Enrolled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Banner;
