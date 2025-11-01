import React from 'react';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { FaFacebook, FaInstagram, FaTwitch } from 'react-icons/fa';

const Team = () => {
    return (
        <>
            <SectionTitle title={'Our Team'} />
            <div className='flex gap-6'>
                <div>
                    <p className='text-[#3BB77E] font-bold'>Our Team</p>
                    <h1 className='text-[#253D4E] text-6xl font-semibold my-3'>Meet Our Expert <br /> Team</h1>

                    <p className='text-wrap text text-[#7d7a7a]'>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                    <br />
                    <p className='text-wrap text text-[#7d7a7a]'>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>

                    <button className='btn bg-[#3BB77E] hover:bg-yellow-500 transition-all  duration-300 ease-in-out my-2'>View All Members</button>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <div className="relative">
                            {/* Image */}
                            <img className="rounded-lg w-full" src="/assets/imgi_38_about-6.png" alt="" />

                            {/* Card overlay at bottom */}
                            <div className="bg-white absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 p-6      rounded-xl shadow-md border border-gray-200 flex flex-col items-center   text-center
                             transform transition-all duration-300 hover:-translate-y-3 hover:shadow-lg">
                                {/* Name & Role */}
                                <h1 className="text-[#253D4E] font-bold text-lg">H. Merinda</h1>
                                <p className="text-gray-500 mb-4">CEO & Co-Founder</p>

                                {/* Social Icons */}
                                <div className="flex gap-4 text-[#3BB77E]">
                                    <FaFacebook className="hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
                                    <FaTwitch className="hover:text-purple-600 transition-colors duration-200 cursor-pointer" />
                                    <FaInstagram className="hover:text-pink-500 transition-colors duration-200 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            {/* Image */}
                            <img className="rounded-lg w-full" src="/assets/imgi_43_about-8.png" alt="" />

                            {/* Card overlay at bottom */}
                            <div className="bg-white absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 p-6      rounded-xl shadow-md border border-gray-200 flex flex-col items-center   text-center
                             transform transition-all duration-300 hover:-translate-y-3 hover:shadow-lg">
                                {/* Name & Role */}
                                <h1 className="text-[#253D4E] font-bold text-lg">Dilan Specter</h1>
                                <p className="text-gray-500 mb-4">Head Engineer</p>

                                {/* Social Icons */}
                                <div className="flex gap-4 text-[#3BB77E]">
                                    <FaFacebook className="hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
                                    <FaTwitch className="hover:text-purple-600 transition-colors duration-200 cursor-pointer" />
                                    <FaInstagram className="hover:text-pink-500 transition-colors duration-200 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Team;