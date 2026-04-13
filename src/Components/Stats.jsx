const Stats = () => {
    return (
        <div className="w-full bg-[linear-gradient(87.40deg,#4F29F6_0%,#9514FA_100%)] py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center">

                <div className="text-center  text-white p-4">
                    <h2 className="text-6xl font-extrabold mb-3">50K+</h2>
                    <p className="text-[#FFFFFF] text-2xl">Active Users</p>
                </div>

                <div className="text-center text-white p-4 border-y md:border-y-0 md:border-x border-white/20">
                    <h2 className="text-6xl font-extrabold mb-3">200+</h2>
                    <p className="text-[#FFFFFF] text-2xl">Premium Tools</p>
                </div>

                <div className="text-center text-white p-4">
                    <h2 className="text-6xl font-extrabold mb-3">4.9</h2>
                    <p className="text-[#FFFFFF] text-2xl">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;