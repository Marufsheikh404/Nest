import React from 'react';
import { FaRegHeart, FaSearch } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
    return (
        <div className="w-full bg-base-100 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-6 px-4 py-3 md:gap-10 lg:gap-[100px]">

                {/* Logo */}
                <div className="flex-1 min-w-[120px] flex justify-center md:justify-start">
                    <img src="/assets/imgi_1_logo.png" alt="Logo" className="w-28 md:w-36" />
                </div>

                {/* Search Bar */}
                <div className="relative w-full sm:w-2/3 md:w-1/3">
                    <FaSearch className="absolute right-3 top-3 text-gray-400" />
                    <input
                        className="border border-[#3BB77E] p-2 w-full rounded-md focus:outline-none"
                        placeholder="Search for items"
                        type="text"
                    />
                </div>

                {/* Icons Section */}
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-8">
                    <div className="flex gap-6 sm:gap-8">
                        {/* Cart */}
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle relative">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item bg-[#3BB77E]">8</span>
                            </div>
                            <h1 className="text-gray-500 text-xs sm:text-sm">Cart</h1>
                        </div>

                        {/* Wishlist */}
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle relative ">
                            <div className="indicator">
                                <FaRegHeart size={18} />
                                <span className="badge badge-sm indicator-item bg-[#3BB77E]">5</span>
                            </div>
                            <h1 className="text-gray-500 text-xs sm:text-sm">Wishlist</h1>
                        </div>

                        {/* Compare */}
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle relative">
                            <div className="indicator">
                                <AiOutlineLoading3Quarters size={18} />
                                <span className="badge badge-sm indicator-item bg-[#3BB77E]">2</span>
                            </div>
                            <h1 className="text-gray-500 text-xs sm:text-sm">Compare</h1>
                        </div>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-1">
                        <CgProfile size={25} className="text-gray-600" />
                        <h1 className="text-xs sm:text-sm">My Account</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
