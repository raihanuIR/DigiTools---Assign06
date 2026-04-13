import React from 'react';
import { toast } from 'react-toastify';
import { ShoppingCart } from 'lucide-react';

 

const Cart = ({ cart, setCart }) => {

    const handleCheckout = () => {
        setCart([]);
    }

    const handleDelete = (item) => {
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
        toast.info("Item removed from cart!");
    }
    
    const totalPrice = cart.reduce((sum, item) => {
        
        const cleanPrice = item.price.toString().replace(/[^0-9.]/g, '');
        return sum + parseFloat(cleanPrice || 0);
    }, 0);

    return (
        <div className="max-w-300 mx-auto p-6 border border-gray-100 rounded-2xl bg-white shadow-sm mt-20 mb-20">
            <h2 className="text-xl font-bold mb-17 text-slate-900">Your Cart</h2>

            {
                cart.length === 0 ?
                
                    <div className='flex flex-col items-center justify-center'>
                        <ShoppingCart className="w-23 h-auto text-center stroke-[1.5]" />
                        <p className="text-slate-500 text-center py-10">Your cart is empty. Start adding some tools!</p>
                    </div> 
                    
                 : 

                <>
                        <div className="space-y-4 mb-8">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl transition-all hover:bg-slate-100/50">
                                    <div className="flex items-center gap-4">

                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 p-2 shadow-sm">
                                            <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm sm:text-base">{item.name}</h3>
                                            <p className="text-slate-500 text-xs sm:text-sm font-medium">{item.price}</p>
                                        </div>
                                    </div>

                                    <button onClick={() => handleDelete(item)} className="text-rose-500 text-sm font-semibold hover:text-rose-600 transition-colors px-2">
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>


                        <div className="flex justify-between items-center mb-6 px-2 border-t border-gray-50 pt-6">
                            <span className="text-slate-400 font-medium">Total:</span>
                            <span className="text-3xl font-bold text-slate-900">${totalPrice.toFixed(2)}</span>
                        </div>

                        <button onClick={handleCheckout} className="w-full bg-[#8B1DFF] text-white py-4 rounded-full font-bold text-lg shadow-md transition-all hover:bg-[#7618D9] active:scale-[0.98]">
                            Proceed To Checkout
                        </button>    
                </>

            }

            
        </div>
    );
};

export default Cart;