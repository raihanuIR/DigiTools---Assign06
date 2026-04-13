import BannerImage from "../assets/banner.png";
import Play from "../assets/play.png";

const Banner = () => {
    return (
        <section className="max-w-400 mx-auto px-25 py-15 grid lg:grid-cols-2 gap-15 items-center font-sans">
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-indigo-50 text-[#4F39F6] px-4 py-1.5 rounded-full text-sm font-semibold ">
                    <span className="w-2 h-2 bg-[#4F39F6] rounded-full animate-pulse"></span>
                    New: AI-Powered Tools Available
                </div>

                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                    Supercharge Your <br /> Digital Workflow
                </h1>

                <p className="text-lg text-[#627382] ">
                    Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today.
                </p>

                <div className="flex items-center gap-4 pt-4">
                    <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-purple-200 hover:opacity-90 active:scale-95 transition">
                        Explore Products
                    </button>

                    <button className="flex items-center gap-2 px-6 py-4 rounded-full font-bold border-2 border-[#9514FA] text-[#9514FA] hover:bg-slate-50 transition">
                        <img src={Play} alt="Play" className="w-5 h-5" />
                        Watch Demo
                    </button>
                </div>
            </div>

            <div className="relative">
                <img
                    src={BannerImage}
                    alt="Digital Workflow"
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </section>
    );
};

export default Banner;