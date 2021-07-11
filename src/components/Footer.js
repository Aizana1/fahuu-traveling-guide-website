import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Если хотите, чтобы я с вами связался, оставьте свой номер{' '}
        </p>

        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="name"
              type="name"
              placeholder="Как вас зовут"
            />
            <input
              className="footer-input"
              name="phone"
              type="phone"
              placeholder="Ваш номер"
            />
            <Button buttonStyle="btn--outline">Хочу в тур!</Button>
          </form>
        </div>
      </section>

      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Fa_huu
              {/* <i class='fab fa-typo3' /> */}
            </Link>
          </div>
          <small class="website-rights">Aiza © 2021</small>
          <div class="social-icons">
            <Link
              class="social-icon-link instagram"
              to="www.instagram.com/fa_huu/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
