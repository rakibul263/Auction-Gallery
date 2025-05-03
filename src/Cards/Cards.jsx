import React, { useEffect, useState } from 'react';
import Item from "../Item/Item";

const Cards = () => {
    const [items, setItems] = useState([]);

    const [bookmark, setBookmark] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [removedItems, setRemovedItems] = useState([]);

    const handleRemove = (id) => {
        const updatedBookmark = bookmark.filter(item => item.id !== id);
        setBookmark(updatedBookmark);
        const removedItem = bookmark.find(item => item.id === id);
        setRemovedItems([...removedItems, removedItem]);
        handleTotalPrice(-removedItem.currentBidPrice);
    }

    const handelBookmark = (item) => {
        console.log(item);
        setBookmark([...bookmark, item]);
        handleTotalPrice(item.currentBidPrice);
    }

    const handleTotalPrice = (price) => {
        setTotalPrice(totalPrice + price);
    }

    useEffect(() => {
        fetch('item.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }
    , [])
    return (
        <div className='mt-20 container mx-auto'>
            <div>
                <h1 className='font-bold text-2xl'>Active Auctions</h1>
                <p>Discover and bid on extraordinary items</p>
            </div>
            <div className='flex gap-8 mt-10 mb-10'>
                <div className='card w-[70%] bg-gray-200 shadow-xl p-10'>
                <div className="grid grid-cols-4 font-semibold text-gray-800 px-4 py-2 border-b">
                    <span>Items</span>
                    <span className="text-center">Current Bid</span>
                    <span className="text-center">Time Left</span>
                    <span className="text-center">Bid Now</span>
                </div>
                    {
                        items.map((item) => <Item
                            handelBookmark={handelBookmark}
                            key={item.id}
                            item={item}
                        ></Item>)
                    }
                </div>
                <div className="card w-[30%] bg-gray-200 shadow-xl p-10">
                    <div className="text-center py-4 border-b">
                        <h2 className="text-lg font-semibold text-blue-900 flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                        </svg>
                        Favorite Items
                        </h2>
                    </div>
                    <div className="py-8 text-center">
                        {/* <p className="text-lg font-medium text-gray-800">No favorites yet</p>
                        <p className="text-sm text-gray-500 mt-2">
                        Click the heart icon on any item<br />to add it to your favorites
                        </p> */}
                        {
                            bookmark.map((marked)=> 
                                <div class="card card-side bg-base-100 shadow-md max-w-md mt-3">
                                <div class="flex-1 px-4 py-2">
                                <h2 class="card-title text-sm font-medium">{marked.title}</h2>
                                <p class="text-sm mt-1">{marked.currentBidPrice}&nbsp;&nbsp; <span class="text-gray-500">{marked.currentBidPrice}</span></p>
                                </div>
                                <button onClick={()=>handleRemove(marked.id)} class="btn btn-sm btn-ghost text-xl text-gray-500 hover:text-red-500">✕</button>
                            </div>
                            )
                        }
                    </div>
                    <div className="border-t px-6 py-4 flex justify-between text-black font-semibold">
                        <p>Total bids Amount</p>
                        <p>{totalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;