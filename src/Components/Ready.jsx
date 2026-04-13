const Ready = () => {
    return (
        <section className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30 px-40 text-center text-white">
            <div className="max-w-300 mx-auto space-y-6">
                <h2 className="text-5xl font-bold ">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="text-[#FFFFFF] text-lg max-w-2xl mx-auto leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
                    <button className="bg-white text-[#8B1DFF] px-8 py-4 rounded-full font-bold text-lg 
                             transition-all duration-200 
                             hover:bg-indigo-50 hover:shadow-lg 
                             active:scale-95 active:shadow-inner">
                        Explore Products
                    </button>

                    <button className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 
                             transition-all duration-200 
                             hover:bg-white/10 
                             active:scale-95 active:bg-white/20">
                        View Pricing
                    </button>
                </div>

                <p className="text-indigo-100/60 text-sm pt-2">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default Ready;