import React from 'react';
import './Footer.css';
import { ButtonInscription} from './ButtonInscription';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Abonnez-vous et recevez nos actualités & bons services !
      </p>
      <p className='footer-subscription-text'>
        vous pouvez vous désabonner à tout moment
      </p>
      <div className='input-areas'>
        <form>
          <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
          />
          <ButtonInscription buttonStyle='btn--outline'>S'abonner</ButtonInscription>
        </form>
      </div>
    </section>
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>A propos de nous</h2>
          <Link to='/sign-up'>Comment ça marche</Link>
          <Link to='/'>Construire son profil</Link>
          <Link to='/'>Aide</Link>
          <Link to='/'>Politique de confidentialité</Link>
          <Link to='/'>Conditions générales d’utilisation</Link>
        </div>
        <div class='footer-link-items'>
          <h2>Contactez-nous</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Partenariat</Link>
          <Link to='/'>Recrutement</Link>
        </div>
      </div>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>Les plus demandés</h2>
          <Link to='/'>Soutien Scolaire</Link>
          <Link to='/'>Bricolage</Link>
          <Link to='/'>Déménagement</Link>
          <Link to='/'>Garde d’animaux</Link>
        </div>
        <div class='footer-link-items'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
          <Link to='/'>Youtube</Link>
          <Link to='/'>Twitter</Link>
        </div>
      </div>
    </div>
    <section class='social-media'>
      <div class='social-media-wrap'>
        <div class='footer-logo'>
          <Link to='/' className='social-logo'>
            E.TROC
            <i class='fab fa-typo3' />
          </Link>
        </div>
        <small class='website-rights'>E.TROC © 2021</small>
        <div class='social-icons'>
          <Link
            class='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <i class='fab fa-facebook-f' />
          </Link>
          <Link
            class='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
          >
            <i class='fab fa-instagram' />
          </Link>
          <Link
            class='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'
          >
            <i class='fab fa-youtube' />
          </Link>
          <Link
            class='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <i class='fab fa-twitter' />
          </Link>
          <Link
            class='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </Link>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Footer;