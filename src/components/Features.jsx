import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ScrollStack } from './ScrollStack';
import { ExpansionContext } from './FeatureModal';
import { Icons } from './Icons';

const FeatureCardContent = ({ icon: Icon, title, desc, image, id }) => {
    const { setActiveFeature } = useContext(ExpansionContext);
    return (
        <div className="flex flex-col md:flex-row h-full">
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center gap-6">
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow">
                    <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-black leading-tight uppercase">
                    {title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    {desc}
                </p>
                <div className="pt-4">
                    <motion.button
                        layoutId={`card-${id}`}
                        onClick={() => setActiveFeature(id)}
                        className="group flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all font-bold"
                    >
                        Learn more
                        <span className="group-hover:translate-x-1 transition-transform"><Icons.ArrowRight /></span>
                    </motion.button>
                </div>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
                <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#141414] via-[#141414]/50"></div>
            </div>
        </div>
    );
};

export const FeatureStack = () => {
    const features = [
        {
            id: 'finance',
            icon: Icons.Dollar,
            title: 'Personal Finance Manager',
            desc: 'Budgets, goals, expenses - all in one spot! Link accounts, crush chaos, and own your financial game.',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop'
        },
        {
            id: 'travel',
            icon: Icons.Plane,
            title: 'Unlock Travels',
            desc: 'Easily find your ideal tickets, tweak filters for a perfect match. Skip planes, minimize transfers, or speed up your journey.',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop'
        },
        {
            id: 'activities',
            icon: Icons.Puzzle,
            title: 'Dive Into Activities',
            desc: 'Snag cinema tickets in a snap. Choose your flick, pick your seats, pay - all at your fingertips.',
            image: 'https://images.unsplash.com/photo-1520156557489-31c63271fcd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWN0aXZpdGllc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 'goals',
            icon: Icons.Target,
            title: 'Set Your Goals',
            desc: 'Ready to conquer? Set your goals easily! Whether it\'s financial triumphs or travel adventures.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop'
        }
    ];

    return (
        <section className="px-6 py-20 bg-brand-dark relative z-10">
            <div className="text-center mb-10">
                <p className="text-brand-yellow font-bold text-sm mb-4">FEATURES</p>
                <h2 className="text-4xl md:text-6xl font-black font-display uppercase text-white">
                    Everything you need
                </h2>
            </div>

            <ScrollStack>
                {features.map((feature, i) => (
                    <FeatureCardContent key={feature.id} {...feature} />
                ))}
            </ScrollStack>
        </section>
    )
};

export const GridFeatures = () => {
    // Card Items Definition
    const CardItems = () => (
        <>
            {/* Wide City Card */}
            <div className="h-64 md:h-96 min-w-[300px] md:min-w-[600px] relative rounded-[2.5rem] overflow-hidden group border border-white/5 shrink-0">
                <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-6 left-6 text-white font-display font-bold text-xl uppercase opacity-0 group-hover:opacity-100 transition-opacity">Explore</div>
            </div>

            {/* Square Puzzle Card */}
            <div className="h-64 md:h-96 w-64 md:w-96 bg-[#1A1A1A] rounded-[2.5rem] flex items-center justify-center border border-white/5 shrink-0 hover:bg-[#222] transition-colors group">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                    <Icons.Puzzle className="w-24 h-24 text-gray-500 group-hover:text-white transition-colors" />
                </div>
            </div>

            {/* Square QR Card */}
            <div className="h-64 md:h-96 w-64 md:w-96 bg-white rounded-[2.5rem] flex items-center justify-center border border-white/5 shrink-0 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/10 transition-colors z-10"></div>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=EasilyApp" className="w-2/3 h-2/3 mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>

            {/* Wide Room Card */}
            <div className="h-64 md:h-96 min-w-[300px] md:min-w-[500px] relative rounded-[2.5rem] overflow-hidden group border border-white/5 shrink-0">
                <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-brand-yellow p-6 rounded-full text-black shadow-xl transform transition-transform duration-500 group-hover:scale-125 hover:rotate-12 cursor-pointer">
                        <Icons.MapPin className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <section className="py-24 bg-brand-dark overflow-hidden relative z-20">
            <div className="max-w-7xl mx-auto text-center px-6 mb-16">
                <p className="text-brand-yellow font-bold text-sm mb-4 tracking-wider">MAIN FEATURES</p>
                <h2 className="text-5xl md:text-7xl font-black font-display uppercase mb-12 max-w-5xl mx-auto leading-tight">
                    Made to make<br />everyday life easy<br />for everyone
                </h2>

                <div className="flex justify-center">
                    <button className="bg-brand-yellow text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-[0_0_20px_rgba(252,216,52,0.3)]">
                        Start now
                    </button>
                </div>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for Fade Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-fit animate-marquee gap-6 px-6">
                    {/* Original Set */}
                    <CardItems />
                    {/* Duplicate Set 1 */}
                    <CardItems />
                    {/* Duplicate Set 2 (for extra wide screens) */}
                    <CardItems />
                </div>
            </div>
        </section>
    );
};
