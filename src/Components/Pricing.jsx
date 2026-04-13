import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-300 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
                    <p className="text-slate-500 text-lg">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">


                    <div className="flex flex-col p-8 rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl hover:border-purple-100">
                        <h3 className="text-2xl font-bold text-slate-900">Starter</h3>
                        <p className="text-slate-500 mt-2">Perfect for getting started</p>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-slate-900">$0</span>
                            <span className="text-slate-500">/Month</span>
                        </div>
                        <ul className="mt-6 space-y-2 grow">
                            {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                                    <Check className="w-5 h-5 text-emerald-500 shrink-0" strokeWidth={3} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-10 w-full py-4 rounded-full bg-[#8B1DFF] text-white font-bold hover:bg-[#7618D9] transition-all">
                            Get Started Free
                        </button>
                    </div>

                    
                    <div className="relative flex flex-col p-8 rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-xl shadow-purple-200 transition-all duration-300 ease-out hover:-translate-y-4 hover:shadow-2xl">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                            Most Popular
                        </div>
                        <h3 className="text-2xl font-bold text-white">Pro</h3>
                        <p className="text-indigo-100/80 mt-2">Best for professionals</p>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-white">$29</span>
                            <span className="text-indigo-100/80">/Month</span>
                        </div>
                        <ul className="mt-6 space-y-2 grow">
                            {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-white text-sm">
                                    <Check className="w-5 h-5 text-white shrink-0" strokeWidth={3} /> {item}
                                </li>
                            ))} 
                        </ul>
                        <button className="mt-10 w-full py-4 rounded-full bg-white text-[#8B1DFF] font-bold hover:bg-gray-50 transition-all">
                            Start Pro Trial
                        </button>
                    </div>

                
                    <div className="flex flex-col p-8 rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl hover:border-purple-100">
                        <h3 className="text-2xl font-bold text-slate-900">Enterprise</h3>
                        <p className="text-slate-500 mt-2">For teams and businesses</p>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-slate-900">$99</span>
                            <span className="text-slate-500">/Month</span>
                        </div>
                        <ul className="mt-6 space-y-2  grow">
                            {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                                    <Check className="w-5 h-5 text-emerald-500 shrink-0" strokeWidth={3} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-10 w-full py-4 rounded-full bg-[#8B1DFF] text-white font-bold hover:bg-[#7618D9] transition-all">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;