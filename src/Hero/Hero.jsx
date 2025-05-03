import React from 'react';
import bannerImg from '../assets/Banner-min.jpg';

const hero = () => {
    return (
        <div>
            <div
            className="hero min-h-150"
            style={{
                backgroundImage:
                `url(${bannerImg})`,
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-conten text-left text-white">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold ">Bid on Unique Items from Around the World</h1>
                <p className="mb-5">
                         Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                </p>
                <button className="btn bg-white text-black">Explore Actions</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default hero;
