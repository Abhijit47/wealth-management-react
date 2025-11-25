import { Link, NavLink } from 'react-router';

export default function Footer() {
  return (
    <div className='footer-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6' data-aos='fade-up'>
            <div className='widget'>
              <div className='footer_widget'>
                <div className='company-logo'>
                  <NavLink to='/'>
                    <img src='/logo.svg' alt='logo' width={80} height={80} />
                  </NavLink>
                </div>
                <p>
                  Conveniently fashion market positioning readiness before
                  sticky communities. Assertively matrix multif sources through
                  team building
                </p>
                <div className='hotelhub-social-icon cursor-scale small'>
                  <h3 className='follow-title'>Follow Us On :</h3>
                  <Link to='#'>
                    <span className='visually-hidden'>fb: </span>
                    <i className='fab fa-facebook-f'></i>
                  </Link>
                  <Link to='#'>
                    <span className='visually-hidden'>ln: </span>
                    <i className='fa-brands fa-linkedin-in'> </i>
                  </Link>
                  <Link to='#'>
                    <span className='visually-hidden'>x: </span>
                    <i className='bi bi-twitter'></i>
                  </Link>
                  <Link to='#'>
                    <span className='visually-hidden'>pin: </span>
                    <i className='fab fa-pinterest-p'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-6' data-aos='fade-up'>
            <div className='widget widget-nav-menu'>
              <h4 className='widget-title'>About Us</h4>
              <div className='menu-quick-link-content'>
                <ul className='footer-menu cursor-scale small'>
                  <li>
                    <a href='#'> About Hotel </a>
                  </li>
                  <li>
                    <a href='#'> Rooms & Suites </a>
                  </li>
                  <li>
                    <a href='#'> Reservations </a>
                  </li>
                  <li>
                    <a href='#'> Latest Blog </a>
                  </li>
                  <li>
                    <a href='#'> Our Team </a>
                  </li>
                  <li>
                    <a href='#'> Contact Us </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-6' data-aos='fade-up'>
            <div className='widget widget-nav-menu'>
              <h4 className='widget-title'>Usefull Links</h4>
              <div className='menu-quick-link-content'>
                <ul className='footer-menu cursor-scale small'>
                  <li>
                    <a href='#'> Booking </a>
                  </li>
                  <li>
                    <a href='#'> Rooms & Suites </a>
                  </li>
                  <li>
                    <a href='#'> Testimonials </a>
                  </li>
                  <li>
                    <a href='#'> Career </a>
                  </li>
                  <li>
                    <a href='#'> Privecy Policy </a>
                  </li>
                  <li>
                    <a href='#'> FAQ's </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6' data-aos='fade-up'>
            <div className='widget hotelhub-footer_widget'>
              <h4 className='widget-title'>Our Galary</h4>
              <div className='footer-recent'>
                <Link to='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend06.png' alt='' />
                </Link>
                <a href='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend05.png' alt='' />
                </a>
                <a href='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend04.png' alt='' />
                </a>
                <a href='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend03.png' alt='' />
                </a>
                <a href='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend02.png' alt='' />
                </a>
                <a href='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend01.png' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row footer-btm d-flex align-items-center'>
          <div className='col-lg-6 col-md-6'>
            <div className='hotelhub-company-desc'>
              <p>
                &copy; Copyright {new Date().getFullYear()} Ascent Wealth
                Management.
              </p>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
            <div className='footer-bottom-menu text-right'>
              <ul>
                <li>
                  <a href='#'>
                    <span className='visually-hidden'>Payoneer: </span>
                    <img src='/images/main-home/curency01.png' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='visually-hidden'>Paypal: </span>
                    <img src='/images/main-home/curency02.png' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='visually-hidden'>Stripe: </span>
                    <img src='/images/main-home/curency03.png' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='visually-hidden'>Visa: </span>
                    <img src='/images/main-home/curency04.png' alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
