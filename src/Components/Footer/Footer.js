import React, { useEffect, useState } from 'react';
import "../Footer/Footer.css"
import chrisrobinson from "../../images//footer/trail_bg.jpg";

function Footer() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 3000);

        return () => clearTimeout(timer); // Clean up timer if component unmounts
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <footer>
                <nav>
                    <div className="bg-[#f2f2f2] p-[30px_0] sm:p-[20px_0]">
                        <div className="w-[88%] mx-auto md:max-w-[1300px]">
                            <div className="flex flex-col flex-wrap justify-center items-center w-full sm:flex-row sm:justify-between">
                                <div className="flex flex-col sm:flex-row">
                                    <div className="m-[0_0_20px] order-1 sm:m-0 sm:order-2">
                                        <ul className="flex flex-row flex-wrap p-0 m-0">
                                            <li className="inline-block leading-1 list-none after:content-['-'] after:text-[14px] after:leading-1 after:inline-flex after:p-[0_5px] after:opacity-8 last:after:hidden">
                                                <a className="text-[12px] leading-[24px] text-text-default font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]" role="link" href="#">Terms of Use</a>
                                            </li>
                                            <li className="inline-block leading-1 list-none after:content-['-'] after:text-[14px] after:leading-1 after:inline-flex after:p-[0_5px] after:opacity-8 last:after:hidden">
                                                <a className="text-[12px] leading-[24px] text-text-default font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]" role="link" href="#">Privacy</a>
                                            </li>
                                            <li className="inline-block leading-1 list-none after:content-['-'] after:text-[14px] after:leading-1 after:inline-flex after:p-[0_5px] after:opacity-8 last:after:hidden">
                                                <a className="text-[12px] leading-[24px] text-text-default font-medium cursor-pointer transition-all duration-[0.3s] ease-in-out hover:text-[#020a19]" role="link" href="#">Cookies</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex order-3">
                                    <p className="text-[12px] leading-[24px] text-text-default font-medium m-0">
                                        Copyright © 2024 Mitsogo Inc. All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </footer>

            {/* Modal Section */}
            {showModal && (
                <div id="ouibounce-modal" className="w-full h-full fixed top-0 left-0 z-[201]">
                   
                    <div className="exit-popup_popup-fadeIn__zFjAH absolute top-0 right-0 bottom-0 left-0 z-[202] mx-auto" id="modal-free-demo">
                        <div className="w-[90%] mx-auto my-[7rem] relative md:my-30 max-w-[340px] sm:max-w-[600px] lg:max-w-[800px] h-[512px] sm:h-[340px] lg:h-[425px]" role="document">
                       
                            <div className="relative bg-white min-h-[200px] w-full h-full rounded-[10px] shadow-[0_3px_9px_0px_rgba(0,0,0,0.5)] overflow-y-visible overflow-x-auto max-h-[750px] md:shadow-[0_5px_15px_0px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center backimg" style={{ backgroundImage: `url(${chrisrobinson})` }}
                            >
                            <div className="popup-close" onClick={closeModal}>x</div>
                                {/* Modal Content */}
                                <div className="w-[100%] relative p-[20px] pb-[30px] sm:p-[20px_0px_20px_45px] lg:p-[20px_0px_20px_70px]">
                                    <div className="exit-popup_popup-title__ZNNvv text-[32px] lg:text-[36px] leading-[42px] text-title-black font-extrabold text-center sm:text-left mb-[10px]">Leaving so soon?</div>
                                    <p className="exit-popup_popup-paragraph__lVmSH text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] text-title-black font-normal text-center sm:text-left mb-[10px] subpixel-antialiased max-w-[300px] lg:max-w-[335px] mx-auto sm:mx-0">
                                        It takes a bit more time to get to know Hexnode. How about watching a demo to quickly understand how Hexnode works?
                                    </p>
                                    <div className="exit-popup_popup-btn-wrapper__cyvVs flex justify-center sm:justify-start">
                                        <a className="text-[16px] leading-[18px] font-semibold uppercase text-white text-center rounded-[5px] bg-[#DD0735] border border-solid border-[#DD0735] p-[17px_44px] hover:bg-[#BB022A]" href="#">WATCH DEMO</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Footer;
