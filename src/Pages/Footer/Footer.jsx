import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { BsApple, BsGooglePlay } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-[#253D4E] text-sm">

                {/* Logo & Info */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <img src="/assets/imgi_1_logo.png" alt="Nest" className="w-40" />
                    </div>
                    <p className="text-gray-500 mb-4">Awesome grocery store website template</p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2 text-[#3BB77E]"><FaMapMarkerAlt /> 5171 W Campbell Ave, Kent, Utah 53127</li>
                        <li className="flex items-center gap-2 text-[#3BB77E]"><FaPhoneAlt /> (+91) 540-025-124553</li>
                        <li className="flex items-center gap-2 text-[#3BB77E]"><FaEnvelope /> sale@Nest.com</li>
                        <li className="flex items-center gap-2 text-[#3BB77E]"><FaClock /> 10:00 - 18:00, Mon - Sat</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                        <li>Support Center</li>
                        <li>Careers</li>
                    </ul>
                </div>

                {/* Account */}
                <div>
                    <h3 className="font-semibold mb-3">Account</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>Sign In</li>
                        <li>View Cart</li>
                        <li>My Wishlist</li>
                        <li>Track My Order</li>
                        <li>Help Ticket</li>
                        <li>Shipping Details</li>
                        <li>Compare products</li>
                    </ul>
                </div>

                {/* Corporate */}
                <div>
                    <h3 className="font-semibold mb-3">Corporate</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>Become a Vendor</li>
                        <li>Affiliate Program</li>
                        <li>Farm Business</li>
                        <li>Farm Careers</li>
                        <li>Our Suppliers</li>
                        <li>Accessibility</li>
                        <li>Promotions</li>
                    </ul>
                </div>

                {/* Popular */}
                <div>
                    <h3 className="font-semibold mb-3">Popular</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>Milk & Flavoured Milk</li>
                        <li>Butter and Margarine</li>
                        <li>Eggs Substitutes</li>
                        <li>Marmalades</li>
                        <li>Sour Cream and Dips</li>
                        <li>Tea & Kombucha</li>
                        <li>Cheese</li>
                    </ul>
                </div>

                {/* Install App */}
                <div>
                    <h3 className="font-semibold mb-3">Install App</h3>
                    <p className="text-gray-500 mb-3">From App Store or Google Play</p>
                    <div className="flex gap-2 mb-4">
                        <button className="bg-black text-white px-3 rounded flex items-center gap-2">
                            <BsApple /> App Store
                        </button>
                        <button className="bg-black text-white px-3 py-2 rounded flex items-center gap-2">
                            <BsGooglePlay /> Google Play
                        </button>
                    </div>

                    <p className="text-gray-500 mb-2">Secured Payment Gateways</p>
                    <img src="/assets/imgi_51_payment-method (1).png" alt="Payments" className="w-40" />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t py-6 text-center sm:text-left max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
                <p>© 2024, <span className="text-green-600 font-semibold">Nest</span> - HTML Ecommerce Template. All rights reserved.</p>
                <div className="flex items-center gap-3 mt-3 sm:mt-0">
                    <FaFacebookF className="text-green-600 cursor-pointer" />
                    <FaTwitter className="text-green-600 cursor-pointer" />
                    <FaInstagram className="text-green-600 cursor-pointer" />
                    <FaPinterestP className="text-green-600 cursor-pointer" />
                    <FaYoutube className="text-green-600 cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
