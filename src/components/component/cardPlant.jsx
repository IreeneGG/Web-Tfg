import React from 'react';

const CardPlant = ({ item }) => {
    return (
        <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
            {/* Aquí va tu SVG */}
            <svg
                version="1.1"
                className="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto"
                viewBox="0 0 256 256"
            >
                {/* Aquí va el contenido de tu SVG */}
            </svg>
      
            <p className="cardtxt font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">
                Calathea Orbifolia
            </p>
            <p className="blueberry font-semibold text-gray-600 text-xs">
                One of Kind & Unique Plants Collection Here at SMKY.
            </p>
            <div className="ordernow flex flex-row justify-between items-center w-full">
                <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800">
                    $21.00
                </p>
                <p className="btun4 lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-[#abd373] shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold rounded-full butn">
                    Order Now
                </p>
            </div>
        </div>
    );
};

export default CardPlant;
