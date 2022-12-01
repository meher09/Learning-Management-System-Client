import React from 'react';
import MileStone from './MileStone';

const MileStoneArea = () => {
    return (
        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
                {[...Array(10)].map(milestone => <MileStone></MileStone>)}
        </div>
    );
};

export default MileStoneArea;