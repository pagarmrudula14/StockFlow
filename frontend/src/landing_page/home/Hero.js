import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return ( 
        <div className='container p-5 mb-5'>
          <div className='row text-center'>
            <img src='/media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
            <h1 className='mt-5'>Invest in Everything</h1>
            
            <p>Online Platform to invest in Stocks, Derivatives , Mutual Funds , and many more</p>
             <button
               className='p-2 btn btn-primary fs-5 mb-5'
               style={{width:"25%",margin:"0 auto"}}
               onClick={() => navigate('/Signup')}
             >
               Signup Now
             </button>
           </div>
        </div>
     );
}

export default Hero;