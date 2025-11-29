import React from 'react';
import { motion } from 'framer-motion';
import { CapitalDashboard } from './DashboardMocks';

export const MultiToolSection = () => {
    return (
        <section className="py-24 px-6 bg-brand-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-brand-yellow font-bold text-sm tracking-wider mb-4 uppercase"
                >
                    Try it for free
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black font-display uppercase mb-8 leading-tight"
                >
                    Your multi-tool<br />for living
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <button className="bg-brand-yellow text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(252,216,52,0.3)]">
                        Start now
                    </button>
                </motion.div>

                {/* Capital Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: 20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto max-w-5xl h-[500px] md:h-auto md:aspect-[16/10] perspective-1000"
                >
                    <CapitalDashboard />
                </motion.div>
            </div>
        </section>
    );
};
