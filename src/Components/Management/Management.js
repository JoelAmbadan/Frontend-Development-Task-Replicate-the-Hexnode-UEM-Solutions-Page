import React from "react";
import zerotouch1 from "../../images/management/zero-touch1.webp";
import automation2 from "../../images/management/automation2.webp";
import remoteaccess3 from "../../images/management/remote-access3.webp";
import endpointsecurity4 from "../../images/management/endpoint-security4.webp";
import integrations5 from "../../images/management/integrations5.webp";
import appmanagement6 from "../../images/management/app-management6.webp";

function Management() {
  return (
    <div class="py-[60px] lg:py-[80px] relative">
      <div
        class="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0"
        id="features"
      ></div>
      <div class="w-[88%] mx-auto max-w-[1300px]">
        <h2 class="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-[40px] md:pb-[60px] max-w-[800px] mx-auto">
          Powerful endpoint management, built for the devices you choose
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] xl:gap-[80px] flex-mob-acco">
          <div class="max-w-[340px] md:max-w-[380px] mx-auto">
            <div class="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
              <img
                alt="Zero touch enrolment with Hexnode UEM"
                loading="lazy"
                width="380"
                height="240"
                decoding="async"
                data-nimg="1"
                class="relative"
                style={{ color: "transparent" }}
                srcSet={zerotouch1}
                src={zerotouch1}
              />
            </div>
            <h2 class="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
              Zero-touch Enrollment
            </h2>
            <p class="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
              Onboard endpoints and users with minimal user intervention.
              Provision devices and set up configurations well before the user
              gets their hands on.
            </p>
          </div>
          <div class="max-w-[340px] md:max-w-[380px] mx-auto">
            <div class="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
              <img
                alt="Device management automation with Hexnode UEM"
                loading="lazy"
                width="380"
                height="240"
                decoding="async"
                data-nimg="1"
                class="relative"
                style={{ color: "transparent" }}
                srcSet={automation2}
                src={automation2}
              />
            </div>
            <h2 class="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
              Automation
            </h2>
            <p class="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
              Automate endpoint compliance with dynamic grouping and breeze
              through day-to-day IT tasks with scripting capabilities. Hexnode
              also allows the creation of automated reports.
            </p>
          </div>
          <div class="max-w-[340px] md:max-w-[380px] mx-auto">
            <div class="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
              <img
                alt="Remote access management with Hexnode UEM"
                loading="lazy"
                width="380"
                height="240"
                decoding="async"
                data-nimg="1"
                class="relative"
                style={{ color: "transparent" }}
                srcSet={remoteaccess3}
                src={remoteaccess3}
              />
            </div>
            <h2 class="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
              Remote Access Management
            </h2>
            <p class="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
              Hexnode UEM enables the enterprise to manage every single device
              in the corporate ecosystem for optimal and secure operation.
            </p>
          </div>
          <div class="max-w-[340px] md:max-w-[380px] mx-auto">
            <div class="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
              <img
                alt="Endpoint Security and Compliance with Hexnode UEM"
                loading="lazy"
                width="380"
                height="240"
                decoding="async"
                data-nimg="1"
                class="relative"
                style={{ color: "transparent" }}
                srcSet={endpointsecurity4}
                src={endpointsecurity4}
              />
            </div>
            <h2 class="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
              Endpoint Security and Compliance
            </h2>
            <p class="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
              Hexnode helps you maintain compliance with international
              regulatory bodies and set up custom rules for compliance within
              your business for security purposes.
            </p>
          </div>
          <div class="max-w-[340px] md:max-w-[380px] mx-auto">
            <div class="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
              <img
                alt="Hexnode UEM Integrations"
                loading="lazy"
                width="380"
                height="240"
                decoding="async"
                data-nimg="1"
                class="relative"
                style={{ color: "transparent" }}
                srcSet={integrations5}
                src={integrations5}
              />
            </div>
            <h2 class="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
              Integrations
            </h2>
            <p class="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
              Hexnode&#x27;s various integrations make it easy to fit into your
              current endpoint ecosystem. These integrations include Azure AD,
              Okta, Android Enterprise, Apple School and Business manager, and
              many more enterprise and technology integrations.
            </p>
          </div>
          <div class="max-w-[340px] md:max-w-[380px] mx-auto">
            <div class="rounded-[10px] bg-[#F7F7F7] overflow-hidden w-full max-w-[380px] max-h-[240px]">
              <img
                alt="App Management with Hexnode UEM"
                loading="lazy"
                width="380"
                height="240"
                decoding="async"
                data-nimg="1"
                class="relative"
                style={{ color: "transparent" }}
                srcSet={appmanagement6}
                src={appmanagement6}
              />
            </div>
            <h2 class="antialiased text-[24px] xl:text-[32px] leading-[26px] xl:leading-[40px] text-center md:text-left font-bold text-[#020a19] pb-[15px] pt-[20px] md:pb-[20px] md:pt-[40px]">
              App Management
            </h2>
            <p class="text-[16px] xl:text-[18px] leading-[24px] xl:leading-[28px] text-center md:text-left font-regular text-[#333333]">
              Set up a bespoke app store, enable mandatory apps, and ensure
              endpoints come equipped with all the required applications, custom
              enterprise apps included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Management;
