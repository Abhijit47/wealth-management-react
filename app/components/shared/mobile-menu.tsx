import { NavLink } from 'react-router';
import { navlinks } from '~/constants';

export default function MobileMenu() {
  return (
    <div className='mobile-menu-area sticky d-sm-block d-md-block d-lg-none'>
      <div className='mobile-menu'>
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
              <a className='mdy-hover' href='#'>
                Home
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='index.html'>Luxury Hotel</a>
                </li>
                <li>
                  <a href='index-light.html'>Luxury Hotel Light</a>
                </li>
                <li>
                  <a href='index-2.html'>Hotel Booking</a>
                </li>
                <li>
                  <a href='index-2-light.html'>Hotel Booking Light</a>
                </li>
                <li>
                  <a href='index-3.html'>City Hotel</a>
                </li>
                <li>
                  <a href='index-3-light.html'>City Hotel Light</a>
                </li>
                <li>
                  <a href='index-4.html'>Mountain Hotel </a>
                </li>
                <li>
                  <a href='index-5.html'>Airport Hotel</a>
                </li>
              </ul>
            </li>
            <li>
              <a className='mdy-hover' href='#'>
                Rooms
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
                Service
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
                Dine
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
                Sports
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
                Pages
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
                  <a href='pricing.html'>Gallery</a>
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
                Blog
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
        </nav>
      </div>
    </div>
  );
}
