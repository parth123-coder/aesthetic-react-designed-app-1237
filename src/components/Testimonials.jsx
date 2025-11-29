import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
    const reviews = [
        {
            name: "Joshua Jones",
            title: "Living at new level with Easily!",
            text: "Simple tracking for financial and personal wins. My go-to for leveling up!",
            rotate: "-rotate-2"
        },
        {
            name: "Kathy Pacheco",
            title: "Adulting made easy!",
            text: "Easily is my financial sidekick! Budgets, goals, and expenses – all in one app.",
            rotate: "rotate-2"
        },
        {
            name: "Bradley Lawlor",
            title: "Traveling with Easily is a game-changer!",
            text: "Unique destinations, diverse accommodations, and dinner delivery after exploration.",
            rotate: "-rotate-2"
        },
        {
            name: "Rodger Struck",
            title: "Easily, my financial superhero!",
            text: "Intuitive money management, budgets, and goals. Where planning meets fun!",
            rotate: "rotate-2"
        }
    ];

    return (
        <section className="py-24 px-6 bg-brand-dark overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-brand-yellow font-bold text-sm tracking-wider mb-4">TESTIMONIALS</p>
                    <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight">
                        What users love<br />about Easily
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
                            className={`p-8 rounded-[2rem] border border-white/5 bg-[#121212] transform ${review.rotate} hover:z-10 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-yellow/10 hover:border-white/10 flex flex-col gap-4`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-gray-700 to-gray-900 border border-white/10"></div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">From</p>
                                    <p className="font-bold text-sm text-white">{review.name}</p>
                                </div>
                            </div>
                            <h3 className="font-display font-bold text-xl leading-tight text-white">{review.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{review.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
