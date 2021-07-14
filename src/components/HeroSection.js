import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/IMG_0898.MOV' autoPlay loop muted />
      <h1>ГРУЗИЯ ВО ВСЕЙ КРАСЕ</h1>
      <p>с Фаигом</p>
      <div className='hero-btns'>
        <a
        href='/tours'
        className='btns btn--outline btn--large'
         
        >
         БЛИЖАЙШИЕ ТУРЫ
        </a>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // onClick={console.log('hey')}
        >
          ИНСТАГРАМ<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
