import React from 'react'
import "./whatsnew.scss";
export default function WhatsNew({image}) {
  return (
    <div className="whats_new_wrapper">
      <div className='dots'>
        <img src='images/dotts.png' alt='dots' />
      </div>
      <div className='back1'></div>
      <div className='back2'></div>
      <img src={image} alt="whats-new" />
      <div className='content'>
      <h3>Exciting Careers in Technology space today</h3>

      <button>Sign up</button>

      </div>
    </div>
  );
}
