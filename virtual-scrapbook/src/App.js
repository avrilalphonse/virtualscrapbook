import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import './App.css';
import Term3A from './pages/Term3A';
import Term2B from './pages/Term2B';
import Term2A from './pages/Term2A';
import Term1B from './pages/Term1B';
import WelcomePage from './pages/Welcome';

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
    const navigate = useNavigate();

    const handleOpenJournal = () => {
        navigate('/welcome'); 
    };

    return (
        <div className="min-h-screen bg-pink-100 flex justify-center items-center">
            {/* Scrapbook Container */}
            <div className="relative w-128 h-160 bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg shadow-xl">
                <Routes>
                    <Route path="/" element={<CoverPage handleOpen={handleOpenJournal}/>}/>
                    <Route path="/welcome" element={<WelcomePage/>}/>
                    <Route path="/term3A" element={<Term3A/>}/>
                    <Route path="/term2B" element={<Term2B/>}/>
                    <Route path="/term2A" element={<Term2A/>}/>
                    <Route path="/term1B" element={<Term1B/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
