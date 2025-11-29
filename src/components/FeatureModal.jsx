import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Icons } from './Icons';

// --- Context for Expansion ---
export const ExpansionContext = React.createContext({
    activeFeature: null,
    setActiveFeature: () => { }
});

// --- Expanded Content Views ---

const TravelContent = () => (
    <div className="flex flex-col h-full text-white p-2">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-display font-bold">Find a place to stay</h3>
            <div className="flex gap-2">
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">Hotels</span>
                <span className="bg-brand-yellow text-black px-3 py-1 rounded-full text-xs font-bold">Apartments</span>
            </div>
        </div>

        <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {[
                { title: "Guest suite in Coimbra", price: "$65", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=400&auto=format&fit=crop" },
                { title: "Private room in Combra", price: "$85", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=400&auto=format&fit=crop" },
                { title: "Well-equipped flat", price: "$92", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=400&auto=format&fit=crop" }
            ].map((item, i) => (
                <div key={i} className="flex gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer">
                    <img src={item.img} className="w-24 h-24 rounded-lg object-cover" />
                    <div className="flex flex-col justify-between flex-1 py-1">
                        <div>
                            <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                            <div className="flex text-brand-yellow text-xs">★★★★☆ <span className="text-gray-500 ml-1">(120)</span></div>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="text-sm"><span className="font-bold text-lg">{item.price}</span> / night</div>
                            <button className="bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Book</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ActivityContent = () => (
    <div className="flex flex-col h-full text-white p-2">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-display font-bold">Entertainment</h3>
            <div className="flex gap-2">
                <span className="bg-brand-yellow text-black px-3 py-1 rounded-full text-xs font-bold">Cinema</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">Theater</span>
            </div>
        </div>

        <div className="flex gap-6">
            <div className="w-1/3">
                <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop" className="w-full aspect-[2/3] object-cover rounded-xl mb-3 shadow-lg" />
                <h4 className="font-bold leading-tight">2001: A Space Odyssey</h4>
                <p className="text-xs text-gray-400 mt-1">Sci-fi • 2h 29m</p>
            </div>
            <div className="flex-1 bg-white/5 rounded-2xl p-4 flex flex-col items-center justify-center relative">
                <div className="w-full h-1 bg-white/20 mb-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]"></div> {/* Screen */}
                <div className="grid grid-cols-6 gap-2">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className={`w-6 h-6 rounded-t-lg ${[3, 4, 10, 11, 15].includes(i) ? 'bg-brand-yellow shadow-[0_0_10px_#FCD834]' : 'bg-white/20 hover:bg-white/40'} cursor-pointer transition-colors`}></div>
                    ))}
                </div>
                <div className="mt-8 w-full flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-400">Total</p>
                        <p className="font-bold text-xl">$45.00</p>
                    </div>
                    <button className="bg-brand-yellow text-black font-bold px-6 py-2 rounded-lg">Pay</button>
                </div>
            </div>
        </div>
    </div>
);

const GoalsContent = () => (
    <div className="flex flex-col h-full text-white p-2">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-display font-bold">Edit your goal</h3>
            <button className="bg-brand-yellow text-black text-xs font-bold px-3 py-1.5 rounded">Save changes</button>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 mb-6 relative overflow-hidden">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <p className="text-sm text-gray-400">Target Amount</p>
                    <p className="text-4xl font-display font-bold">$56,000</p>
                </div>
                <div className="text-right">
                    <p className="text-brand-yellow font-bold">24 months</p>
                    <p className="text-xs text-gray-500">projection</p>
                </div>
            </div>

            {/* SVG Chart */}
            <div className="h-32 w-full relative">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0 40 L0 30 Q 20 35, 40 20 T 100 5 L 100 40 Z" fill="rgba(252, 216, 52, 0.1)" />
                    <path d="M0 30 Q 20 35, 40 20 T 100 5" fill="none" stroke="#FCD834" strokeWidth="2" />
                </svg>
            </div>
        </div>

        <div className="space-y-3">
            <p className="text-xs font-bold uppercase text-gray-500">Contribution History</p>
            {[1, 2].map((_, i) => (
                <div key={i} className="flex justify-between items-center p-3 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">+</div>
                        <div>
                            <p className="font-bold text-sm">Monthly Deposit</p>
                            <p className="text-[10px] text-gray-400">Automatic transfer</p>
                        </div>
                    </div>
                    <span className="font-bold text-green-400">+$1,200</span>
                </div>
            ))}
        </div>
    </div>
);

const FinanceContent = () => (
    <div className="flex flex-col h-full text-white p-2">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-display font-bold">Total Balance</h3>
            <div className="text-right">
                <p className="text-3xl font-bold">$34,809.89</p>
                <p className="text-xs text-green-400">+2.4% this month</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 p-4 rounded-xl">
                <p className="text-xs text-gray-400 mb-2">Income</p>
                <div className="h-2 bg-gray-700 rounded-full mb-1"><div className="w-[80%] h-full bg-green-500 rounded-full"></div></div>
                <p className="text-right text-xs font-bold">$8,240</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl">
                <p className="text-xs text-gray-400 mb-2">Expenses</p>
                <div className="h-2 bg-gray-700 rounded-full mb-1"><div className="w-[45%] h-full bg-red-500 rounded-full"></div></div>
                <p className="text-right text-xs font-bold">$4,120</p>
            </div>
        </div>

        <div className="flex-1 overflow-hidden">
            <p className="text-xs font-bold uppercase text-gray-500 mb-3">Recent Transactions</p>
            <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div className="flex gap-3 items-center">
                        <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-xs font-bold">N</div>
                        <span>Netflix</span>
                    </div>
                    <span>-$14.99</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div className="flex gap-3 items-center">
                        <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-xs font-bold">U</div>
                        <span>Uber</span>
                    </div>
                    <span>-$24.50</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <div className="flex gap-3 items-center">
                        <div className="w-8 h-8 rounded bg-green-600 flex items-center justify-center text-xs font-bold">S</div>
                        <span>Spotify</span>
                    </div>
                    <span>-$12.99</span>
                </div>
            </div>
        </div>
    </div>
);

// --- Feature Modal Component ---
export const FeatureModal = () => {
    const { activeFeature, setActiveFeature } = useContext(ExpansionContext);

    if (!activeFeature) return null;

    const getContent = () => {
        switch (activeFeature) {
            case 'finance': return <FinanceContent />;
            case 'travel': return <TravelContent />;
            case 'activities': return <ActivityContent />;
            case 'goals': return <GoalsContent />;
            default: return null;
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveFeature(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>

            <motion.div
                layoutId={`card-${activeFeature}`}
                className="relative w-full max-w-4xl bg-[#141414] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-[80vh] md:h-[600px]"
            >
                <button
                    onClick={() => setActiveFeature(null)}
                    className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                </button>

                {/* Left Side: Visual/Context (Hidden on mobile for space) */}
                <div className="hidden md:flex w-1/3 bg-brand-yellow/5 border-r border-white/5 items-center justify-center p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-transparent"></div>
                    {activeFeature === 'travel' && <Icons.Plane className="w-32 h-32 text-brand-yellow opacity-50" />}
                    {activeFeature === 'finance' && <Icons.Dollar className="w-32 h-32 text-brand-yellow opacity-50" />}
                    {activeFeature === 'activities' && <Icons.Puzzle className="w-32 h-32 text-brand-yellow opacity-50" />}
                    {activeFeature === 'goals' && <Icons.Target className="w-32 h-32 text-brand-yellow opacity-50" />}
                </div>

                {/* Right Side: Detailed Content */}
                <div className="flex-1 p-6 md:p-8 overflow-hidden relative">
                    {getContent()}
                </div>
            </motion.div>
        </div>
    );
};
