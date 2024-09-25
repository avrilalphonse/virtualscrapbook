import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import './App.css';
import Term3A from './pages/Term3A';
import Term2B from './pages/Term2B';
import Term2A from './pages/Term2A';
import Term1B from './pages/Term1B';

const CoverPage = ({handleOpen}) => (
    <div 
        className="h-full flex flex-col justify-center items-center p-4 cursor-pointer"
        onClick={handleOpen}
    >
        {/* Book Spine */}
        <div className="absolute left-0 top-0 h-full w-6 bg-purple-400 rounded-l-lg shadow-inner"></div>
        {/* Title */}
        <h1 className="text-4xl font-bold text-black ml-5">Avril's Virtual Scrapbook!</h1>
    </div>
);

const WelcomePage = ({handleClose}) => (
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

export const Footer = () => (
    <p className="text-center text-sm mt-10 space-x-10">
        <span><b>•</b></span>
        <span>Made by Avril Alphonse</span>
        <span><b>•</b></span>
        <span>
        <a 
            href="https://www.linkedin.com/in/avril-alphonse/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
        >
            LinkedIn
        </a>
        </span>
        <span><b>•</b></span>
        <span>
        <a 
            href="https://github.com/avrilalphonse" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
        >
            GitHub
        </a>
        </span>
    </p>
);

export const Tabs = () => (
    <div className="w-16 bg-purple-300 flex flex-col">
        <Link to="/term3A" className="py-4 px-2 text-center hover:bg-purple-400">3A</Link>
        <Link to="/term2B" className="py-4 px-2 text-center hover:bg-purple-400">2B</Link>
        <Link to="/term2A" className="py-4 px-2 text-center hover:bg-purple-400">2A</Link>
        <Link to="/term1B" className="py-4 px-2 text-center hover:bg-purple-400">1B</Link>
    </div>   
);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.pathname]);


  const handleOpenJournal = () => {
    setIsOpen(true);
  };

  const handleCloseJournal = () => {
    setIsOpen(false);
  };

  return (
        <div className="min-h-screen bg-pink-100 flex justify-center items-center">
            {/* Scrapbook Container */}
            <div className="relative w-128 h-160 bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg shadow-xl">
                {!isOpen ? (
                    <CoverPage handleOpen={handleOpenJournal} />
                ) : (
                    <div className="flex">
                        <div className="w-full">
                            <Routes>
                                <Route path="/" element={<WelcomePage handleClose={handleCloseJournal}/>}/>
                                <Route path="/term3A" element={<Term3A/>}/>
                                <Route path="/term2B" element={<Term2B/>}/>
                                <Route path="/term2A" element={<Term2A/>}/>
                                <Route path="/term1B" element={<Term1B/>}/>
                            </Routes>
                        </div>
                    </div>           
                )}
            </div>
        </div>
  );
};

export default App;
