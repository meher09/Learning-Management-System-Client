import React from 'react';

const TopSection = () => {
    return (
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-blue-900">
                    মাইলস্টোনসমুহ
                </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-blue-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                        <defs>
                            <pattern
                                id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                                x="0"
                                y="0"
                                width=".135"
                                height=".30"
                            >
                                <circle cx="1" cy="1" r=".7" />
                            </pattern>
                        </defs>
                        <rect
                            fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                            width="52"
                            height="24"
                        />
                    </svg>
                    <span className="relative ">প্রতিটি</span>
                </span>{' '}
                মাইলস্টোন কোর্সের ধাপ
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
                মাইলস্টোন হচ্ছে একটা টার্গেট। একটা মাইলস্টোন শেষ করা মানে আপনি এক ধরনের কাজ মোটামুটি জানেন। এই ধরনের যেকোন সমস্যার সমাধান আপনি করতে পারবেন।
            </p>
        </div>
    );
};

export default TopSection;