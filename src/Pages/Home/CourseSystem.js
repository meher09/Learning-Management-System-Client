import React from 'react';
import DownArrow from '../../componennts/DownArrow';

const CourseSystem = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <DownArrow></DownArrow>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg  text-blue-900 font-bold">ভিডিও দেখা</p>
                <p className="text-gray-700">

                  সাপ্তাহে তিন দিন রাত ৮.০০- ১০.০০ এর সময় (বাংলাদেশ সময়) একটা মডিউল রিলিজ দেয়া হবে। প্রতিটা মডিউলে থাকবে ৬-১০ টি ভিডিও । মোটামুটি ১.৫-২.০০ ঘন্টা সময়য় দিলেই শেষ করে ফেলা যাবে
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <DownArrow></DownArrow>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg text-blue-900 font-bold">প্রাক্টিস ও প্রাক্টিস</p>
                <p className="text-gray-700">
                  ভিডিও দেখার পাশা পাছি প্রাক্টিস করা গুরুত্বপুর্ন । ভিডিও এর কোন টপিক বুঝতে না পারলে গুগল বা ইউটিউবে সার্চ দিয়ে আরো অন্য টিউটোরিয়াল দেখতে হবে
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <DownArrow></DownArrow>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg text-blue-900 font-bold">ফেসবুক সাপোর্ট</p>
                <p className="text-gray-700">
                  এরপর ও যদি বুঝতে না পারে কেউ তাহলে আমাদের ফেসবুক গ্রুপে প্রশ্ন করলে অনধিক ২৪ ঘন্টার মধ্যে উত্তর পেয়ে যাবেন । অধিকাংশ ক্ষেত্রে ১/২ ঘন্টার ভিতরেই উত্তর দিয়ে দেওয়া হয়।
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <DownArrow></DownArrow>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg text-blue-900 font-bold">সাপোর্ট সেশন</p>
                <p className="text-gray-700">
                  অনেক কিছু কমেন্টে বুঝানো সম্ভব হয় না । এর জন্য দরকার হয় লাইভ সাপোর্ট । কমেন্টে কোন কিছু বুঝতে না পারলে আমাদের সাপোর্ট টিমের মেম্বাররা আপনাকে লাইভে স্ক্রিন শেয়ার করে বুঝিয়ে দিবেন
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-6 text-gray-600"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <p className="mb-2 text-lg text-blue-900 font-bold">এসাইনমেন্ট ও ক্রাশ কোর্স </p>
                <p className="text-gray-700">গ্রুপে ও এসাইনমেন্টে যারা নিয়মিত কোর্স শেষে  তাদের নিয়ে যাওয়া হবে এডভান্স ক্রাশ কোর্স এ (ফ্রি) । সেখানে এডভান্স অনেক বিষয় দেখানো হবে</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSystem;