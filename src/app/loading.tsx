import React from "react";

const Loading = () => {
    return (
        <div className="relative w-48 border border-gray-800 bg-gray-900 text-green-500 font-mono text-base py-6 px-4 mx-auto shadow-lg rounded-lg">
            <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t-md px-2 flex justify-between items-center">
                <div className="text-gray-200 text-xs">Status</div>
                <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                </div>
            </div>

            <div className="mt-8 inline-block border-r-2 border-green-500 animate-blink border-opacity-100 whitespace-nowrap overflow-hidden">
                Loading...
            </div>
        </div>
    );
};

export default Loading;
