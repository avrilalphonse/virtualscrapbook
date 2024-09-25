// Term 1B Page
import React from 'react';
import {Footer, Tabs} from '../App'
import { useNavigate } from 'react-router-dom';

// Template for Term Pages
const Term1B = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/'); 
    };

    return (
        <div className="relative left-1/2 transform -translate-x-1/2 bg-white w-256 h-160 flex shadow-2xl rounded-lg z-0">
            <div className="absolute left-[47.4%] transform -translate-x-1/2 top-0 h-full w-1 bg-purple-200 shadow-inner z-10"></div>
            <div className="flex-1 flex flex-col p-8 z-20">
                {/* Main Page */} 
                <div className = "flex justify-between">
                    <h2 className="text-2xl font-bold">My 1B Term!</h2>
                    <button 
                        className="text-2xl font-bold text-black hover:bg-gray-400 px-2"
                        onClick={handleClose}
                    >
                        ↩
                    </button>
                </div>
                <p className="mt-4 text-2xl"> 🚧 In Progress 🚧 </p>
                
                {/* <div className="flex mt-8 ml-2">
                    <img
                        src="/engineeringBuilding.jpg"
                        alt="Friends in E7 at UW"
                        className="w-auto h-80 border-4 border-black"
                    />
                </div> */}

                <div className="flex-grow"></div>
                <Footer />
            </div>
            <Tabs />
        </div>
    );
};

export default Term1B;
