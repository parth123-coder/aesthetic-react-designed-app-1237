import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './Icons';

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const questions = [
        "How secure is Easily with my financial information?",
        "Can I use Easily if I'm not a tech expert?",
        "How does Easily ensure the safety of my travel bookings?",
        "What sets Easily apart in terms of goal-setting assistance?"
    ];

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
                <h2 className="text-4xl font-black font-display uppercase mb-4">Got any<br />questions?</h2>
                <p className="text-gray-400 mb-8">We can answer them</p>
                <button className="text-white border-b border-white pb-1 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                    Reach out here
                </button>
            </div>
            <div className="lg:w-2/3 space-y-4">
                {questions.map((q, i) => (
                    <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-brand-card">
                        <button
                            onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                            className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-white/5 transition-colors"
                        >
                            {q}
                            <span className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                                <Icons.ChevronDown />
                            </span>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-gray-400 text-sm">
                                        Easily uses industry-standard encryption and follows best practices to ensure your information is protected at all times. We never sell your data to third parties.
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};
