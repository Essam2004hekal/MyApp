import React , {useEffect , useState}  from 'react'
import {BrowserRouter , Route , Routes } from 'react-router-dom'

import PacmanLoader from 'react-spinners/PacmanLoader'


import AOS from 'aos';
import 'aos/dist/aos.css';

import "./App.css"
// Components
import Home from "./Home"
import NavBarr from "./NavBarr"
import Contact from './Contact';

const App = () => {

const [loading , setLoading] = useState(false);

useEffect(() => {
setLoading(true);
setTimeout(() => {
  setLoading(false);
} , 5000)
}, []);



useEffect(() => {
  AOS.init();
}, [])


  return (

    <BrowserRouter>

    {loading ? 


    <div>
          <PacmanLoader  className='scale' size={70} color={'#f8af12'} loading={loading} height={100} margin={10} />
    </div>
    
    
    
    : 
    <>

    <NavBarr /> 

<Routes>
<Route path='/' element={<Home />} />
</Routes>

</>
}

   </BrowserRouter>

  )
}

export default App