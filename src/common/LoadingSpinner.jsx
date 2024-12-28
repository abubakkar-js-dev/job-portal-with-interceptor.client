import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
        </div>
    );
};

export default LoadingSpinner;