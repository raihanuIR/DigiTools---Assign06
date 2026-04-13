
import InstagramIcon from '../assets/Instagram.png';
import FacebookIcon from '../assets/Facebook.png';
import XIcon from '../assets/Twitter.png';
import Logo from '../assets/DigiTools2.png';

const Footer = () => {
    return (
        <footer className="bg-[#0B1120] text-white pt-20 pb-10 px-6 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                <div className="lg:col-span-2 space-y-6">
                    <img src={Logo} alt="DigiTools" className="w-40 h-auto" />
                    <p className="text-slate-400 leading-relaxed">
                        Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br />with our suite of powerful tools.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-lg">Product</h3>
                    <ul className="space-y-3 text-slate-400">
                        <li className="hover:text-white cursor-pointer transition">Features</li>
                        <li className="hover:text-white cursor-pointer transition">Pricing</li>
                        <li className="hover:text-white cursor-pointer transition">Templates</li>
                        <li className="hover:text-white cursor-pointer transition">Integrations</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="font-bold text-lg">Company</h3>
                    <ul className="space-y-3 text-slate-400">
                        <li className="hover:text-white cursor-pointer transition">About</li>
                        <li className="hover:text-white cursor-pointer transition">Blog</li>
                        <li className="hover:text-white cursor-pointer transition">Careers</li>
                        <li className="hover:text-white cursor-pointer transition">Press</li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="font-bold text-lg">Social Links</h3>
                    <div className="flex gap-4">
                        <img src={InstagramIcon} alt="Instagram" className="w-10 h-10 object-contain" />
                        <img src={FacebookIcon} alt="Facebook" className="w-10 h-10 object-contain" />
                        <img src={XIcon} alt="X" className="w-10 h-10 object-contain" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
                <p>© 2026 Digitools. All rights reserved.</p>
                <div className="flex gap-8">
                    <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
                    <span className="hover:text-white cursor-pointer transition">Cookies</span>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;