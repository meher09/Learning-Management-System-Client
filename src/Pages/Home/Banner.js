import React from 'react';
import SquareSvg from '../../componennts/SquareSvg';

const Banner = () => {
    return (
        <div className="bg-blue-900">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <a href="/" className="mb-6 sm:mx-auto">
                            <div className="flex items-center justify-center w-24 h-24 text-lg rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 50 210 217">
                                    <g id="python_logo_svg_image">
                                        <path id="white_outside_rim" fill="#FFFFFF" stroke="#000000" stroke-width="1" d="M103.51297 237.49813c19.3692 0 38.52756-10.93993 38.52756-19.98852v-22.11293c0-2.06503 1.97639-4.00913 3.8783-4.00913 5.52127.0192 14.1161.0627 22.49225.0633 9.12946 0 20.12459-18.7564 20.12459-37.95693 0-19.20048-11.03603-38.19197-20.16412-38.19197h-22.31208c-2.2956 0-3.9893-1.70771-3.9893-3.98929V89.258462c0-9.04859-19.15835-19.98851-38.52756-19.98851-19.369233 0-38.290462 10.89937-38.290462 19.94932-.03372 7.34602.06594 14.752898.0592 22.087668 0 2.30332-1.721517 4.04174-4.021 4.04324-5.522256-.0194-14.048404-.0623-22.365499-.0629-9.129471 0-20.124601 18.89524-20.124601 38.09576 0 19.2005 11.03606 38.05318 20.164141 38.05318h22.342715c2.020541 0 3.933095 1.93988 3.933095 3.96041-.01005 3.23603-.01749 18.76475-.01775 22.1516 0 9.04994 18.921228 19.94931 38.290461 19.94931z"><title>White Outside Rim</title></path>
                                        <path id="blue_snake" fill="#3770A0" stroke="#000" stroke-width="1" d="M166.6436 119.60208h-20.78071c-2.10294.0172-3.79583 1.68176-3.79583 3.95449v13.49755c0 .99923-.99427 1.97931-2.00239 1.97931-1.00815 0-1.9967-.98008-1.9967-1.97931v-1.1711c.003-19.89722-.25537-33.57989-.25537-45.934478 0-7.87776-21.24907-16.03835-34.09501-16.00718-12.845933.0312-34.09501 8.1297-34.09501 17.17828v20.412028c.0173 2.08464 1.696557 3.76329 3.989257 3.76329 9.94255 0 19.1775-.15355 28.243613-.0332 1.99662 0 4.02791 1.97825 4.02791 3.99185V183.14949c0 1.97916 1.99684 3.95862 3.99341 3.95862h56.76683c9.12957 0 17.6531-20.70086 17.621-33.71701-.0321-13.01616-8.49292-33.78898-17.621-33.78898z"><title>Blue Snake</title></path>
                                        <circle id="blue_snake_apostrophe_s_eye" cx="84.777267" cy="93.94384" r="6.9395089" fill="#FFFFFF"><title>Blue Snake's Eye</title></circle>
                                        <g id="yellow_snake_rotated_transformed" class="transform rotate" transform="rotate(-180 6.134072 140.65693)">
                                            <path id="yellow_snake" stroke-width="1" fill="#FFCF3E" stroke="#000000" d="M-28.453764 94.177867h-20.780708c-2.102941.0172-3.795832 1.681761-3.795832 3.954492v13.497551c0 .99923-.99427 1.97931-2.00239 1.97931-1.00815 0-1.9967-.98008-1.9967-1.97931v-1.1711c.003-19.897223-.25537-33.579893-.25537-45.934481 0-7.87776-21.249069-16.03835-34.09501-16.00718-12.845936.0312-34.095006 8.1297-34.095006 17.17828v20.412027c.0173 2.084642 1.69655 3.763291 3.98925 3.763291 9.94255 0 19.1775-.153549 28.243616-.0332 1.996619 0 4.02791 1.97825 4.02791 3.991851v63.895882c0 1.97916 1.99684 3.95862 3.99341 3.95862h56.76683c9.129568 0 17.653098-20.70086 17.620998-33.71701-.0321-13.01616-8.49292-33.788983-17.620998-33.788983z"><title>Yellow Snake</title></path>
                                            <circle id="yellow_snake_apostrophe_s_eye" cx="-110.3201" cy="68.51963" r="6.9395089" fill="#fff"><title>Yellow Snake's Eye</title></circle>
                                        </g>

                                    </g>
                                </svg>
                            </div>
                        </a>
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <SquareSvg></SquareSvg>
                                    <span className="relative">পাইথনের</span>
                                </span>{' '}
                                ভয়,  আর নয়
                            </h2>
                            <p className="text-base text-indigo-100 md:text-lg">
                                অনেকেই প্রোগ্রামিং ল্যাংগুয়েজের নাম শুনেই ভয় পায়। আর প্রোগ্রামিং ভয় জয় করার জন্যই এই কোর্স । এখানে আমরা খেলতে খেলতেই পাইথন শিখব
                            </p>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="inline-flex border-white border-2 items-center justify-center h-12 px-6 font-semibold tracking-wide text-blue-50 transition duration-200 rounded shadow-md bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
                            >
                                শুরু হোক পথচলা
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;