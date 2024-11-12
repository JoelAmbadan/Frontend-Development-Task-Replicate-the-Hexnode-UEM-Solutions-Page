import React, { useState } from "react";
import android1 from "../../images/Multiplatform/android1.webp";
import iOS2 from "../../images/Multiplatform/iOS2.webp";
import macOS3 from "../../images/Multiplatform/macOS3.webp";
import windows4 from "../../images/Multiplatform/windows4.webp";
import tvOS5 from "../../images/Multiplatform/tvOS5.webp";
import fireOS6 from "../../images/Multiplatform/fireOS6.webp";

const AccordionComponent = () => {
  const [activeSection, setActiveSection] = useState("android");

  const handleAccordionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div class="py-[60px] lg:pt-[80px] lg:pb-[80px] bg-[#f7f7f7] relative">
      <div
        class="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0"
        id="platforms"
      ></div>
      <div class="sm:w-[88%] sm:max-w-[1300px] sm:mx-auto">
        <h2 class="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[20px] md:pb-[20px] max-sm:max-w-[1300px] max-sm:w-[88%] mx-auto">
          Multi-platform Endpoint Management
        </h2>
        <p class="hidden md:block text-[16px] md:text-[18px] leading-[28px] text-center font-regular text-[#333333]">
          Devices of varying platforms? Hexnode thrives in a diverse
          environment.
        </p>
        <div className="flex items-start justify-between md:pt-[50px] flex-mob-acco">
          {/* Image Container */}
          <div className="shrink-0 md:w-[46%] md:max-w-[600px] h-full max-h-[565px] relative overflow-hidden">
            <div className="image-container flex-center-new">
              <img
                alt="Android Management with Hexnode UEM"
                width="600"
                height="565"
                src={android1}
                className={`animate-fade image ${
                  activeSection === "android" ? "active-image" : ""
                }`}
              />
              <img
                alt="iOS management with Hexnode UEM"
                width="600"
                height="565"
                src={iOS2}
                className={`image ${
                  activeSection === "ios" ? "active-image" : ""
                }`}
              />
              <img
                alt="macOS management with Hexnode UEM"
                width="600"
                height="565"
              src={macOS3}
                className={`image ${
                  activeSection === "macOS" ? "active-image" : ""
                }`}
              />
              <img
                alt="Windows management with Hexnode UEM"
                width="600"
                height="565"
                src={windows4}
                className={`image ${
                  activeSection === "Windows" ? "active-image" : ""
                }`}
              />
              <img
                alt="tvOS management with Hexnode UEM"
                width="600"
                height="565"
                src={tvOS5}
                className={`image ${
                  activeSection === "tvOS" ? "active-image" : ""
                }`}
              />
              <img
                alt="FireOS management with Hexnode UEM"
                width="600"
                height="565"
                src={fireOS6}
                className={`image ${
                  activeSection === "FireOS" ? "active-image" : ""
                }`}
              />
            </div>
          </div>

          {/* Accordion Container */}
          <div className="min-h-[375px] md:w-[54%] md:max-w-[700px] shrink-0 w-full relative pl-[40px] sec-wrap-accordion">
            {/* Android Section */}
            <div
              className={`relative group mx-[30px] border-b border-[#D7D7D7] accordion-section ${
                activeSection === "android" ? "open" : ""
              }`}
              onClick={() => handleAccordionClick("android")}
            >
              <h3
                className={`text-[#050607] cursor-pointer font-bold text-[24px] leading-[30px] text-left py-[20px] animate-top-to-bottom ${
                  activeSection === "android" ? "active-heading" : ""
                }`}
              >
                Android
              </h3>
              {activeSection === "android" && (
                <div className="accordion-content animate-fade">
                  <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[10px]">
                    Remotely deploy, manage, monitor, and secure Android devices
                    in your organization. Set compliance benchmarks and leverage
                    Android Enterprise to its full capabilities.
                  </p>
                  <a
                    className="text-[18px] md:text-[20px] leading-[28px] text-[#DD0735] font-semibold mt-[20px]"
                    href="#"
                  >
                    Try Hexnode on your endpoints
                  </a>
                </div>
              )}
            </div>

            {/* iOS Section */}
            <div
              className={`relative group mx-[30px] border-b border-[#D7D7D7] accordion-section ${
                activeSection === "ios" ? "open" : ""
              }`}
              onClick={() => handleAccordionClick("ios")}
            >
              <h3
                className={`text-[#050607] cursor-pointer font-bold text-[24px] leading-[30px] text-left py-[20px] animate-top-to-bottom ${
                  activeSection === "ios" ? "active-heading" : ""
                }`}
              >
                iOS
              </h3>
              {activeSection === "ios" && (
                <div className="accordion-content animate-fade">
                  <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[10px]">
                    Manage, secure, and monitor iOS devices in your
                    organization. With Hexnode’s ABM and ASM integration, deploy
                    devices and apps with ease.
                  </p>
                  <a
                    className="text-[18px] md:text-[20px] leading-[28px] text-[#DD0735] font-semibold mt-[20px]"
                    href="#"
                  >
                    Try Hexnode on your endpoints
                  </a>
                </div>
              )}
            </div>

            {/* macOS Section */}
            <div
              className={`relative group mx-[30px] border-b border-[#D7D7D7] accordion-section ${
                activeSection === "macOS" ? "open" : ""
              }`}
              onClick={() => handleAccordionClick("macOS")}
            >
              <h3
                className={`text-[#050607] cursor-pointer font-bold text-[24px] leading-[30px] text-left py-[20px] animate-top-to-bottom ${
                  activeSection === "macOS" ? "active-heading" : ""
                }`}
              >
                macOS
              </h3>
              {activeSection === "macOS" && (
                <div className="accordion-content animate-fade">
                  <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[10px]">
                    Leverage Hexnode’s desktop management capabilities to their
                    fullest. Securely deploy and manage macOS devices in bulk
                    with Hexnode UEM.
                  </p>
                  <a
                    className="text-[18px] md:text-[20px] leading-[28px] text-[#DD0735] font-semibold mt-[20px]"
                    href="#"
                  >
                    Try Hexnode on your endpoints
                  </a>
                </div>
              )}
            </div>

            {/* Windows Section */}
            <div
              className={`relative group mx-[30px] border-b border-[#D7D7D7] accordion-section ${
                activeSection === "Windows" ? "open" : ""
              }`}
              onClick={() => handleAccordionClick("Windows")}
            >
              <h3
                className={`text-[#050607] cursor-pointer font-bold text-[24px] leading-[30px] text-left py-[20px] animate-top-to-bottom ${
                  activeSection === "Windows" ? "active-heading" : ""
                }`}
              >
                Windows
              </h3>
              {activeSection === "Windows" && (
                <div className="accordion-content animate-fade">
                  <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[10px]">
                    Spearhead modern PC management in your organization with
                    Hexnode. Set limit’s and monitor PC health and compliance
                    remotely with Hexnode UEM.
                  </p>
                  <a
                    className="text-[18px] md:text-[20px] leading-[28px] text-[#DD0735] font-semibold mt-[20px]"
                    href="#"
                  >
                    Try Hexnode on your endpoints
                  </a>
                </div>
              )}
            </div>

            {/* tvOS Section */}
            <div
              className={`relative group mx-[30px] border-b border-[#D7D7D7] accordion-section ${
                activeSection === "tvOS" ? "open" : ""
              }`}
              onClick={() => handleAccordionClick("tvOS")}
            >
              <h3
                className={`text-[#050607] cursor-pointer font-bold text-[24px] leading-[30px] text-left py-[20px] animate-top-to-bottom ${
                  activeSection === "tvOS" ? "active-heading" : ""
                }`}
              >
                tvOS
              </h3>
              {activeSection === "tvOS" && (
                <div className="accordion-content animate-fade">
                  <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[10px]">
                    Remotely manage and secure tvOS devices with Hexnode.
                    Display your brand aesthetics and custom messages on tvOS
                    devices with Hexnode UEM.
                  </p>
                  <a
                    className="text-[18px] md:text-[20px] leading-[28px] text-[#DD0735] font-semibold mt-[20px]"
                    href="#"
                  >
                    Try Hexnode on your endpoints
                  </a>
                </div>
              )}
            </div>

            {/* FireOS Section */}
            <div
              className={`relative group mx-[30px] border-b border-[#D7D7D7] accordion-section ${
                activeSection === "FireOS" ? "open" : ""
              }`}
              onClick={() => handleAccordionClick("FireOS")}
            >
              <h3
                className={`text-[#050607] cursor-pointer font-bold text-[24px] leading-[30px] text-left py-[20px] animate-top-to-bottom ${
                  activeSection === "FireOS" ? "active-heading" : ""
                }`}
              >
                FireOS
              </h3>
              {activeSection === "FireOS" && (
                <div className="accordion-content animate-fade">
                  <p className="text-[#333333] font-normal text-[18px] leading-[28px] pt-[10px]">
                    Enroll Amazon Fire tablets, phones and e-readers in Hexnode
                    UEM to manage them all from a single console.
                  </p>
                  <a
                    className="text-[18px] md:text-[20px] leading-[28px] text-[#DD0735] font-semibold mt-[20px]"
                    href="#"
                  >
                    Try Hexnode on your endpoints
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
