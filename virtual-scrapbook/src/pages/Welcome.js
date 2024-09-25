// Welcome Page - Journal Opened
import React from 'react';
import {Footer, Tabs} from '../App'
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/'); 
    };

    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-256 h-160 flex shadow-2xl rounded-lg">
            <div className="flex-1 p-8">
                {/* Main Page */} 
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">☆ Welcome to my Virtual Scrapbook! ☆</h2>
                    <button 
                        className="text-xl font-bold text-black hover:bg-gray-400 px-2"
                        onClick={handleClose}
                    >
                        X
                    </button>
                </div>
                <p className="mt-4">
                    Hi! I'm Avril Alphonse, a 3B Computer Engineering student at the University of Waterloo!<br /> 
                    Welcome to my website that showcases my memories from each study term here at UW. I hope you enjoy it :)
                </p>
                <div className="flex mt-8 ml-2 border-4 border-black">
                    <img
                        src="/engineeringBuilding.jpg"
                        alt="Friends in E7 at UW"
                        className="w-auto h-80 object-cover"
                    />
                    <img
                        src="/sari.jpg"
                        alt="Me!"
                        className="w-auto h-80 object-cover"
                    />
                    <img
                        src="/parents.jpg"
                        alt="My parents and me"
                        className="w-auto h-80 object-cover"
                    />
                </div>
                <p className="text-center text-lg mt-10">
                    Click on the tab to the right to choose the school term! 
                </p>
                <Footer />
            </div>
            <Tabs />
        </div>
    );
};

export default WelcomePage;
