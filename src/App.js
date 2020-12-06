import React, { useRef } from 'react';
import './App.css';
import adidas from './images/shoe3.png';


function App() {

  const card = useRef(null);
  const container = useRef(null);
  const title = useRef(null);  
  const shoe = useRef(null);  
  const description = useRef(null);  
  const sizes = useRef(null);  
  const purchase = useRef(null);

  const mouseMoment = (e) => {
    const xAxis = (window.innerWidth/2 - e.pageX)/20;
    const yAxis = (window.innerWidth/2 - e.pageY)/20;
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }

  const mouseEnter = (e) => {
    card.current.style.transition = 'none';
    title.current.style.transform = 'translateZ(100px)';
    shoe.current.style.transform = 'translateZ(120px) rotateZ(-45deg)';
    description.current.style.transform = 'translateZ(80px)';
    sizes.current.style.transform = 'translateZ(50px)';
    purchase.current.style.transform = 'translateZ(30px)';
  }

  const mouseLeave = (e) => {
    card.current.style.transition = 'all 0.5s ease-out';
    card.current.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.current.style.transform = 'translateZ(0)';
    shoe.current.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.current.style.transform = 'translateZ(0px)';
    sizes.current.style.transform = 'translateZ(0px)';
    purchase.current.style.transform = 'translateZ(0px)';
  }


  return (
    <div className="container" 
    ref={container} onMouseMove={mouseMoment} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter}>
      <div className='card' 
      ref={card} >
        <div className='shoe' >
          <div className='circle'></div>
            <img src={adidas} alt='adidas shoe' ref ={shoe}>
            </img>
        </div>
        <div className='info'>
            <h1 className='title' ref ={title}>Adidas Hxt</h1>
            <h3 ref={description}>FUTURE READY TRAINERS WITH WRAPPED BOAST FOR EXCEPTION COMFORT</h3>
            <div className='sizes' ref={sizes}>
              <button ref ={sizes}>32</button>
              <button ref ={sizes}>34</button>
              <button ref ={sizes} className='active'>36</button>
              <button ref ={sizes}>38</button>
            </div>
            <div className='purchase' >
              <button ref ={purchase}>purchase</button>
            </div>
        </div>        
      </div>
    </div>
  );
}

export default App;
