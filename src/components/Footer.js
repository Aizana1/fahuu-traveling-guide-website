import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import {FaInstagram} from 'react-icons/fa'
import {ImTelegram} from 'react-icons/im'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Чтобы увидеть еще больше фотографий и связаться со мной, заходите в мой инстаграм или телегам-канал
       <div><a href="https://www.instagram.com/fa_huu/"><FaInstagram /></a>
       <a style={{padding: 10}} href="https://t.me/fa_huu/"><ImTelegram /></a></div>

       </p>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Fa_huu
            </Link>
          </div>
          <small class="website-rights">Aizana © 2021</small>
      
        </div>
      </section>
    </div>
  )
}

export default Footer
