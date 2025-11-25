import { NavLink } from 'react-router';
import { navlinks } from '~/constants';

export default function Navbar() {
  return (
    <header id='sticky-header' className='hotelhub_nav_manu'>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-lg-3'>
            <div className='logo'>
              <NavLink
                className='logo_img rounded-full'
                to='/'
                title='Ascent Wealth Management'>
                <img
                  src='/logo.svg'
                  alt='logo'
                  width={80}
                  height={80}
                  className={'rounded-full'}
                />
              </NavLink>
            </div>
          </div>
          <div className='col-lg-9'>
            <nav className='meedy_menu'>
              <ul className='nav_scroll'>
                {navlinks.map((link, idx) => {
                  const isFirstElement = idx === 0;
                  return (
                    <li key={link.id}>
                      <NavLink
                        className={isFirstElement ? undefined : 'mdy-hover'}
                        to={link.href}>
                        {link.label}
                      </NavLink>
                    </li>
                  );
                })}
                {/* <li>
                  <NavLink className='mdy-hover' to='#'>
                    Home <i className='fas fa-angle-down'></i>
                  </NavLink>
                  <ul className='sub-menu'>
                    <li>
                      <NavLink to='index.html'>Luxury Hotel</NavLink>
                    </li>
                    <li>
                      <NavLink to='index-light.html'>
                        Luxury Hotel Light
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='index-2.html'>Hotel Booking</NavLink>
                    </li>
                    <li>
                      <NavLink to='index-2-light.html'>
                        Hotel Booking Light
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='index-3.html'>City Hotel</NavLink>
                    </li>
                    <li>
                      <NavLink to='index-3-light.html'>
                        City Hotel Light
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='index-4.html'>Mountain Hotel </NavLink>
                    </li>
                    <li>
                      <NavLink to='index-5.html'>Airport Hotel</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='mdy-hover' href='#'>
                    Rooms <i className='fas fa-angle-down'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='rooms.html'>Rooms</a>
                    </li>
                    <li>
                      <a href='rooms-details.html'>Rooms Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='mdy-hover' href='#'>
                    Service <i className='fas fa-angle-down'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='service.html'>Our Service</a>
                    </li>
                    <li>
                      <a href='service-details.html'>Service Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='mdy-hover' href='#'>
                    Dine <i className='fas fa-angle-down'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='dine.html'>Dine Overview</a>
                    </li>
                    <li>
                      <a href='restaurant.html'>Restaurent</a>
                    </li>
                    <li>
                      <a href='cafy.html'>Cafy</a>
                    </li>
                    <li>
                      <a href='cafy2.html'>Steakhouse</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='mdy-hover' href='#'>
                    Sports <i className='fas fa-angle-down'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='sports.html'>Sports Overview</a>
                    </li>
                    <li>
                      <a href='sports2.html'>Summer Activities</a>
                    </li>
                    <li>
                      <a href='sports3.html'>Winter Activities</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='mdy-hover' href='#'>
                    Pages <i className='fas fa-angle-down'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='about.html'>About Us</a>
                    </li>
                    <li>
                      <a href='offer.html'>Exclusive Offers</a>
                    </li>
                    <li>
                      <a className='mdy-hover' href='relux.html'>
                        Relux Overview
                      </a>
                    </li>
                    <li>
                      <a href='service.html'>Our Service</a>
                    </li>
                    <li>
                      <a href='service-details.html'>Service Details</a>
                    </li>
                    <li>
                      <a href='team.html'>Our Team</a>
                    </li>
                    <li>
                      <a href='team-details.html'>Team Details</a>
                    </li>
                    <li>
                      <a href='testimonial.html'>Testimonial</a>
                    </li>
                    <li>
                      <a href='pricing.html'>Pricing</a>
                    </li>
                    <li>
                      <a href='galary.html'>Gallery</a>
                    </li>
                    <li>
                      <a href='faq.html'>Faqs</a>
                    </li>
                    <li>
                      <a href='booking.html'>Booking</a>
                    </li>
                    <li>
                      <a href='404.html'>404</a>
                    </li>
                    <li>
                      <a href='contact.html'>Contact Us</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='mdy-hover' href='#'>
                    Blog <i className='fas fa-angle-down'></i>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='blog-grid.html'>Blog Gird</a>
                    </li>
                    <li>
                      <a href='blog-list.html'>Blog List</a>
                    </li>
                    <li>
                      <a href='blog-2colum.html'>Blog 2Column</a>
                    </li>
                    <li>
                      <a href='blog-left-sidebar.html'>Left Sidebar</a>
                    </li>
                    <li>
                      <a href='blog-details.html'>Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='mdy-hover' href='contact.html'>
                    Contact{' '}
                  </a>
                </li> */}
              </ul>
              <div className='hotelhub-right-side'>
                {/* <!-- header button --> */}
                <div className='header-button'>
                  <p className='sidebar_info'>Call us : 123 (4567) 890</p>
                  <NavLink to='#'>
                    book now <i className='flaticon flaticon-right-arrow'></i>
                    <div className='hotelhub-hover-btn hover-btn'></div>
                    <div className='hotelhub-hover-btn hover-btn2'></div>
                    <div className='hotelhub-hover-btn hover-btn3'></div>
                    <div className='hotelhub-hover-btn hover-btn4'></div>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
