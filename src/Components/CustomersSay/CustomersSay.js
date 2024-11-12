import React from "react";
import Slider from "react-slick"; 
import justinmodrak from "../../images/CustomersSay/justinmodrak.webp";
import daliborkruljac from "../../images/CustomersSay/daliborkruljac.webp";
import chrisrobinson from "../../images/CustomersSay/chrisrobinson.webp";
// logo slider img
import wolt from "../../images/CustomersSay/1wolt.svg";
import marriottintl from "../../images/CustomersSay/2marriott-intl.svg";
import merck from "../../images/CustomersSay/3merck.svg";
import costco from "../../images/CustomersSay/4costco.svg";
import saic from "../../images/CustomersSay/5saic.svg";
import hilton from "../../images/CustomersSay/6hilton.svg";
import group1automotive from "../../images/CustomersSay/7group1-automotive.webp";
import lowes from "../../images/CustomersSay/8lowes.svg";
import polaris from "../../images/CustomersSay/9polaris.svg";
import gorillas from "../../images/CustomersSay/10gorillas.svg";


const CustomArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className} 
      style={{ ...style, display: 'block', background: 'grey' }}  // Customize arrow style here
      onClick={onClick}
    />
  );
};

const CustomersSay = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow />,   
    prevArrow: <CustomArrow />,   
  };

    // Logo slider settings
    const logoSettings = {
      dots: false,
      infinite: true,
      speed: 800,
      speed: 500,
      slidesToShow: 7,  
      slidesToScroll: 1,
      arrows: false,  
      autoplay: true,  
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,  
            slidesToScroll: 1
          }
        }
      ]
    };

