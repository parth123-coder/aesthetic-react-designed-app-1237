import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo, Icons } from './Icons';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            {/* Background Blur Layer */}
            <div className="absolute inset-0 bg-transparent backdrop-blur-sm -z-10"></div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 relative z-50">
                    <Link to="/">
                        <Logo color="white" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
                    <Link to="/" className="hover:text-gray-300 transition-colors">Products</Link>
                    <Link to="/features" className="hover:text-gray-300 transition-colors">Features</Link>
                    <Link to="/pricing" className="hover:text-gray-300 transition-colors">Plans</Link>
                    <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-medium text-white hover:text-gray-300 hidden sm:block">Login</button>
                    <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                        Start now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white relative z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center p-8 md:hidden h-screen w-screen">
                    <div className="flex flex-col items-center gap-12 text-4xl font-bold text-white">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300 transition-colors">Products</Link>
                        <Link to="/features" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300 transition-colors">Features</Link>
                        <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300 transition-colors">Plans</Link>
                        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300 transition-colors">About</Link>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300 transition-colors">Login</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="bg-brand-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 mb-16 border border-white/10">
                    <div className="max-w-md">
                        <h3 className="text-2xl font-bold uppercase mb-4">The 3-minute newsletter with fresh takes on Easily news</h3>
                    </div>
                    <div className="flex w-full md:w-auto gap-2">
                        <input type="email" placeholder="name@email.com" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white w-full md:w-64 focus:outline-none focus:border-brand-yellow" />
                        <button className="bg-brand-yellow text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-white/10 pt-16">
                    <div className="col-span-2 md:col-span-1">
                        <Logo />
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Products</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-brand-yellow cursor-pointer">Easy Travel</li>
                            <li className="hover:text-brand-yellow cursor-pointer">Easy Finance</li>
                            <li className="hover:text-brand-yellow cursor-pointer">Easy Invest</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Spending</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-brand-yellow cursor-pointer">Virtual Card</li>
                            <li className="hover:text-brand-yellow cursor-pointer">Insights</li>
                            <li className="hover:text-brand-yellow cursor-pointer">Credit Building</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Rewards</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-brand-yellow cursor-pointer">Easy Rewards</li>
                            <li className="hover:text-brand-yellow cursor-pointer">Perks</li>
                            <li className="hover:text-brand-yellow cursor-pointer">Easy Store</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-brand-yellow cursor-pointer">About</li>
                            <li className="hover:text-brand-yellow cursor-pointer">Careers</li>
                            <li className="hover:text-brand-yellow cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-xl font-bold">VISA</span>
                    <span className="text-xl font-bold">MasterCard</span>
                    <span className="text-xl font-bold">PayPal</span>
                    <span className="text-xl font-bold">Apple Pay</span>
                    <span className="text-xl font-bold">Google Pay</span>
                </div>
            </div>
        </footer>
    );
};

export default { Navbar, Footer };
