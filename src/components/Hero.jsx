import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DashboardMock, CapitalDashboard } from './DashboardMocks';
import { RibbonShape, StarShape, Icons } from './Icons';
import { TextReveal } from './TextReveal';
import { Reveal } from './Reveal';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 15]);

    return (
        <section className="relative min-h-[100vh] md:min-h-[110vh] flex flex-col items-center pt-24 md:pt-32 pb-20 overflow-hidden bg-brand-dark">
            <div className="text-center z-20 max-w-4xl mx-auto px-4 mb-16">
                <Reveal delay={0.1}>
                    <p className="text-brand-yellow font-bold tracking-widest text-[10px] md:text-xs mb-6 uppercase">
                        Make your life easily
                    </p>
                </Reveal>

                <div className="mb-8 md:mb-10">
                    <TextReveal
                        text="THE MODERN WAY TO LIVE"
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[0.9] tracking-tighter text-white justify-center"
                        delay={0.2}
                    />
                </div>

                <Reveal delay={0.6}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-yellow text-black px-8 py-3.5 rounded-full text-base font-bold shadow-[0_0_40px_rgba(252,216,52,0.4)] hover:shadow-[0_0_60px_rgba(252,216,52,0.6)] transition-all"
                    >
                        Start now
                    </motion.button>
                </Reveal>
            </div>

            <div className="relative w-full max-w-[1200px] h-auto md:h-[800px] hero-perspective flex justify-center px-4 md:px-0">
                <motion.div
                    style={{ y: y1, rotateX: 20 }}
                    initial={{ opacity: 0, rotateX: 45, y: 100 }}
                    animate={{ opacity: 1, rotateX: 10, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="relative md:absolute top-0 w-full md:w-[850px] h-[500px] md:h-auto md:aspect-[16/10] glass-panel rounded-2xl shadow-2xl z-10 overflow-hidden border border-white/10"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-20"></div>
                    <DashboardMock />
                </motion.div>
                <motion.div
                    style={{ y: y2 }}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1, ease: "backOut" }}
                    className="hidden md:block absolute -left-12 top-10 w-64 bg-[#2e1d22] rounded-xl p-3 shadow-xl z-20 -rotate-6 border border-white/10"
                >
                    <img src="https://media.istockphoto.com/id/1364054930/photo/crowd-of-unrecognisable-people-crossing-street-on-traffic-light-zebra.webp?a=1&b=1&s=612x612&w=0&k=20&c=eaQ5JW_jV6ONUMFnxf96cj_IQPoaEUGAKZcv0ydgeOA=" className="w-full h-32 object-cover rounded-lg mb-3 opacity-80" />
                    <h3 className="font-display font-bold text-lg leading-tight mb-2 text-white">Quickly discover what's nearby</h3>
                    <button className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-full">Download the app</button>
                </motion.div>
                <motion.div
                    style={{ y: y2, rotate: rotate }}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1, ease: "backOut" }}
                    className="hidden md:block absolute -right-4 top-0 bg-white p-3 rounded-xl shadow-xl z-0 rotate-12 w-40 h-40"
                >
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ModernLife" className="w-full h-full mix-blend-multiply opacity-90" />
                </motion.div>
                <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-20 bottom-40 w-32 h-32 opacity-80 hidden md:block"
                >
                    <RibbonShape />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute left-[15%] bottom-[20%] w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-30 hidden md:flex"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="black"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /><circle cx="12" cy="12" r="5" fill="black" /></svg>
                </motion.div>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-10 bottom-48 z-0 hidden md:block"
                >
                    <StarShape />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute right-[20%] bottom-[10%] w-16 h-16 rounded-full border-2 border-white/20 overflow-hidden shadow-xl z-30 hidden md:block"
                >
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-[10%] top-[10%] w-12 h-12 bg-gray-700/50 backdrop-blur rounded-full flex items-center justify-center text-gray-300 z-0 hidden md:flex"
                >
                    <Icons.CreditCard />
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-40"></div>
        </section>
    );
};
