import React, { useState } from 'react';

const Item = ({ item, handelBookmark }) => {
  const [clickedBids, setClickedBids] = useState({});

  const handleBidClick = (id) => {
    setClickedBids(prev => ({ ...prev, [id]: true }));
  };

  const { id, title, currentBidPrice, timeLeft, image } = item;
  const isClicked = clickedBids[id];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-4 items-center px-4 py-4 border-b">
        <div className="flex items-center gap-4">
          <img src={image} alt={title} className="w-16 h-16 object-cover rounded" />
          <span className="text-[#0A1C44] font-medium">{title}</span>
        </div>

        <div className="text-center text-[#0A1C44] font-medium">{currentBidPrice}</div>
        <div className="text-center text-[#0A1C44] font-medium">{timeLeft}</div>

        <div className="text-center">
          <button
            onClick={() => {
              handelBookmark(item);
              handleBidClick(id);
            }}
            className={`btn btn-sm ${isClicked ? 'bg-red-500 text-[#ea0f0f] cursor-not-allowed' : 'btn-ghost text-[#000000]'}`}
            disabled={isClicked}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
