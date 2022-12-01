import React from 'react';
import RoundedZigZag from '../../componennts/RoundedZigZag';
import SquareSvg from '../../componennts/SquareSvg';

const Features = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-blue-900">
                        সিলেবাস
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-800 sm:text-4xl md:mx-auto">
                    কোর্সে যা শেখানো হবে
                </h2>
                <p className="text-base text-gray-900 md:text-lg">
                    কোর্সটি মুলত সাজানো হয়েছে পাইথনের মাধ্যমে অটোমেশনে আগ্রহীদের জন্য । কোর্সটি নিউবি ফ্রেন্ডলি। যারা এসইও নিয়ে কাজ করেন উনাদের জন্য কোর্সটি মাইলফল হতে পারে। এছাড়া নিউবিরাও চাইলে পাইথন শিখতে পারবেন
                </p>
            </div>
            <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
                <div className="space-y-6 sm:px-16">
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 border border-blue-900 rounded-full sm:w-10 sm:h-10"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl text-blue-900 font-bold leading-5">
                                পাইথন বেসিক
                            </h6>
                            <p className="text-sm text-gray-900">
                                দ্রুত কয়েকটি ভিডিও দেখে আমরা বানিয়ে ফেলব পাইথনের বেসিক টেম্পলেট
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <RoundedZigZag></RoundedZigZag>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl text-blue-900 font-bold leading-5">
                                ডাটা স্ক্রাপিং
                            </h6>
                            <p className="text-sm text-gray-900">
                                রিকুয়েস্ট মডিউলের বেসিককে কাজে লাগিয়ে দ্রুত শিখে ফেলব স্ক্রাপিং । ঝটপট ৭/৮ টা সাইটের ডাটা স্ক্রাপ করে নিব
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <RoundedZigZag></RoundedZigZag>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl text-blue-900 font-bold leading-5">
                                এডভান্স পাইথন
                            </h6>
                            <p className="text-sm text-gray-900">
                                পাইথনের স্কিলকে ডেভেলপমেন্টের জন্য দরকার হবে পাইথনের এডভান্স ফাংশনালিটি । এডভান্স পাইথন স্কিল গুলা নিয়ে থাকবে আলাদা টিউটোড়িয়াল
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-6 sm:px-16">
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <RoundedZigZag></RoundedZigZag>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl text-blue-900 font-bold leading-5">
                                এপি আই ইউজেস
                            </h6>
                            <p className="text-sm text-gray-900">
                                এপি আই কিভাবে ইউজ করতে হয়, কিভাবে রিকুয়েস্ট দিতে হয়, কিভাবে ডাটা প্রসেস করতে হয়
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <RoundedZigZag></RoundedZigZag>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold text-blue-900 leading-5">
                                ইমেজ প্রসেসিং
                            </h6>
                            <p className="text-sm text-gray-900">
                                পাইথনের পিলো লাইব্রেরির ডুকুমেন্টেশন দেখে দেখে আমরা পিলো লাইব্রেরির ব্যবহার শিখব । সেই সাথে একটু টাচ দিয়ে যাব <strong>ওপেন সিভি</strong>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-md sm:flex-row">
                        <div className="mb-4 mr-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <RoundedZigZag></RoundedZigZag>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-3 text-xl font-bold text-blue-900 leading-5">
                                ডাটা রেংগেলিং ও জ্যাংগো
                            </h6>
                            <p className="text-sm text-gray-900">
                                মেশিন লার্নিং বেসিক আইডিয়া, ডাটা সায়েন্স ও জ্যাংগোতে ছোট খাট একটা সাইট বানিয়ে ফেলব আমরা ।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;