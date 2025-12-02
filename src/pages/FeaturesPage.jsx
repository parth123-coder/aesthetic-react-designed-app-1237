import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowRight,
    Apple,
    Menu,
    X,
    ArrowDown,
    TrendingUp,
    ShieldCheck,
    Zap,
    Globe,
    CreditCard,
    PieChart,
    User,
    Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

// CSS-only Phone Mockup Component
const PhoneMockup = ({ variant = "light", className = "" }) => {
    const isDark = variant === "dark";

    return (
        <div className={`relative w-[280px] h-[580px] rounded-[3rem] border-8 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden ${className}`}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>

            {/* Screen Content */}
            <div className={`w-full h-full pt-8 px-4 flex flex-col ${isDark ? 'bg-black text-white' : 'bg-[#1a1a1a] text-white'}`}>

                {/* Header */}
                <div className="flex justify-between items-center mb-6 px-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <User size={14} />
                    </div>
                    <div className="text-xs font-medium opacity-60">Portfolio</div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Bell size={14} />
                    </div>
                </div>

                {/* Balance */}
                <div className="text-center mb-8">
                    <div className="text-sm mb-1 text-gray-400">Total Balance</div>
                    <div className="text-3xl font-bold">$124,592.00</div>
                    <div className="text-brand-yellow text-sm font-bold mt-1">+12.4% (24h)</div>
                </div>

                {/* Chart Area */}
                <div className="h-32 w-full flex items-end gap-1 mb-6 px-2">
                    {[40, 60, 45, 70, 50, 80, 65, 90, 75, 55, 85, 95].map((h, i) => (
                        <div
                            key={i}
                            className={`flex-1 rounded-t-sm transition-all duration-500 hover:opacity-80 bg-brand-yellow`}
                            style={{ height: `${h}%`, opacity: isDark ? 0.8 : 1 }}
                        ></div>
                    ))}
                </div>

                {/* List Items */}
                <div className="flex-1 space-y-3">
                    {[
                        { name: "Apple Inc.", tick: "AAPL", price: "$173.50", change: "+2.4%" },
                        { name: "Tesla", tick: "TSLA", price: "$240.20", change: "-1.2%" },
                        { name: "Bitcoin", tick: "BTC", price: "$42,100", change: "+5.1%" },
                    ].map((item, i) => (
                        <div key={i} className={`p-3 rounded-2xl flex justify-between items-center bg-white/5`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${['bg-red-500/20 text-red-400', 'bg-blue-500/20 text-blue-400', 'bg-orange-500/20 text-orange-400'][i]}`}>
                                    {item.tick[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-sm">{item.name}</div>
                                    <div className="text-xs opacity-50">{item.tick}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-sm">{item.price}</div>
                                <div className={`text-xs ${item.change.startsWith('+') ? 'text-brand-yellow' : 'text-red-400'}`}>{item.change}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Nav */}
                <div className="mt-auto mb-2 mx-auto w-1/3 h-1 rounded-full bg-white/20"></div>
            </div>
        </div>
    );
};

const FeatureCard = ({ title, desc, delay, variant = "default" }) => (
    <Reveal delay={delay} className="h-full">
        <div className={`group relative h-[320px] rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between ${variant === 'black' ? 'bg-brand-yellow text-black' : 'bg-[#111] text-white border border-white/10'}`}>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 leading-tight w-3/4">{title}</h3>
                <p className={`text-sm ${variant === 'black' ? 'text-black/70' : 'text-gray-400'}`}>{desc}</p>
            </div>

            <div className="relative z-10">
                <button className={`flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all ${variant === 'black' ? 'text-black' : 'text-brand-yellow'}`}>
                    Read More <ArrowRight size={16} />
                </button>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none">
                {variant === 'default' ? (
                    <svg viewBox="0 0 200 200" className="w-full h-full text-brand-yellow/10 fill-current transform translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-700">
                        <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,86.9,-3.3C83.7,11.3,74.6,24.9,64.3,36.5C54,48.1,42.5,57.7,30.3,64.3C18.1,70.9,5.2,74.5,-7.1,80.7C-19.4,86.9,-31.1,95.7,-41.6,92.5C-52.1,89.3,-61.4,74.1,-69.6,60.2C-77.8,46.3,-84.9,33.7,-85.7,20.5C-86.5,7.3,-81,-6.6,-73.4,-18.4C-65.8,-30.2,-56.1,-39.9,-45.3,-48.9C-34.5,-57.9,-22.6,-66.2,-9.7,-68.8C3.2,-71.4,16.1,-68.3,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                ) : (
                    <div className="w-32 h-32 bg-white rounded-full blur-2xl opacity-20 absolute bottom-0 right-0"></div>
                )}
            </div>
        </div>
    </Reveal>
);

const AdvantageItem = ({ icon: Icon, title, desc, btnText, delay, link }) => (
    <Reveal delay={delay} className="bg-[#111] p-8 rounded-3xl shadow-lg border border-white/10 hover:border-brand-yellow transition-colors group">
        <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-brand-yellow" size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
        {link ? (
            <Link
                to={link}
                className="inline-block px-5 py-2 rounded-full border border-white/20 text-xs font-bold text-white hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-colors"
            >
                {btnText}
            </Link>
        ) : (
            <button className="px-5 py-2 rounded-full border border-white/20 text-xs font-bold text-white hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-colors">
                {btnText}
            </button>
        )}
    </Reveal>
);

// --- Main Features Page Component ---

const FeaturesPage = () => {
    return (
        <div className="min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-brand-yellow selection:text-black">

            {/* --- HERO SECTION --- */}
            <section className="relative pt-24 pb-12 lg:min-h-screen flex items-center justify-center overflow-hidden">

                <div className="max-w-[95%] w-full mx-auto bg-brand-yellow rounded-[3rem] relative overflow-hidden px-6 py-20 lg:py-32">
                    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div className="relative z-10">
                            <Reveal>
                                <h1 className="text-6xl lg:text-8xl font-extrabold leading-[0.95] mb-8 tracking-tight text-black">
                                    Invest for <br />
                                    the <span className="relative inline-block text-black">Future
                                        <svg className="absolute -top-6 -right-12 w-12 h-12 text-black animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                                        </svg>
                                    </span>
                                </h1>
                            </Reveal>

                            <Reveal delay={200}>
                                <p className="text-lg text-black mb-10 max-w-md font-medium leading-relaxed">
                                    Work with all the necessary information and tools to boost money flow from your capital investment using Flowly!
                                </p>
                            </Reveal>

                            <Reveal delay={400} className="flex items-center gap-8 relative">
                                <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2">
                                    <Apple size={24} fill="white" /> Download App
                                </button>

                                {/* Hand-drawn arrow SVG */}
                                <div className="hidden lg:block absolute left-52 top-12 pointer-events-none opacity-60">
                                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round">
                                        <path d="M10,10 Q60,60 110,40" />
                                        <path d="M105,35 L110,40 L100,48" />
                                    </svg>
                                </div>
                            </Reveal>

                            <Reveal delay={600}>
                                <div className="mt-16 text-sm font-bold flex items-center gap-2 cursor-pointer hover:underline opacity-70 hover:opacity-100 transition-opacity text-black">
                                    Find Out More <ArrowDown size={16} className="animate-bounce" />
                                </div>
                            </Reveal>
                        </div>

                        {/* Right Content - Phone Mockups */}
                        <div className="relative h-[700px] w-full hidden lg:block perspective-1000">
                            {/* Back Phone (Floating Slower) */}
                            <div className="absolute top-10 right-20 transform rotate-12 animate-float-delayed z-0">
                                <PhoneMockup variant="light" className="opacity-90 scale-95" />
                            </div>

                            {/* Front Phone (Floating Faster) */}
                            <div className="absolute top-24 right-48 transform -rotate-6 animate-float z-10">
                                <PhoneMockup variant="dark" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FEATURES SECTION --- */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <Reveal>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-16 max-w-lg leading-tight">
                            Get the Most Out <br /> of Your Investments
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-8">
                        <FeatureCard
                            title="Unlimited Portfolio Accounts"
                            desc="Manage all your financial assets from one place. Track growth and analyze trends effortlessly."
                            delay={100}
                        />
                        <FeatureCard
                            title="Full Analytics in Your App"
                            desc="Analyze the results and try different strategies for more income using our AI tools."
                            delay={300}
                            variant="black"
                        />
                    </div>
                </div>
            </section>

            {/* --- ADVANTAGES SECTION --- */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
                    {/* Text Side */}
                    <div className="lg:col-span-1">
                        <Reveal>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Advantages</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                We listen to our customers and work with them to improve the user experience of our platform.
                                Your success is our priority.
                            </p>
                            <div className="h-1 w-24 bg-brand-yellow rounded-full"></div>
                        </Reveal>
                    </div>

                    {/* Grid Side */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        <AdvantageItem
                            icon={TrendingUp}
                            title="Smooth Start"
                            desc="Without a visit to the office, we will set up your brokerage account in 5 minutes."
                            btnText="Open an Account"
                            link="/login"
                            delay={0}
                        />
                        <AdvantageItem
                            icon={ShieldCheck}
                            title="24/7 Support"
                            desc="Our support team is always available to answer questions and resolve any issues."
                            btnText="Ask a Question"
                            link="/#faq"
                            delay={100}
                        />
                        <AdvantageItem
                            icon={Zap}
                            title="Low Commissions"
                            desc="We give you the best rate we can for any kind of transactions. No extra fees."
                            btnText="Explore Prices"
                            link="/pricing"
                            delay={200}
                        />
                        <AdvantageItem
                            icon={PieChart}
                            title="Invest Any Amount"
                            desc="You don't have to have large sums to start investing, start small and grow big."
                            btnText="Start Now"
                            delay={300}
                        />
                    </div>
                </div>
            </section>

            {/* --- PARTNERS SECTION --- */}
            <section className="py-20 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-bold mb-12">Our Partners</h2>
                        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {['VISA', 'Mastercard', 'PayPal', 'Stripe', 'Amex', 'Chase'].map((partner, i) => (
                                <div key={i} className="text-2xl font-extrabold tracking-widest text-gray-400 hover:text-white cursor-pointer">
                                    {partner}
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* --- BLACK BANNER (Now Dark Card) --- */}
            <section className="py-24 bg-black">
                <Reveal>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-[#111] border border-white/10 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[400px]">

                            {/* Content */}
                            <div className="relative z-10 max-w-xl">
                                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                    Keep Your Finger on the Investment Market Pulse
                                </h2>
                                <button className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors flex items-center gap-2">
                                    <Apple size={20} /> Download App
                                </button>
                            </div>

                            {/* Decorative Wavy Lines */}
                            <div className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <path d="M0,50 Q25,30 50,50 T100,50" stroke="white" strokeWidth="0.5" fill="none" />
                                    <path d="M0,60 Q25,40 50,60 T100,60" stroke="white" strokeWidth="0.5" fill="none" />
                                    <path d="M0,70 Q25,50 50,70 T100,70" stroke="white" strokeWidth="0.5" fill="none" />
                                </svg>
                            </div>

                            {/* Floating Element on Banner */}
                            <div className="hidden lg:block absolute -right-10 top-10 w-80 transform rotate-12">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl text-white shadow-2xl">
                                    <div className="text-3xl font-bold mb-2">$16,988.31</div>
                                    <div className="text-brand-yellow text-sm mb-4">+ $3,402 (25%)</div>
                                    <div className="space-y-3">
                                        <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                                        <div className="h-2 bg-white/20 rounded-full w-1/2"></div>
                                        <div className="h-2 bg-white/20 rounded-full w-2/3"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Reveal>
            </section>

            {/* --- GLOBAL STYLES --- */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(10deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        .perspective-1000 { perspective: 1000px; }
        
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
};

export default FeaturesPage;
