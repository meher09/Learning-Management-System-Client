import React from 'react';

const RoundedZigZag = () => {
    return (
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
    );
};

export default RoundedZigZag;