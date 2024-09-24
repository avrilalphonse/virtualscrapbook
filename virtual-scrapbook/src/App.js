import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenJournal = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex justify-center items-center">
      {/* Scrapbook Container */}
      <div className="relative w-128 h-160 bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg shadow-xl">
        {/* Closed Journal */}
        {!isOpen ? (
          <div 
            className="h-full flex flex-col justify-center items-center p-4 cursor-pointer"
            onClick={handleOpenJournal}
          >
            {/* Book Spine */}
            <div className="absolute left-0 top-0 h-full w-6 bg-purple-400 rounded-l-lg shadow-inner"></div>
            {/* Title */}
            <h1 className="text-4xl font-bold text-black-800 ml-5">Avril's Virtual Scrapbook!</h1>
          </div>
        ) : (
          /* Open Journal with tabs */
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white w-256 h-160 flex shadow-2xl rounded-lg">
            <div className="flex-1 p-8">
              {/* Main Page */} 
              <h2 className="text-2xl font-bold">☆ Welcome to my Virtual Scrapbook! ☆</h2>
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
              <p className="text-center text-lg mt-12">
                Click on the tab to the right to choose the school term! 
              </p>
              {/* Footer */}
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
            </div>
            {/* Tabs on the right */}
            <div className="w-16 bg-purple-300 flex flex-col">
              <button className="py-4 px-2 hover:bg-purple-400">3A</button>
              <button className="py-4 px-2 hover:bg-purple-400">2B</button>
              <button className="py-4 px-2 hover:bg-purple-400">2A</button>
              <button className="py-4 px-2 hover:bg-purple-400">1B</button>
            </div>            
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
