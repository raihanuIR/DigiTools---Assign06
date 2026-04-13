import './App.css'
import Banner from './Components/Banner'
import Cart from './Components/Cart'
import Models from './Components/Models'
import NavBar from './Components/NavBar'
import { useState } from 'react';
import Stats from './Components/Stats'
import Steps from './Components/Steps'
import Pricing from './Components/Pricing'
import Ready from './Components/Ready'
import Footer from './Components/Footer'

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}
const modelPromise = getModels()

function App() {

  const [activeTab, setActiveTab] = useState("model")
  const [cart, setCart] = useState([])
  

  return (
    <>
       <NavBar cartCount={cart.length} /> 

       <Banner />

       <Stats />

       <div className='text-center mt-30'>
        <h1 className='font-extrabold text-5xl'>Premium Digital Tools</h1>
        <p className='text-[#627382] my-4'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
       </div>
      
      <div className="flex items-center justify-center bg-transparent max-w-sm rounded-full mx-auto mt-10 p-1 border border-gray-200">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab flex-1 rounded-full py-6 transition-all checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white"
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("model")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab flex-1 rounded-full py-6 transition-all checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white"
          aria-label={`Cart (${cart.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

       {activeTab === "model" && <Models modelPromise={modelPromise} cart={cart} setCart={setCart} />}
       {activeTab === "cart" && <Cart cart={cart} setCart={setCart} />}

       <Steps />
       
       <Pricing />

       <Ready />

       <Footer />
    </>
  )
}

export default App
