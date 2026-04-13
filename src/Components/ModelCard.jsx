import React from 'react';
import * as LucideIcons from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({ model, cart, setCart }) => {

    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        setIsSubscribed(true);

        const alreadyInCart = cart.find(item => item.id === model.id);
        if (alreadyInCart) {
            toast.info("Already in cart!");
            return;
        }

        setCart([...cart, model]);
        toast.success("Added to cart!");
    }

    const tagStyles = {
        "best seller": "bg-[#FEF3C7] text-[#92400E]", // Amber/Orange
        "popular": "bg-purple-100 text-purple-700",   // Purple
        "new": "bg-emerald-100 text-emerald-700",      // Green
    };

    return (
        <div key={model.id} className='flex flex-col h-full relative border border-gray-100 bg-white rounded-3xl p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-200'>

            {model.tag && (
                <div className={`absolute top-6 right-6 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${tagStyles[model.tagType] || "bg-gray-100 text-gray-600"}`}>
                    {model.tag}
                </div>
            )}

            <div className='mb-4'>
                <div className="w-16 h-16 rounded-full  flex items-center justify-center border border-gray-100">
                    <img src={model.icon} alt={model.name} className="w-10 h-10 object-contain" />
                </div>
            </div>

            <div className='flex flex-col grow'>
                <h2 className='text-2xl font-bold mb-2 text-slate-900'>{model.name}</h2>
                <p className='text-[#627382] font-[400px] mb-4 leading-relaxed line-clamp-2'>{model.description}</p>

                <div className='mt-auto flex items-baseline gap-1'>
                    <span className='text-2xl font-bold  text-[#101727]'>{model.price}
                        <span className='text-[16px] text-[#627382] font-normal'>/Mo</span>
                    </span>
                </div>

                <ul className='mt-4 space-y-2 '>
                    {model.features.map((feature, index) => (
                        <li key={index} className='flex items-center gap-3 font-medium text-slate-600'>
                            <LucideIcons.Check className='h-5 w-5 shrink-0 text-emerald-500' strokeWidth={3} />
                            {feature}
                        </li>
                    ))}
                </ul>


                <button onClick={handleSubscribe} className='mt-4 w-full rounded-full bg-[#8B1DFF] py-4 text-lg font-semibold text-white hover:bg-[#7618D9] shadow-sm'>
                    {isSubscribed ? 'Added to Cart' : 'Buy Now'}
                </button>
            </div>
        </div>
    );
};

export default ModelCard;
