import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Iridescence from '../components/Iridescence';

// Define constants outside component to prevent re-renders
const IRIDESCENCE_COLOR = [0.99, 0.85, 0.20];
const IRIDESCENCE_SPEED = 0.5;
const IRIDESCENCE_AMPLITUDE = 0.15;

// Main Login Component
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    const menuVariants = useMemo(() => ({
        closed: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    }), []);

    return (
        <div className="flex h-screen w-full overflow-hidden relative">
            {/* Hamburger Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="absolute top-8 right-8 z-50 p-2 text-white hover:text-brand-yellow transition-colors"
                type="button"
            >
                <div className="w-8 h-8 flex flex-col justify-center gap-1.5">
                    <motion.span
                        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-full h-0.5 bg-current block origin-center transition-transform"
                    />
                    <motion.span
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-full h-0.5 bg-current block transition-opacity"
                    />
                    <motion.span
                        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-full h-0.5 bg-current block origin-center transition-transform"
                    />
                </div>
            </button>

            {/* Navigation Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="absolute top-24 right-8 z-40 w-64 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <nav className="flex flex-col p-2">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Services', path: '/services' },
                                { name: 'Features', path: '/features' },
                                { name: 'Pricing', path: '/pricing' },
                                { name: 'About', path: '/about' }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="px-4 py-3 text-gray-300 hover:text-brand-yellow hover:bg-gray-800 rounded-xl transition-all font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Left Side - Animated Background */}
            <div className="relative w-full lg:w-1/2 bg-brand-yellow max-[825px]:hidden">
                <Iridescence
                    color={IRIDESCENCE_COLOR}
                    speed={IRIDESCENCE_SPEED}
                    amplitude={IRIDESCENCE_AMPLITUDE}
                    mouseReact={true}
                />

                {/* Back Button */}
                <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-black hover:opacity-80 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-medium">Back</span>
                </Link>

                {/* Content */}
                <div className="absolute bottom-16 left-16 text-black max-w-lg">
                    <h1 className="text-5xl font-bold mb-4">
                        Build better products with Easily
                    </h1>
                    <p className="text-lg text-black/90">
                        Connect your data sources, build insights, and share them with your team.
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 max-[825px]:w-full bg-black flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Logo and Title */}
                    <div className="mb-12 text-center">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="7" height="7" fill="black" />
                                    <rect x="14" y="3" width="7" height="7" fill="black" />
                                    <rect x="3" y="14" width="7" height="7" fill="black" />
                                    <rect x="14" y="14" width="7" height="7" fill="black" />
                                </svg>
                            </div>
                            <span className="text-white text-2xl font-bold">EASILY</span>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
                        <p className="text-gray-400">
                            Sign in to your account to continue your journey with Easily
                        </p>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg transition-colors max-[875px]:py-2 max-[875px]:px-2 max-[875px]:text-xs">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
                            </svg>
                            Sign in with GitHub
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg transition-colors max-[875px]:py-2 max-[875px]:px-2 max-[875px]:text-xs">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4" />
                                <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853" />
                                <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05" />
                                <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335" />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-800"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-black text-gray-500">or continue with</span>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-white text-sm font-medium">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <button type="button" className="text-sm text-brand-yellow hover:text-yellow-300">
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-yellow transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                                >
                                    {showPassword ? (
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                            <path d="M2 2l16 16M6.71 6.71a7 7 0 019.58 9.58M10 14a4 4 0 01-4-4M10 6a4 4 0 014 4" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                            <path d="M10 3C5 3 1.73 7.11 1 10c.73 2.89 4 7 9 7s8.27-4.11 9-7c-.73-2.89-4-7-9-7z" strokeWidth="2" />
                                            <circle cx="10" cy="10" r="3" strokeWidth="2" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brand-yellow hover:bg-yellow-300 text-black font-medium py-3 px-4 rounded-lg transition-colors"
                        >
                            Sign in
                        </button>
                    </form>

                    {/* Magic Link */}
                    <button className="w-full mt-4 flex items-center justify-center gap-2 text-brand-yellow hover:text-yellow-300 py-2 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                            <path d="M13 3L16 6L13 9M6 17L3 14L6 11M16 6H8M3 14h8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Sign in with magic link
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-center text-gray-400 mt-8">
                        Don't have an account?{' '}
                        <button className="text-brand-yellow hover:text-yellow-300 font-medium">
                            Sign up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
