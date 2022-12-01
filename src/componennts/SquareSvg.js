import React from 'react';

const SquareSvg = () => {
    return (
        <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
        >
            <defs>
                <pattern
                    id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                >
                    <circle cx="1" cy="1" r=".7" />
                </pattern>
            </defs>
            <rect
                fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                width="52"
                height="24"
            />
        </svg>
    );
};

export default SquareSvg;