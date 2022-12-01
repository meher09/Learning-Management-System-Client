import React from 'react';

const Reviews = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-blue-900">
                            আবদুল আউয়াল
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-900 sm:text-4xl md:mx-auto">
                        স্কিল ডেভেলমেন্ট এর কোর্স
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        এই কোর্সটি মুলত পাইথনের স্কিল ডেভেলপমেন্ট ভিত্তিক কোর্স।  এই কোর্সের সাথে মার্কেটপ্লেসে কাজ পাওয়া বা চাকরি পাওয়ার সাথে কোন ধরনের সম্পর্ক নেই
                    </p>
                </div>
                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
                <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                    আমি আবদুল আউয়াল । অনলাইনে কাজ করছি প্রায় ১ যুগের কাছাকাছি সময় ধরে। এই দীর্ঘ পথ চলায় সব চেয়ে বেশি যুক্ত ছিলাম মার্কেটিং এর সাথে । নিজেকে এসইও প্রফেশনাল বলতেই বেশি স্বাচ্ছন্দ্য বোধ করি। যে কোন কিছুকে মার্কেটিং এর সাথে যুক্ত করার প্রয়াস থেকেই পাইথন শেখা। এই কোর্সে মুলত পাইথন দিয়ে এসইও এর বিভিন্ন অটোমেশন কিভাবে করা যায় সেটাই মুল ফোকাস থাকবে
                </p>
            </div>
        </div>
    );
};

export default Reviews;