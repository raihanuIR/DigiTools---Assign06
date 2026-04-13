import { use } from 'react';

import * as LucideIcons from 'lucide-react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise, cart, setCart }) => {
    const models = use(modelPromise);
    

    return (
        <div className='py-20 bg-slate-50/30'>
            
            <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {models.map((model) => (
                    <ModelCard key={model.id} model={model} cart={cart} setCart={setCart} />
                ))}
            </div>
        </div>
    );
};

export default Models;