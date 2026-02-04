import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-neutral-50 flex justify-center">
            {/* Mobile container constraint. 
          On desktop, this will look like a phone screen centered. 
          On mobile, it takes full width. */}
            <div className="w-full max-w-[430px] min-h-screen bg-white shadow-2xl relative overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
