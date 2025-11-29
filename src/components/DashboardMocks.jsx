import React from 'react';
import { Icons } from './Icons';

export const DashboardMock = () => {
    return (
        <div className="w-full h-full p-4 md:p-6 text-white relative overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">Your space</div>
                <div className="flex gap-2 text-gray-400">
                    <Icons.Bell className="w-4 h-4" />
                    <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 flex-1">
                <div className="col-span-5 flex flex-col gap-4">
                    <div className="bg-[#1A1A1A]/80 p-4 rounded-xl border border-white/5 shadow-lg">
                        <div className="text-xs text-gray-400 mb-1">Total Balance</div>
                        <div className="text-2xl max-[580px]:text-lg font-bold font-display">$34,809.89</div>
                        <div className="h-24 flex items-end justify-between gap-1 mt-4 px-1">
                            {[30, 45, 25, 60, 40, 75, 50, 65, 35].map((h, i) => (
                                <div key={i} className={`w-full rounded-t-sm ${i === 5 ? 'bg-brand-yellow' : 'bg-gray-700'}`} style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 bg-[#1A1A1A]/80 p-4 rounded-xl border border-white/5 space-y-3 overflow-hidden">
                        <div className="text-xs text-gray-400 font-bold mb-2">Transactions</div>
                        {[
                            { name: "Netflix", cost: "-$9.99", icon: "N", bg: "bg-red-600" },
                            { name: "Uber", cost: "-$14.20", icon: "U", bg: "bg-black" },
                            { name: "Spotify", cost: "-$12.99", icon: "S", bg: "bg-green-500" },
                        ].map((t, i) => (
                            <div key={i} className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <div className={`w-6 h-6 rounded ${t.bg} flex items-center justify-center font-bold text-[10px]`}>{t.icon}</div>
                                    <span>{t.name}</span>
                                </div>
                                <span className="text-gray-400">{t.cost}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-7 flex flex-col gap-4">
                    <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-xl border border-white/5 relative overflow-hidden h-32">
                        <h4 className="font-bold text-sm relative z-10 w-2/3">Refer a friend and receive $50</h4>
                        <button className="mt-2 text-[10px] bg-white text-black px-2 py-1 rounded relative z-10 font-bold">Send invite</button>
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=300&auto=format&fit=crop" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-50 mix-blend-overlay" />
                    </div>
                    <div className="flex gap-4 h-full">
                        <div className="flex-1 bg-[#2C1A1A] p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                            <div className="text-[10px] text-red-300">Unpaid bill</div>
                            <div>
                                <div className="text-xs text-gray-400">Rent due</div>
                                <div className="text-lg font-bold text-white">$2,000.00</div>
                            </div>
                            <button className="w-full bg-white/10 text-white text-[10px] py-1.5 rounded hover:bg-white/20">Pay now</button>
                        </div>
                        <div className="flex-1 space-y-2 max-[450px]:hidden">
                            <div className="h-1/2 bg-[#1A1A1A]/80 rounded-xl border border-white/5 flex items-center justify-center">
                                <Icons.Plane className="text-brand-yellow w-5 h-5" />
                            </div>
                            <div className="h-1/2 bg-[#1A1A1A]/80 rounded-xl border border-white/5 flex items-center justify-center">
                                <Icons.Puzzle className="text-purple-400 w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CapitalDashboard = () => {
    const [activeTab, setActiveTab] = React.useState('dollar');

    const renderContent = () => {
        switch (activeTab) {
            case 'grid':
                return <OverviewView />;
            case 'dollar':
                return <CapitalView />;
            case 'plane':
                return <TravelView />;
            case 'activity':
                return <ActivityView />;
            default:
                return <CapitalView />;
        }
    };

    return (
        <div className="w-full h-full bg-[#121212] flex rounded-2xl overflow-hidden font-sans text-white border border-white/10 shadow-2xl">
            {/* Sidebar */}
            <div className="w-12 md:w-14 bg-[#0A0A0A] border-r border-white/5 flex flex-col items-center py-6 gap-8 transition-all">
                <div className="w-8 h-8 rounded-full bg-brand-yellow text-black flex items-center justify-center font-bold">Q</div>
                <div className="flex flex-col gap-6 text-gray-500">
                    <button
                        onClick={() => setActiveTab('grid')}
                        className={`transition-colors hover:text-white ${activeTab === 'grid' ? 'text-brand-yellow' : ''}`}
                    >
                        <Icons.Grid />
                    </button>
                    <button
                        onClick={() => setActiveTab('dollar')}
                        className={`transition-colors hover:text-white ${activeTab === 'dollar' ? 'text-brand-yellow' : ''}`}
                    >
                        <Icons.Dollar />
                    </button>
                    <button
                        onClick={() => setActiveTab('plane')}
                        className={`transition-colors hover:text-white ${activeTab === 'plane' ? 'text-brand-yellow' : ''}`}
                    >
                        <Icons.Plane />
                    </button>
                    <button
                        onClick={() => setActiveTab('activity')}
                        className={`transition-colors hover:text-white ${activeTab === 'activity' ? 'text-brand-yellow' : ''}`}
                    >
                        <Icons.Activity />
                    </button>
                </div>
                <div className="mt-auto rounded-full overflow-hidden w-8 h-8">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-[#0E0E0E] overflow-y-auto custom-scrollbar relative">
                {renderContent()}
            </div>
        </div>
    )
}

const OverviewView = () => (
    <div className="p-3 md:p-6 flex flex-col gap-3 md:gap-6 min-h-full animate-in fade-in duration-500">
        <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Overview</span>
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 flex-1 md:auto-rows-fr">
            {/* Card 1: Total Assets (Span 2) */}
            <div className="h-full md:col-span-2 bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div className="text-xs text-gray-400">Total Assets</div>
                <div className="text-lg sm:text-xl md:text-3xl font-display font-bold truncate">$124,500.00</div>
                <div className="h-32 flex items-end gap-2 mt-4">
                    {[40, 60, 45, 70, 50, 80, 65, 55, 75, 60, 85, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-brand-yellow/20 rounded-t-sm hover:bg-brand-yellow/40 transition-colors" style={{ height: `${h}%` }}></div>
                    ))}
                </div>
            </div>

            {/* Card 2: Quick Actions (Span 1) */}
            <div className="h-full bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex flex-col gap-4">
                <div className="text-xs text-gray-400">Quick Actions</div>
                <div className="grid grid-cols-1 gap-3">
                    {['Transfer', 'Top-up', 'Exchange', 'More'].map((action, i) => (
                        <button key={i} className="bg-white/5 hover:bg-white/10 p-3 rounded-xl text-xs font-bold transition-colors text-left flex justify-between items-center group">
                            {action}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Card 3: Market Trends (Span 3 - New Row) */}
            <div className="h-full md:col-span-3 bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4">
                <div className="flex gap-4">
                    <div className="text-xs text-gray-400">Market Trends</div>
                    <div className="text-xs font-bold text-green-400">+2.4% today</div>
                </div>
                <div className="flex gap-2">
                    {['BTC', 'ETH', 'SOL', 'ADA'].map((coin, i) => (
                        <span key={i} className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-300">{coin}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const TravelView = () => (
    <div className="p-3 md:p-6 flex flex-col gap-3 md:gap-6 min-h-full animate-in fade-in duration-500">
        <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Travel</span>
            <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 flex-1 md:auto-rows-fr">
            {/* Card 1: Next Trip (Span 2) */}
            <div className="h-full md:col-span-2 bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[200px]">
                <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            </div>

            {/* Card 2: Flight Status (Span 1) */}
            <div className="h-full bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex flex-col justify-center">
                <div className="text-xs text-gray-400 mb-4">Flight Status</div>
                <div className="flex justify-between items-center mb-2">
                    <div className="text-2xl font-bold">JL 408</div>
                    <div className="text-xs text-green-400 bg-green-900/20 px-2 py-1 rounded">On Time</div>
                </div>
                <div className="flex justify-between items-center text-sm mt-4">
                    <div className="text-center">
                        <div className="text-xl font-mono font-bold">FRA</div>
                        <div className="text-[10px] text-gray-500">10:45</div>
                    </div>
                    <Icons.Plane className="w-4 h-4 text-gray-500" />
                    <div className="text-center">
                        <div className="text-xl font-mono font-bold">HND</div>
                        <div className="text-[10px] text-gray-500">08:20</div>
                    </div>
                </div>
            </div>

            {/* Card 3: Weather (Span 1) */}
            <div className="h-full bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
                <div className="text-xs text-gray-400 mb-2">Tokyo Weather</div>
                <div className="text-4xl font-bold mb-1">18°</div>
                <div className="text-xs text-gray-500">Partly Cloudy</div>
            </div>

            {/* Card 4: Itinerary (Span 2) */}
            <div className="h-full md:col-span-2 bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex flex-col">
                <div className="text-xs text-gray-400 mb-3">Itinerary Highlights</div>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                        <span className="text-gray-300">Team Dinner at Gonpachi</span>
                        <span className="ml-auto text-gray-500 text-xs">19:00</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        <span className="text-gray-300">Meeting with Partners</span>
                        <span className="ml-auto text-gray-500 text-xs">10:00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ActivityView = () => (
    <div className="p-3 md:p-6 flex flex-col gap-3 md:gap-6 min-h-full animate-in fade-in duration-500">
        <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Activity</span>
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 flex-1 md:auto-rows-fr">
            {/* Card 1: Monthly Spend (Span 1) */}
            <div className="h-full bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div className="text-xs text-gray-400">Monthly Spend</div>
                <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold truncate">$4,250.00</div>
                    <div className="text-[10px] text-gray-500 mt-1">+12% vs last month</div>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full mt-4 overflow-hidden">
                    <div className="w-[65%] h-full bg-red-500"></div>
                </div>
            </div>

            {/* Card 2: Recent Transactions (Span 2, Row Span 2) */}
            <div className="h-full md:col-span-2 md:row-span-2 bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-xs text-gray-400">Recent Transactions</div>
                    <button className="text-[10px] text-brand-yellow hover:underline">View All</button>
                </div>
                <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                    {[
                        { title: 'Payment received', time: '2m ago', amount: '+$450.00', color: 'text-green-400', icon: '↓' },
                        { title: 'Netflix Subscription', time: '1h ago', amount: '-$14.99', color: 'text-white', icon: 'N' },
                        { title: 'Uber Ride', time: '5h ago', amount: '-$24.50', color: 'text-white', icon: 'U' },
                        { title: 'Apple Store', time: 'Yesterday', amount: '-$999.00', color: 'text-white', icon: 'A' },
                        { title: 'Spotify', time: '2 days ago', amount: '-$12.99', color: 'text-white', icon: 'S' },
                        { title: 'Grocery Store', time: '3 days ago', amount: '-$156.20', color: 'text-white', icon: 'G' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-1.5 md:p-2 rounded-lg transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:bg-gray-700 transition-colors">{item.icon}</div>
                                <div>
                                    <div className="text-sm font-bold">{item.title}</div>
                                    <div className="text-[10px] text-gray-500">{item.time}</div>
                                </div>
                            </div>
                            <div className={`text-sm font-bold ${item.color}`}>{item.amount}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Card 3: Category Breakdown (Span 1) */}
            <div className="h-full bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
                <div className="text-xs text-gray-400 mb-2 w-full text-left">Top Categories</div>
                <div className="w-32 h-32 rounded-full border-4 border-gray-800 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-4 border-red-500 border-t-transparent rotate-45"></div>
                    <div className="text-center">
                        <div className="text-xl font-bold">35%</div>
                        <div className="text-[10px] text-gray-500">Shopping</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const CapitalView = () => (
    <div className="p-3 md:p-6 flex flex-col gap-3 md:gap-6 min-h-full animate-in fade-in duration-500">
        <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Your capital</span>
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            </div>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 flex-1 md:auto-rows-fr">

            {/* Col 1: Balance & Goals */}
            <div className="h-full flex flex-col justify-between gap-4">
                <div className="bg-[#1A1A1A] p-5 rounded-2xl border border-white/5">
                    <div className="flex justify-between mb-2">
                        <span className="text-xs text-gray-400">Balance</span>
                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">This month</span>
                    </div>
                    <div className="text-lg sm:text-xl md:text-3xl font-display font-bold mb-4 truncate">$34,809.89</div>
                    <div className="text-xs text-gray-500 mb-1">All accounts</div>
                </div>
                <div className="bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <div className="text-xs text-gray-400">Monthly goal</div>
                            <div className="text-xl font-bold">77% <span className="text-gray-500 text-sm">/ $42,000</span></div>
                        </div>
                        <button className="text-[10px] border border-white/20 px-2 py-1 rounded">Edit goal</button>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mt-2">
                        <div className="w-[77%] h-full bg-brand-yellow"></div>
                    </div>
                </div>
                <div className="bg-[#1A1A1A] px-5 py-3 rounded-xl border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Forecasted capital is $39,968.60</span>
                    <div className="w-8 h-4 bg-brand-yellow rounded-full relative">
                        <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                    </div>
                </div>
            </div>

            {/* Col 2: Upcoming Payment */}
            <div className="h-full flex flex-col gap-4">
                <div className="bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex-1 relative overflow-hidden group">
                    <div className="text-xs text-gray-400 mb-4">Upcoming payments</div>
                    <div className="flex items-center gap-3 mb-6">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <div className="text-xs text-gray-400">From</div>
                            <div className="font-bold text-sm">Henry Rogers</div>
                        </div>
                        <div className="ml-auto bg-green-900/30 text-green-400 text-[10px] px-2 py-1 rounded">VISA</div>
                    </div>
                    <div className="mb-2 text-xs text-gray-400">unregular payment</div>
                    <div className="text-lg sm:text-xl md:text-3xl font-display font-bold truncate">$1,200.00</div>

                    {/* Decorative circle */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl group-hover:bg-brand-yellow/10 transition-colors"></div>
                </div>

                {/* Recent Transactions List */}
                <div className="bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex-1">
                    <div className="text-xs text-gray-400 mb-4">Recent transactions</div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" className="w-8 h-8 rounded-full object-cover" />
                                <div>
                                    <div className="font-bold text-xs">Maria Charles</div>
                                    <div className="text-[10px] text-gray-500">Card transfer</div>
                                </div>
                            </div>
                            <div className="text-xs font-bold">-$100.00</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-[10px]">W</div>
                                <div>
                                    <div className="font-bold text-xs">We Work</div>
                                    <div className="text-[10px] text-gray-500">Health & Fitness</div>
                                </div>
                            </div>
                            <div className="text-xs font-bold">-$290.00</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Col 3: Expenses Pie Chart */}
            <div className="h-full bg-[#1A1A1A] p-5 rounded-2xl border border-white/5 flex flex-col">
                <div className="text-xs text-gray-400 mb-2">Expenses</div>
                <div className="flex-1 flex items-center justify-center relative">
                    {/* CSS Conic Gradient Pie Chart */}
                    <div className="w-40 h-40 rounded-full relative" style={{ background: 'conic-gradient(#FCD834 0% 65%, #333 65% 85%, #555 85% 100%)' }}>
                        <div className="absolute inset-4 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-xs text-gray-500">Total</div>
                                <div className="font-bold text-white">$24k</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 justify-center mt-4">
                    <div className="flex items-center gap-1 text-[10px] text-gray-400"><div className="w-2 h-2 bg-brand-yellow rounded-full"></div>Rent 65%</div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400"><div className="w-2 h-2 bg-[#333] rounded-full"></div>Food 20%</div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400"><div className="w-2 h-2 bg-[#555] rounded-full"></div>Ent. 15%</div>
                </div>
            </div>
        </div>
    </div>
);
