import React from 'react';

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                    <a className="btn btn-ghost text-xl">
                        <span className='text-[#003EA4]'>Auction</span>
                        <span className='text-[#FFD337]'>Gallery</span>
                    </a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">Bid.</a>
                    <a className="link link-hover">Win.</a>
                    <a className="link link-hover">Own.</a>
                </div>
                <div className="grid grid-flow-col gap-4">
                    <a href="#">Home</a>
                    <a href="#">Auctions</a>
                    <a href="#">Categories</a>
                    <a href="#">How to works</a>
                </div>
            </nav>
            <aside>
                <p>©2025 AuctionHub. All rights reserved.</p>
            </aside>
            </footer>
        </div>
    );
};

export default Footer;