return (
<div className="pt-[60px] lg:pt-[80px] bg-[#FFFFFF] relative">
  <div className="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0" id="customers"></div>
  <div className="w-[88%] mx-auto max-w-[1300px]">
    <h2
      className="antialiased text-[32px] md:text-[40px] leading-[40px] md:leading-[1.3] text-center font-bold text-[#020a19] pb-0 md:pb-[20px] text-botttm">
      What
      our customers
      say</h2>
    <div
      className="max-w-[280px] sm:max-w-[400px] d-none-slider md:max-w-[960px] lg:max-w-[780px] xl:max-w-[960px] pt-[40px] pb-[80px] relative mx-auto lg:pb-0">
    </div>
    <div className="cusreviewslider_slider-wrapper__VBzwn">
      <Slider {...settings} className="slick-slider slick-initialized" dir="ltr">
        <div className="slick-slide slick-active slick-current" style={{ outline: 'none' , width: '33.333%' }}>
          <div className="d-flex-slider flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group">
            <div
              className="max-h-[400px] w-[280px] sm:w-[400px] sm:h-[400px] lg:w-[320px] lg:h-[320px] test-img relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden">
              <img alt="Justin Modrak image" loading="lazy" decoding="async" className="object-cover align-middle"
                style={{ position: 'absolute' , height: '100%' , width: '100%' , left: '0' , top: '0' , right: '0' ,
                bottom: '0' , color: 'transparent' , }}
                src={justinmodrak} />
            </div>
            <div className="max-w-[640px] bg-[#f7f7f7] flex justify-between flex-col grow">
              <div className="md:min-h-[135px] md:max-h-[135px] md:overflow-scroll px-[20px] pt-[20px] pb-[30px] md:px-[40px] md:py-0 md:mt-[40px] cusreviewslider_hide-scrollbar__lQqUC">
                <h4 className="text-[16px] md:text-left sm:text-[20px] md:text-[24px] sm:leading-[32px] leading-[24px] text-center text-[#020a19] font-bold antialiased">
                  "Hexnode is of great value. Works great with Android and iOS!"
                </h4>
              </div>
              <div
                className="px-[20px] py-[12px] md:px-[40px] md:py-0 border-t-[1px] border-white/30 flex flex-col justify-center items-center min-h-[73px] md:min-h-[120px] bg-[#020a19]/5 border-red-0">
                <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold">Justin Modrak</p>
                <small className="text-left mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">Technology Coordinator, East Troy Community
                  School District</small>
              </div>
            </div>
          </div>
        </div>
        <div className="slick-slide" style={{ outline: 'none' , width: '33.333%' }}>
          <div className="d-flex-slider flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group">
            <div
              className="max-h-[400px] w-[280px] sm:w-[400px] sm:h-[400px] lg:w-[320px] lg:h-[320px] test-img relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden">
              <img alt="Dalibor Kruljac image" loading="lazy" decoding="async" className="object-cover align-middle"
                style={{ position: 'absolute' , height: '100%' , width: '100%' , left: '0' , top: '0' , right: '0' ,
                bottom: '0' , color: 'transparent' , }}
                src={daliborkruljac} />
            </div>
            <div className="max-w-[640px] bg-[#f7f7f7] flex justify-between flex-col grow">
              <div className="md:min-h-[135px] md:max-h-[135px] md:overflow-scroll px-[20px] pt-[20px] pb-[30px] md:px-[40px] md:py-0 md:mt-[40px] cusreviewslider_hide-scrollbar__lQqUC">
                <h4 className="text-[16px] md:text-left sm:text-[20px] md:text-[24px] sm:leading-[32px] leading-[24px] text-center text-[#020a19] font-bold antialiased">
                  "Most complete MDM solution I found, and I tested many of them, including major names"
                </h4>
              </div>
              <div
                className="px-[20px] py-[12px] md:px-[40px] md:py-0 border-t-[1px] border-white/30 flex flex-col justify-center items-center min-h-[73px] md:min-h-[120px] bg-[#020a19]/5 border-red-0">
                <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold">Dalibor Kruljac</p>
                <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">KAMELEYA LTD</small>
              </div>
            </div>
          </div>
        </div>
        <div className="slick-slide" style={{ outline: 'none' , width: '33.333%' }}>
          <div className="d-flex-slider flex flex-col md:flex-row overflow-hidden rounded-[18px] relative group">
            <div
              className="max-h-[400px] w-[280px] sm:w-[400px] sm:h-[400px] lg:w-[320px] lg:h-[320px] test-img relative md:basis-[47%] md:max-w-[320px] leading-[0px] overflow-hidden">
              <img alt="Chris Robinson image" loading="lazy" decoding="async" className="object-cover align-middle"
                style={{ position: 'absolute' , height: '100%' , width: '100%' , left: '0' , top: '0' , right: '0' ,
                bottom: '0' , color: 'transparent' , }}
                src={chrisrobinson} />
            </div>
            <div className="max-w-[640px] bg-[#f7f7f7] flex justify-between flex-col grow">
              <div className="md:min-h-[135px] md:max-h-[135px] md:overflow-scroll px-[20px] pt-[20px] pb-[30px] md:px-[40px] md:py-0 md:mt-[40px] cusreviewslider_hide-scrollbar__lQqUC">
                <h4 className="text-[16px] md:text-left sm:text-[20px] md:text-[24px] sm:leading-[32px] leading-[24px] text-center text-[#020a19] font-bold antialiased">
                  "It seemed to be in-line with everything we were looking at."
                </h4>
              </div>
              <div
                className="px-[20px] py-[12px] md:px-[40px] md:py-0 border-t-[1px] border-white/30 flex flex-col justify-center items-center min-h-[73px] md:min-h-[120px] bg-[#020a19]/5 border-red-0">
                <p className="text-center md:text-left w-full mx-auto text-[14px] leading-[11px] sm:text-[20px] sm:leading-[33px] pb-[5px] sm:pb-0 text-[#020a19] font-bold">Chris Robinson</p>
                <small className="text-center mx-auto md:mr-auto md:ml-[unset] text-[12px] leading-[16px] sm:text-[14px] sm:leading-[18px] text-[#020a19] font-normal max-w-[294px] opacity-70 ">Executive Account Manager, NCS</small>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>

  {/* Logo slider */}
  <div className="w-[88%] mx-auto max-w-[1300px] relative pt-[40px] pb-[60px] lg:pb-[80px] lg:pt-[50px] bg-[#FFFFFF]">
  <div className="relative">
  <div class="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute left-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-transparent z-[1]"></div>
  </div>
  <Slider {...logoSettings}>
  
        <div>
          <img src={wolt} alt="Logo 1" />
        </div>
        <div>
          <img src={marriottintl} alt="Logo 2" />
        </div>
        <div>
          <img src={merck} alt="Logo 3" />
        </div>
        <div>
          <img src={costco} alt="Logo 4" />
        </div>
        <div>
          <img src={saic} alt="Logo 5" />
        </div>
        <div>
          <img src={hilton} alt="Logo 6" />
        </div>
        <div>
          <img src={group1automotive} alt="Logo 7" />
        </div>
        <div>
          <img src={lowes} alt="Logo 7" />
        </div>
        <div>
          <img src={polaris} alt="Logo 7" />
        </div>
        <div>
          <img src={gorillas} alt="Logo 7" />
        </div>
        {/* Add more logos as needed */}
      </Slider>
      <div className="absolute right-0 top-0">
      <div class="w-[70px] sm:w-[100px] h-[40px] sm:h-[80px] absolute right-0 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF] to-transparent z-[1]"></div>
  </div>
  </div>


  {/* start securing */}

  <section
        class="bg-[#020a19] flex justify-center items-center md:h-[330px]  py-[50px] md:py-0">
        <div
            class="absolute top-[-65px] xl:top-[-74px] opacity-0 w-[0px] h-[0px] m-0">
        </div>
        <div
            class="w-[88%] mx-auto md:max-w-[1300px]">
            <div
                class="w-full text-center max-w-[1000px] mx-auto">
                <h3
                    class="text-[30px] text-[#fff] font-bold leading-[38px] text-center mb-[20px] md:text-[42px] md:leading-[1.3]">
                    Get Hexnode UEM and start securing your endpoints</h3>
            </div>
            <div
                class="max-w-[325px] md:max-w-[302px] mx-auto"><a
                    class="bg-[#DD0735] hover:bg-[#AA232F] flex items-center justify-center py-[15px] transition-all duration-300 ease-out rounded-[3px]"
                    rel="noreferrer"
                    href="#"><span
                        class="undefined uppercase font-normal text-[14px] leading-[20px] text-[#FFFFFF] md:text-[17px] md:leading-[24px]">TRY
                        HEXNODE FOR FREE</span></a></div>
        </div>
    </section>

</div>
);
};

export default CustomersSay;