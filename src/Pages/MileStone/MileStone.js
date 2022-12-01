import React from 'react';
import { Link } from 'react-router-dom';

const MileStone = () => {
    return (
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                মাইলস্টোন ০১
            </p>
            <a
                href="/"
                className="inline-block max-w-xs mx-auto mb-3 text-xl text-blue-900 font-extrabold leading-7 duration-200 hover:text-blue-800"
                aria-label="Read article"
                title="Nori grape silver beet broccoli kombu beet"
            >
                হ্যালো পাইথন ও সিম্পল টেমপ্লেট তৈরী
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
                বেসিক শিখে প্রথমেই আমরা ছোট খাট একটা টেমপ্লেট বানিয়ে ফেলব । ডায়নামিক টেক্সট ও কমপ্লেক্স ডাটা ডিকশনারি বা লিস্টকে আমরা প্রসেস করা শিখে ফেলব
            </p>
            <Link
                to="/course/milestone-one"
                aria-label=""
                className="inline-flex items-center font-medium text-sm transition-colors duration-200 bg-blue-900 text-white px-4 py-2 hover:bg-blue-800"
            >
                দেখুন
            </Link>
        </div>

    );
};

export default MileStone;