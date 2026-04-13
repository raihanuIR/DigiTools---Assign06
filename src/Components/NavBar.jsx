import { ShoppingCart } from 'lucide-react';

const NavBar = ({ cartCount }) => {
    return (
        <div className="navbar px-50 py-4 fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <div className="navbar-start">
                <div className="flex items-center gap-1 font-bold text-xl">
                    <img className="" src="./DigiTools.png" />
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-8 px-1 text-lg font-semibold">
                    <li>
                        <a>Products</a>
                    </li>
                    <li>
                        <a>Features</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Testimonials</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <div className='flex gap-5'>
                    <div className="flex items-center  text-slate-800">
                        <button className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
                            <ShoppingCart className="w-6 h-6 stroke-[1.5]" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        <button className="text-lg font-semibold hover:text-slate-600 transition-colors">
                            Login
                        </button>
                    </div>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 py-3 rounded-full text-white">Get Started</a>
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;