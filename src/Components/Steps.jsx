import React from 'react';
import { UserPlus, Box, Rocket } from 'lucide-react';

const Steps = () => {
    const steps = [
        {
            id: "01",
            title: "Create Account",
            desc: "Sign up for free in seconds. No credit card required to get started.",
            icon: <UserPlus className="w-10 h-10 text-[#8B1DFF]" />,
        },
        {
            id: "02",
            title: "Choose Products",
            desc: "Browse our catalog and select the tools that fit your needs.",
            icon: <Box className="w-10 h-10 text-[#8B1DFF]" />,
        },
        {
            id: "03",
            title: "Start Creating",
            desc: "Download and start using your premium tools immediately.",
            icon: <Rocket className="w-10 h-10 text-[#8B1DFF]" />,
        },
    ];

    return (
        <section className="py-30  bg-[#F9FAFC]">
            <div className="max-w-305 mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold  mb-4">Get Started In 3 Steps</h2>
                    <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="relative  p-10 border-2 border-gray-100 rounded-3xl bg-white   text-center flex flex-col items-center">

                            <span className="absolute top-6 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg ">
                                {step.id}
                            </span>

                            <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                                {step.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-[#627382] leading-relaxed max-w-60">
                                {step.desc}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;