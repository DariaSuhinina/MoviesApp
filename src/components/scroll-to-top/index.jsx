import React, { useState, useEffect, useCallback } from 'react';

import './styles.css';
import scroll from './scroll.svg';

const ScrollToTop = () => {
  const [scrollTo, setScrollTo] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {

      if (window.scrollY > 300) {
        setScrollTo(true)
      } 
      else {
        setScrollTo(false)
      };

      console.log(window.scrollY)
    })
  }, [])

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      {scrollTo && <img src={scroll} className='scroll' onClick={toTop} />}
    </div>
  )
}

export default ScrollToTop;