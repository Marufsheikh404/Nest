import React from 'react';

import { FaRegHeart, FaSearch } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
    return (
        <div>
            <div className="flex items-center navbar bg-base-100 shadow-sm gap-[100px]">
                <div className="flex-1">
                   <img src="/assets/imgi_1_logo.png" alt="" />
                </div>
                <div className='relative'>
                    <FaSearch className='absolute right-3 top-3'></FaSearch>
                    <input className='border border-[#3BB77E] p-2 w-full rounded-md' placeholder='Search for items' type="text" />
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-row gap-15">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item bg-[#3BB77E]">8</span>
                            </div>
                            <h1 className='text-gray-500'>cart</h1>
                        </div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaRegHeart size={20} />
                                <span className="badge badge-sm indicator-item bg-[#3BB77E]">5</span>
                            </div>
                            <h1 className='text-gray-500'>wishlist</h1>
                        </div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <AiOutlineLoading3Quarters size={20} />
                                <span className="badge badge-sm indicator-item bg-[#3BB77E]">2</span>
                            </div>
                            <h1 className='text-gray-500'>compare</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgProfile size={30} />
                        <h1 className='text-xs'>My Account</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;