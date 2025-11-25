import { Link, NavLink } from 'react-router';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

const isDev = import.meta.env.DEV ? false : true;

export default function Home() {
  return (
    <>
      {/* <!-- loder --> */}
      <div className='loader-wrapper'>
        <div className='loader'></div>
        <div className='loder-section left-section'></div>
        <div className='loder-section right-section'></div>
      </div>

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Main Menu  --> */}
      {/* <!--==================================================--> */}
      <div id='sticky-header' className='hotelhub_nav_manu'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-3'>
              <div className='logo'>
                <NavLink className='logo_img' to='/' title='hotelhub'>
                  <img src='/images/logo.png' alt='logo' />
                </NavLink>
              </div>
            </div>
            <div className='col-lg-9'>
              <nav className='meedy_menu'>
                <ul className='nav_scroll'>
                  <li>
                    <a className='mdy-hover' href='#'>
                      Home <i className='fas fa-angle-down'></i>
                    </a>
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
                  </li>
                </ul>
                <div className='hotelhub-right-side'>
                  {/* <!-- header button --> */}
                  <div className='header-button'>
                    <p className='sidebar_info'>Call us : 123 (4567) 890</p>
                    <a href='booking.html'>
                      book now <i className='flaticon flaticon-right-arrow'></i>
                      <div className='hotelhub-hover-btn hover-btn'></div>
                      <div className='hotelhub-hover-btn hover-btn2'></div>
                      <div className='hotelhub-hover-btn hover-btn3'></div>
                      <div className='hotelhub-hover-btn hover-btn4'></div>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- hotelhub Mobile Menu  --> */}
      <div className='mobile-menu-area sticky d-sm-block d-md-block d-lg-none'>
        <div className='mobile-menu'>
          <nav className='meedy_menu'>
            <ul className='nav_scroll'>
              <li>
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
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Main Menu  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Hero Section  --> */}
      {/* <!--==================================================--> */}
      <div className='hero-section'>
        <div className='container'>
          <div className='row hero_upper align-items-center'>
            <div className='col-lg-6'>
              <div className='hero-content'>
                <h4>
                  <i className='bi bi-check-circle-fill'></i> Luxury Hotel in
                  California
                </h4>
                <h1 className='hotelhub-style cursor-scale'>
                  Discover Your Next
                </h1>
                <h1 className='hotelhub-style cursor-scale'>
                  Luxurious <span>Escapes</span>
                </h1>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hero-right_content'>
                <p>
                  Credibly generate collaborative synergy before backward room
                  empower revolutionary infomediaries magnetic
                </p>
                <div className='hotelhub-btn cursor-scale small'>
                  <a href='booking.html'>
                    Book Now <i className='flaticon flaticon-right-arrow'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-8 pl-0'>
              <div className='solider-banner'>
                <div className='swiper slider-banner'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='slider-img'>
                        <img src='/images/slider/slider_img.jpg' alt='image' />
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='slider-img'>
                        <img src='/images/slider/slider_img.jpg' alt='image' />
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='slider-img'>
                        <img src='/images/slider/slider_img.jpg' alt='image' />
                      </div>
                    </div>
                  </div>
                  <div className='slider-arrow-box'>
                    <button
                      className='sliders-prev'
                      tabIndex={0}
                      aria-label='Previous slide'>
                      <i className='fa-solid fa-arrow-left'></i>
                    </button>
                    <button
                      className='sliders-next'
                      tabIndex={0}
                      aria-label='Next slide'>
                      <i className='fa-solid fa-arrow-right'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='booking-bx'>
                <div className='containers'>
                  <h1>Booking Online</h1>
                  <form id='bookingForm'>
                    <div className='booking-input-box'>
                      <i className='bi bi-shield-check'></i>
                      <input
                        type='text'
                        id='checkin'
                        name='checkin'
                        placeholder='Check In'
                        required
                      />
                    </div>
                    <div className='booking-input-box'>
                      <i className='bi bi-shield-check'></i>
                      <input
                        type='text'
                        id='checkout'
                        name='checkout'
                        placeholder='Check Out'
                        required
                      />
                    </div>
                    <div className='booking-input-box'>
                      <i className='bi bi-house-door'></i>
                      <select name='place' id='place'>
                        <option value='saab'>01</option>
                        <option value='opel'>02</option>
                        <option value='audi'>03</option>
                        <option value='audi'>04</option>
                        <option defaultValue='audi'>Rooms</option>
                      </select>
                    </div>
                    <div className='booking-input-box'>
                      <i className='bi bi-person'></i>
                      <select name='place' id='place2'>
                        <option value='saab'>01</option>
                        <option value='opel'>02</option>
                        <option value='audi'>03</option>
                        <option value='audi'>04</option>
                        <option defaultValue='audi'>Adult</option>
                      </select>
                    </div>
                    <div className='booking-input-box upper'>
                      <i className='bi bi-person'></i>
                      <select name='place' id='place3'>
                        <option value='saab'>01</option>
                        <option value='opel'>02</option>
                        <option value='audi'>02</option>
                        <option value='audi'>02</option>
                        <option defaultValue='audi'>Children</option>
                      </select>
                    </div>
                    <div className='booking-button'>
                      <button type='submit'>
                        Book Now
                        <i className='flaticon flaticon-right-arrow'></i>
                      </button>
                    </div>
                  </form>
                  <div id='confirmation'></div>
                </div>
                <div className='line-shape'>
                  <img src='/images/main-home/line-shape.png' alt='image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Hero Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub About Section --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='about-serction'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6' data-aos='fade-up'>
                <div className='hotelhub-section-title'>
                  <h4>
                    <i className='flaticon flaticon-right-arrow'></i>Our Hotel
                  </h4>
                  <h1>Your Gateway to Comfort,</h1>
                  <h1>Luxury, and Unmatched</h1>
                  <h1>World our Hotel</h1>
                  <p>
                    Appropriately brand diverse schemas with orthogonal supply
                    chains. Globally benchmark functionalized functionalities
                    with 24/365 metrics. Holisticly drive sticky products
                    through emerging metrics
                  </p>
                </div>
                <div className='abou_list-item'>
                  <div className='abou_list'>
                    <ul>
                      <li>
                        <img src='/images/main-home/list-icon.png' alt='' />
                        Exclusive Deals & Discounts
                      </li>
                    </ul>
                  </div>
                  <div className='abou_list'>
                    <ul>
                      <li>
                        <img src='/images/main-home/list-icon.png' alt='' />
                        Exclusive Deals & Discounts
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='hotelhub-btn'>
                  <a href='about.html'>
                    MORE ABOUT <i className='flaticon flaticon-right-arrow'></i>
                  </a>
                </div>
              </div>
              <div className='col-lg-6' data-aos='fade-up'>
                <div className='about-thumb'>
                  <img src='/images/main-home/about_thumb.jpg' alt='' />
                  <div className='counter-right-side cursor-scale'>
                    <div className='counter-single-box' data-aos='fade-up'>
                      <div className='counter_icon'>
                        <img src='/images/main-home/ster-icon.png' alt='' />
                      </div>
                      <div
                        className='odometer-wrapper counter-box-title'
                        data-count='6'>
                        <h1 className='odometer'>
                          <span className='visually-hidden'>meter: </span>
                        </h1>
                        <h1>K+</h1>
                      </div>
                      <div className='counter-desc'>
                        <p>Happy Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='about-all-shape'>
            <div className='about_shape bounce-animate'>
              <img src='/images/main-home/line-shape2.png' alt='' />
            </div>
            <div className='about_shape2 bounce-animate3'>
              <img src='/images/main-home/dot-shape.png' alt='' />
            </div>
            <div className='about_shape3 bounce-animate3'>
              <img src='/images/main-home/border-shape.png' alt='' />
            </div>
          </div>
        </div>
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub About Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Why choose us Section --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='why-choose-us-section'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12' data-aos='fade-up'>
                <div className='hotelhub-section-title text-center pb-55'>
                  <h4>
                    <i className='flaticon flaticon-right-arrow'></i>ROOMS &
                    SUITES
                  </h4>
                  <h1>Sleep in Comfort Choose From</h1>
                  <h1>Our Rooms & Suites</h1>
                </div>
              </div>
            </div>
            <div className='hotelhub_slider-wrapper' data-aos='fade-up'>
              <div className='swiper choose-slider'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='choose-single-bx'>
                          <div className='choose-single-thumb'>
                            <img
                              src='/images/main-home/choose_img.jpg'
                              alt=''
                            />
                            <div className='choose_content'>
                              <div className='choose-content-inner'>
                                <span className='chosse-price'>
                                  $20 / Per Night
                                </span>
                                <h4>Idustry Experience</h4>
                                <p>
                                  Brand diverse schemas with orthogonal
                                  benchmark funcalized functionalities products
                                  through
                                </p>
                                <div className='choose-info'>
                                  <ul>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon01.png'
                                        alt=''
                                      />
                                      200 m2 Rooms
                                    </li>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon02.png'
                                        alt=''
                                      />
                                      2 or 3 Persons
                                    </li>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon03.png'
                                        alt=''
                                      />
                                      2 Kings Bed
                                    </li>
                                  </ul>
                                </div>
                                <div className='hotelhub-btn'>
                                  <a href='rooms-details.html'>
                                    view details
                                    <i className='flaticon flaticon-right-arrow'></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='choose-single-bx'>
                          <div className='choose-single-thumb'>
                            <img
                              src='/images/main-home/choose-img02.jpg'
                              alt=''
                            />
                            <div className='choose_content'>
                              <div className='choose-content-inner'>
                                <span className='chosse-price'>
                                  $30 / Per Night
                                </span>
                                <h4>Delux Family Room</h4>
                                <p>
                                  Brand diverse schemas with orthogonal
                                  benchmark funcalized functionalities products
                                  through
                                </p>
                                <div className='choose-info'>
                                  <ul>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon01.png'
                                        alt=''
                                      />
                                      200 m2 Rooms
                                    </li>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon02.png'
                                        alt=''
                                      />
                                      2 or 3 Persons
                                    </li>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon03.png'
                                        alt=''
                                      />
                                      2 Kings Bed
                                    </li>
                                  </ul>
                                </div>
                                <div className='hotelhub-btn'>
                                  <a href='rooms-details.html'>
                                    view details
                                    <i className='flaticon flaticon-right-arrow'></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='choose-single-bx'>
                          <div className='choose-single-thumb'>
                            <img
                              src='/images/main-home/choose-img05.jpg'
                              alt=''
                            />
                            <div className='choose_content'>
                              <div className='choose-content-inner'>
                                <span className='chosse-price'>
                                  $40 / Per Night
                                </span>
                                <h4>Luxury Signature Suites</h4>
                                <p>
                                  Brand diverse schemas with orthogonal
                                  benchmark funcalized functionalities products
                                  through
                                </p>
                                <div className='choose-info'>
                                  <ul>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon01.png'
                                        alt=''
                                      />
                                      200 m2 Rooms
                                    </li>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon02.png'
                                        alt=''
                                      />
                                      2 or 3 Persons
                                    </li>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon03.png'
                                        alt=''
                                      />
                                      2 Kings Bed
                                    </li>
                                  </ul>
                                </div>
                                <div className='hotelhub-btn cursor-scale small'>
                                  <a href='rooms-details.html'>
                                    view details
                                    <i className='flaticon flaticon-right-arrow'></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='choose-single-bx'>
                          <div className='choose-single-thumb'>
                            <img
                              src='/images/main-home/choose-img03.jpg'
                              alt=''
                            />
                            <div className='choose_content'>
                              <div className='choose-content-inner'>
                                <span className='chosse-price'>
                                  $30 / Per Night
                                </span>
                                <h4>Idustry Experience</h4>
                                <p>
                                  Brand diverse schemas with orthogonal
                                  benchmark funcalized functionalities products
                                  through
                                </p>
                                <div className='choose-info'>
                                  <ul>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon01.png'
                                        alt=''
                                      />
                                      200 m2 Rooms
                                    </li>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon02.png'
                                        alt=''
                                      />
                                      2 or 3 Persons
                                    </li>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon03.png'
                                        alt=''
                                      />
                                      2 Kings Bed
                                    </li>
                                  </ul>
                                </div>
                                <div className='hotelhub-btn cursor-scale small'>
                                  <a href='rooms-details.html'>
                                    view details
                                    <i className='flaticon flaticon-right-arrow'></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='choose-single-bx'>
                          <div className='choose-single-thumb'>
                            <img
                              src='/images/main-home/choose-img02.jpg'
                              alt=''
                            />
                            <div className='choose_content'>
                              <div className='choose-content-inner'>
                                <span className='chosse-price'>
                                  $30 / Per Night
                                </span>
                                <h4>Oceanview Deluxe Room</h4>
                                <p>
                                  Brand diverse schemas with orthogonal
                                  benchmark funcalized functionalities products
                                  through
                                </p>
                                <div className='choose-info'>
                                  <ul>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon01.png'
                                        alt=''
                                      />
                                      200 m2 Rooms
                                    </li>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon02.png'
                                        alt=''
                                      />
                                      2 or 3 Persons
                                    </li>
                                    <li>
                                      <img
                                        src='/images/main-home/choose-icon03.png'
                                        alt=''
                                      />
                                      2 Kings Bed
                                    </li>
                                  </ul>
                                </div>
                                <div className='hotelhub-btn cursor-scale small'>
                                  <a href='rooms-details.html'>
                                    view details
                                    <i className='flaticon flaticon-right-arrow'></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hotelhub-slider-dots'>
                <span
                  className='swiper-pagination-bullet'
                  tabIndex={0}
                  role='button'
                  aria-label='Go to slide 1'></span>
                <span
                  className='swiper-pagination-bullet'
                  tabIndex={0}
                  role='button'
                  aria-label='Go to slide 2'></span>
                <span
                  className='swiper-pagination-bullet swiper-pagination-bullet-active'
                  tabIndex={0}
                  role='button'
                  aria-label='Go to slide 3'></span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Why choose us Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Choose Section --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='choose-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-md-12' data-aos='fade-right'>
                <div className='hotelhub-section-title'>
                  <h4>
                    <i className='flaticon flaticon-right-arrow'></i>WHY CHOOS
                    US?
                  </h4>
                  <h1>Why We’re the Ideal Destination</h1>
                  <h1>for Your Getaway</h1>
                  <p>
                    Appropriately brand diverse schemas with orthogonal supply
                    chains. Globally benchmark functionalized functionalities
                    with 24/365 metrics. Holisticly drive sticky products
                    through emerging metrics
                  </p>
                </div>
                <div className='abou_list-item two'>
                  <div className='abou_list'>
                    <ul>
                      <li>
                        <img src='/images/main-home/aroow.png' alt='' />
                        Award-Winning Dining
                      </li>
                      <li>
                        <img src='/images/main-home/aroow.png' alt='' />
                        Flexible Booking Options
                      </li>
                    </ul>
                  </div>
                  <div className='abou_list'>
                    <ul>
                      <li>
                        <img src='/images/main-home/aroow.png' alt='' />
                        Luxury Amenities
                      </li>
                      <li>
                        <img src='/images/main-home/aroow.png' alt='' />
                        Stunning Views
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='choose_list'>
                  <ul>
                    <li>
                      <img src='/images/main-home/check.png' alt='' />
                      These features emphasize quality and comfort
                    </li>
                  </ul>
                </div>
                <div className='hotelhub-btn'>
                  <a href='restaurant.html'>
                    Learn More <i className='flaticon flaticon-right-arrow'></i>
                  </a>
                </div>
              </div>
              <div className='col-lg-5 col-md-12' data-aos='fade-left'>
                <div className='choose-thumb'>
                  <img src='/images/main-home/choose_thumbs.jpg' alt='' />
                  <div className='choose-shape1 bounce-animate'>
                    <img src='/images/main-home/choose-broder.png' alt='' />
                  </div>
                  <div className='counter-right-side cursor-scale'>
                    <div className='counter-single-box two'>
                      <div
                        className='odometer-wrapper counter-box-title'
                        data-count='10'>
                        <h1 className='odometer'>
                          <span className='visually-hidden'>meter: </span>
                        </h1>
                        <h1>K+</h1>
                      </div>
                      <div className='counter_icon'>
                        <img src='/images/main-home/people.png' alt='' />
                      </div>
                      <div className='counter-desc'>
                        <p>Our All Satisfied Clients Trusted with us</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='choose-all-shape'>
            <div className='choose-shape2 bounce-animate3'>
              <img src='/images/main-home/choose-shpae.png' alt='' />
            </div>
          </div>
        </div>
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Choose Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Service Section  --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='service-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4' data-aos='fade-right'>
                <div className='hotelhub-section-title style_two'>
                  <h4>
                    <i className='flaticon flaticon-right-arrow'></i>Service
                  </h4>
                  <h1>Enhancing Your’s</h1>
                  <h1>Stay With Exclusive</h1>
                  <h1>Services</h1>
                  <div className='contact-infos'>
                    <span>
                      <i className='fa-solid fa-phone'></i>
                    </span>
                    <div className='contact-info-content'>
                      <p>For More Information</p>
                      <h3>+00 123 (456) 789</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-8' data-aos='fade-left'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-service-box'>
                      <div className='service-icon'>
                        <img
                          src='/images/main-home/service-icon01.png'
                          alt=''
                        />
                      </div>
                      <div className='service-content'>
                        <h3>Transportations</h3>
                        <p>
                          Proactively morph optimal infom progressive resources
                        </p>
                      </div>
                      <div className='hotelhub-hover-box hover-bx'></div>
                      <div className='hotelhub-hover-box hover-bx2'></div>
                      <div className='hotelhub-hover-box hover-bx3'></div>
                      <div className='hotelhub-hover-box hover-bx4'></div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-service-box'>
                      <div className='service-icon'>
                        <img
                          src='/images/main-home/service-icon02.png'
                          alt=''
                        />
                      </div>
                      <div className='service-content'>
                        <h3>Wi-Fi and Internet</h3>
                        <p>
                          Proactively morph optimal infom progressive resources
                        </p>
                      </div>
                      <div className='hotelhub-hover-box hover-bx'></div>
                      <div className='hotelhub-hover-box hover-bx2'></div>
                      <div className='hotelhub-hover-box hover-bx3'></div>
                      <div className='hotelhub-hover-box hover-bx4'></div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-service-box'>
                      <div className='service-icon'>
                        <img
                          src='/images/main-home/service-icon03.png'
                          alt=''
                        />
                      </div>
                      <div className='service-content'>
                        <h3>Cym Facilities</h3>
                        <p>
                          Proactively morph optimal infom progressive resources
                        </p>
                      </div>
                      <div className='hotelhub-hover-box hover-bx'></div>
                      <div className='hotelhub-hover-box hover-bx2'></div>
                      <div className='hotelhub-hover-box hover-bx3'></div>
                      <div className='hotelhub-hover-box hover-bx4'></div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-service-box'>
                      <div className='service-icon'>
                        <img
                          src='/images/main-home/service-icon04.png'
                          alt=''
                        />
                      </div>
                      <div className='service-content'>
                        <h3>Room Services</h3>
                        <p>
                          Proactively morph optimal infom progressive resources
                        </p>
                      </div>
                      <div className='hotelhub-hover-box hover-bx'></div>
                      <div className='hotelhub-hover-box hover-bx2'></div>
                      <div className='hotelhub-hover-box hover-bx3'></div>
                      <div className='hotelhub-hover-box hover-bx4'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='hotelhub_slider-wrapper pt-30' data-aos='fade-up'>
              <div className='swiper service_list'>
                <div className='swiper-wrapper'>
                  {/* <!-- Slide 1 --> */}
                  <div className='swiper-slide'>
                    <div className='single-service-boxs'>
                      <div className='service-thumb'>
                        <img
                          src='/images/main-home/service_thumb01.png'
                          alt='Hotel Restaurant'
                        />
                        <div className='service_icons'>
                          <img
                            src='/images/main-home/service-icons-01.png'
                            alt='Service Icon'
                          />
                        </div>
                      </div>
                      <div className='service-content'>
                        <span className='category'>DISCOVER</span>
                        <h3>Hotel Restaurant</h3>
                        <ul className='service_list'>
                          <li>
                            <i className='fa-solid fa-check'></i> Fresh Foods
                            Guarantee
                          </li>
                          <li>
                            <i className='fa-solid fa-check'></i> High-Quality
                            Ingredients
                          </li>
                        </ul>
                        <div className='hotelhub-btn2'>
                          <a href='service-details.html'>
                            Learn More
                            <i className='flaticon flaticon-right-arrow'></i>
                            <div className='hotelhub-hover-btn hover-btn'></div>
                            <div className='hotelhub-hover-btn hover-btn2'></div>
                            <div className='hotelhub-hover-btn hover-btn3'></div>
                            <div className='hotelhub-hover-btn hover-btn4'></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 2 --> */}
                  <div className='swiper-slide'>
                    <div className='single-service-boxs'>
                      <div className='service-thumb'>
                        <img
                          src='/images/main-home/service_thumb02.png'
                          alt='SPA & Beauty Center'
                        />
                        <div className='service_icons'>
                          <img
                            src='/images/main-home/service_icons02.png'
                            alt='Service Icon'
                          />
                        </div>
                      </div>
                      <div className='service-content'>
                        <span className='category'>RELAXATION</span>
                        <h3>SPA & Beauty Center</h3>
                        <ul className='service_list'>
                          <li>
                            <i className='fa-solid fa-check'></i> Luxury Spa
                            Treatments
                          </li>
                          <li>
                            <i className='fa-solid fa-check'></i> Professional
                            Therapists
                          </li>
                        </ul>
                        <div className='hotelhub-btn2'>
                          <a href='service-details.html'>
                            Learn More
                            <i className='flaticon flaticon-right-arrow'></i>
                            <div className='hotelhub-hover-btn hover-btn'></div>
                            <div className='hotelhub-hover-btn hover-btn2'></div>
                            <div className='hotelhub-hover-btn hover-btn3'></div>
                            <div className='hotelhub-hover-btn hover-btn4'></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 3 --> */}
                  <div className='swiper-slide'>
                    <div className='single-service-boxs'>
                      <div className='service-thumb'>
                        <img
                          src='/images/main-home/service_thumb03.png'
                          alt='Swimming Pools'
                        />
                        <div className='service_icons'>
                          <img
                            src='/images/main-home/service_icons03.png'
                            alt='Service Icon'
                          />
                        </div>
                      </div>
                      <div className='service-content'>
                        <span className='category'>HEALTH</span>
                        <h3>Swimming Pools</h3>
                        <ul className='service_list'>
                          <li>
                            <i className='fa-solid fa-check'></i> Clean & Safe
                            Environment
                          </li>
                          <li>
                            <i className='fa-solid fa-check'></i>{' '}
                            Temperature-Controlled Pools
                          </li>
                        </ul>
                        <div className='hotelhub-btn2'>
                          <a href='service-details.html'>
                            Learn More
                            <i className='flaticon flaticon-right-arrow'></i>
                            <div className='hotelhub-hover-btn hover-btn'></div>
                            <div className='hotelhub-hover-btn hover-btn2'></div>
                            <div className='hotelhub-hover-btn hover-btn3'></div>
                            <div className='hotelhub-hover-btn hover-btn4'></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Slide 3 --> */}
                  <div className='swiper-slide'>
                    <div className='single-service-boxs'>
                      <div className='service-thumb'>
                        <img
                          src='/images/main-home/service_thumb03.png'
                          alt='Swimming Pools'
                        />
                        <div className='service_icons'>
                          <img
                            src='/images/main-home/service_icons03.png'
                            alt='Service Icon'
                          />
                        </div>
                      </div>
                      <div className='service-content'>
                        <span className='category'>HEALTH</span>
                        <h3>Swimming Pools</h3>
                        <ul className='service_list'>
                          <li>
                            <i className='fa-solid fa-check'></i> Clean & Safe
                            Environment
                          </li>
                          <li>
                            <i className='fa-solid fa-check'></i>{' '}
                            Temperature-Controlled Pools
                          </li>
                        </ul>
                        <div className='hotelhub-btn2'>
                          <a href='service-details.html'>
                            Learn More
                            <i className='flaticon flaticon-right-arrow'></i>
                            <div className='hotelhub-hover-btn hover-btn'></div>
                            <div className='hotelhub-hover-btn hover-btn2'></div>
                            <div className='hotelhub-hover-btn hover-btn3'></div>
                            <div className='hotelhub-hover-btn hover-btn4'></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='hotelhub-slider-dots2'></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Service Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start Buddy  Video section --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='video-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='video__area'>
                  <div className='video__content'>
                    <a
                      className='video-vemo-icon venobox vbox-item'
                      data-vbtype='youtube'
                      data-autoplay='true'
                      href='https://youtu.be/BS4TUd7FJSg'>
                      <span className='play-now'>play</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- End Buddy Video section --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Testimonial Section  --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='testimonial-section'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-8' data-aos='fade-up'>
                <div className='hotelhub-section-title pb-55 style_two'>
                  <h4>
                    <i className='flaticon flaticon-right-arrow'></i>Testimonals
                  </h4>
                  <h1>What Say Our Customers</h1>
                  <h1>About Services</h1>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='review text-right'>
                  <img
                    className='text-right'
                    src='/images/main-home/review.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <div className='hotelhub_slider-wrapper' data-aos='fade-up'>
              <div className='swiper testi_list1'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='testi-single-box'>
                          <div className='testi-content'>
                            <ul className='testi-rating'>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>(4.5)</li>
                            </ul>
                            <div className='testi-desc'>
                              <p>
                                Appropriately brand diverse into benchmark
                                functionalized functi sticky products through
                                emerging with orthogonal with orthogonal supply
                                chains globally
                              </p>
                            </div>
                          </div>
                          <div className='user-info'>
                            <div className='people-pic'>
                              <img
                                src='/images/main-home/testi-author01.png'
                                alt=''
                              />
                            </div>
                            <div className='user-name'>
                              <h4>Anjelina Watson</h4>
                              <h6>CEO and Founder</h6>
                            </div>
                          </div>
                          <div className='hotelhub-hover-btn hover-btn'></div>
                          <div className='hotelhub-hover-btn hover-btn2'></div>
                          <div className='hotelhub-hover-btn hover-btn3'></div>
                          <div className='hotelhub-hover-btn hover-btn4'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='testi-single-box'>
                          <div className='testi-content'>
                            <ul className='testi-rating'>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>(4.5)</li>
                            </ul>
                            <div className='testi-desc'>
                              <p>
                                Appropriately brand diverse into benchmark
                                functionalized functi sticky products through
                                emerging with orthogonal with orthogonal supply
                                chains globally
                              </p>
                            </div>
                          </div>
                          <div className='user-info'>
                            <div className='people-pic'>
                              <img
                                src='/images/main-home/testi-author02.png'
                                alt=''
                              />
                            </div>
                            <div className='user-name'>
                              <h4>Abu Taleb</h4>
                              <h6>CEO</h6>
                            </div>
                          </div>
                          <div className='hotelhub-hover-btn hover-btn'></div>
                          <div className='hotelhub-hover-btn hover-btn2'></div>
                          <div className='hotelhub-hover-btn hover-btn3'></div>
                          <div className='hotelhub-hover-btn hover-btn4'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='testi-single-box'>
                          <div className='testi-content'>
                            <ul className='testi-rating'>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>(4.5)</li>
                            </ul>
                            <div className='testi-desc'>
                              <p>
                                Appropriately brand diverse into benchmark
                                functionalized functi sticky products through
                                emerging with orthogonal with orthogonal supply
                                chains globally
                              </p>
                            </div>
                          </div>
                          <div className='user-info'>
                            <div className='people-pic'>
                              <img
                                src='/images/main-home/testi-author03.png'
                                alt=''
                              />
                            </div>
                            <div className='user-name'>
                              <h4>David X. John</h4>
                              <h6>UI Designer</h6>
                            </div>
                          </div>
                          <div className='hotelhub-hover-btn hover-btn'></div>
                          <div className='hotelhub-hover-btn hover-btn2'></div>
                          <div className='hotelhub-hover-btn hover-btn3'></div>
                          <div className='hotelhub-hover-btn hover-btn4'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='testi-single-box'>
                          <div className='testi-content'>
                            <ul className='testi-rating'>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>(4.5)</li>
                            </ul>
                            <div className='testi-desc'>
                              <p>
                                Appropriately brand diverse into benchmark
                                functionalized functi sticky products through
                                emerging with orthogonal with orthogonal supply
                                chains globally
                              </p>
                            </div>
                          </div>
                          <div className='user-info'>
                            <div className='people-pic'>
                              <img
                                src='/images/main-home/testi-author04.png'
                                alt=''
                              />
                            </div>
                            <div className='user-name'>
                              <h4>John. X Moris</h4>
                              <h6>Marketing</h6>
                            </div>
                          </div>
                          <div className='hotelhub-hover-btn hover-btn'></div>
                          <div className='hotelhub-hover-btn hover-btn2'></div>
                          <div className='hotelhub-hover-btn hover-btn3'></div>
                          <div className='hotelhub-hover-btn hover-btn4'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='testi-single-box'>
                          <div className='testi-content'>
                            <ul className='testi-rating'>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>(4.5)</li>
                            </ul>
                            <div className='testi-desc'>
                              <p>
                                Appropriately brand diverse into benchmark
                                functionalized functi sticky products through
                                emerging with orthogonal with orthogonal supply
                                chains globally
                              </p>
                            </div>
                          </div>
                          <div className='user-info'>
                            <div className='people-pic'>
                              <img
                                src='/images/main-home/testi-author03.png'
                                alt=''
                              />
                            </div>
                            <div className='user-name'>
                              <h4>Anjelina Watson</h4>
                              <h6>CEO and Founder</h6>
                            </div>
                          </div>
                          <div className='hotelhub-hover-btn hover-btn'></div>
                          <div className='hotelhub-hover-btn hover-btn2'></div>
                          <div className='hotelhub-hover-btn hover-btn3'></div>
                          <div className='hotelhub-hover-btn hover-btn4'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='testi-single-box'>
                          <div className='testi-content'>
                            <ul className='testi-rating'>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>(4.5)</li>
                            </ul>
                            <div className='testi-desc'>
                              <p>
                                Appropriately brand diverse into benchmark
                                functionalized functi sticky products through
                                emerging with orthogonal with orthogonal supply
                                chains globally
                              </p>
                            </div>
                          </div>
                          <div className='user-info'>
                            <div className='people-pic'>
                              <img
                                src='/images/main-home/testi-author01.png'
                                alt=''
                              />
                            </div>
                            <div className='user-name'>
                              <h4>Noor Islam</h4>
                              <h6>Developer</h6>
                            </div>
                          </div>
                          <div className='hotelhub-hover-btn hover-btn'></div>
                          <div className='hotelhub-hover-btn hover-btn2'></div>
                          <div className='hotelhub-hover-btn hover-btn3'></div>
                          <div className='hotelhub-hover-btn hover-btn4'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='testi-single-box'>
                          <div className='testi-content'>
                            <ul className='testi-rating'>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>
                                <i className='bi bi-star-fill'></i>
                              </li>
                              <li>(4.5)</li>
                            </ul>
                            <div className='testi-desc'>
                              <p>
                                Appropriately brand diverse into benchmark
                                functionalized functi sticky products through
                                emerging with orthogonal with orthogonal supply
                                chains globally
                              </p>
                            </div>
                          </div>
                          <div className='user-info'>
                            <div className='people-pic'>
                              <img
                                src='/images/main-home/testi-author01.png'
                                alt=''
                              />
                            </div>
                            <div className='user-name'>
                              <h4>Anjelina Watson</h4>
                              <h6>CEO and Founder</h6>
                            </div>
                          </div>
                          <div className='hotelhub-hover-btn hover-btn'></div>
                          <div className='hotelhub-hover-btn hover-btn2'></div>
                          <div className='hotelhub-hover-btn hover-btn3'></div>
                          <div className='hotelhub-hover-btn hover-btn4'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hotelhub-slider-dots3'>
                <span
                  className='swiper-pagination-bullet'
                  tabIndex={0}
                  role='button'
                  aria-label='Go to slide 1'></span>
                <span
                  className='swiper-pagination-bullet'
                  tabIndex={0}
                  role='button'
                  aria-label='Go to slide 2'></span>
                <span
                  className='swiper-pagination-bullet swiper-pagination-bullet-active'
                  tabIndex={0}
                  role='button'
                  aria-label='Go to slide 3'></span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Testimonial Section --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Marquee Section  --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='marquee-section'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='marquee'>
                  <div className='marquee-single-box'>
                    <div className='marquee-content'>
                      <h2>
                        Luxury Hotel in California
                        <span>
                          <img src='/images/main-home/star.png' alt='' />
                        </span>
                      </h2>
                      <h2>
                        Best Luxury Resort
                        <span>
                          <img src='/images/main-home/star.png' alt='' />
                        </span>
                      </h2>
                      <h2>
                        Modern City Hotel
                        <span>
                          <img src='/images/main-home/star.png' alt='' />
                        </span>
                      </h2>
                      <h2>
                        Mountain Luxury Resort
                        <span>
                          <img src='/images/main-home/star.png' alt='' />
                        </span>
                      </h2>
                      <h2>
                        Health and Fitness
                        <span>
                          <img src='/images/main-home/star.png' alt='' />
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className='marquee-single-box'>
                    <div className='marquee-content'>
                      <h2>
                        Luxury Hotel in California
                        <span>
                          <img src='/images/main-home/star.png' alt='' />
                        </span>
                      </h2>
                      <h2>
                        Best Luxury Resort
                        <span>
                          <img src='/images/main-home/star.png' alt='' />
                        </span>
                      </h2>
                      <h2>
                        Modern City Hotel
                        <span>
                          <img src='/images/main-home/star.png' alt='' />
                        </span>
                      </h2>
                      <h2>
                        Mountain Luxury Resort
                        <span>
                          <img src='/images/main-home/star.png' alt='' />
                        </span>
                      </h2>
                      <h2>
                        Health and Fitness
                        <span>
                          <img src='/images/main-home/star.png' alt='' />
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Marquee Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Blog Section --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='blog-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12' data-aos='fade-up'>
                <div className='hotelhub-section-title text-center pb-55'>
                  <h4>
                    <i className='flaticon flaticon-right-arrow'></i>LATEST BLOG
                  </h4>
                  <h1>Read Our Latest Insights From</h1>
                  <h1>Update Blog Posts</h1>
                </div>
              </div>
            </div>
            <div className='row' data-aos='fade-up'>
              <div className='col-lg-4 col-md-6'>
                <div className='blog-single-box'>
                  <div className='blog-thumb'>
                    <img src='/images/main-home/blog1.jpg' alt='' />
                  </div>
                  <div className='blog-content'>
                    <span className='category'>Resort</span>
                    <h3>
                      <a href='blog-details.html'>
                        Continually network focused infrastructures cross
                      </a>
                    </h3>
                    <div className='blog_button'>
                      <div className='blog_admin'>
                        <div className='blog_author'>
                          <ul>
                            <li>
                              <img
                                src='/images/main-home/blog-author.png'
                                alt=''
                              />
                              Anjelina Watson
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='blg-btn cursor-scale small'>
                        <a href='blog-details.html'>
                          <span className='visually-hidden'>right: </span>
                          <i className='flaticon flaticon-right-arrow'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='blog-single-box'>
                  <div className='blog-thumb'>
                    <img src='/images/main-home/blog2.jpg' alt='' />
                    <div className='blog-date-line'>
                      <p>
                        20
                        <br />
                        <span>NOV</span>
                      </p>
                    </div>
                  </div>
                  <div className='blog-content'>
                    <span className='category'>Hotels</span>
                    <h3>
                      <a href='blog-details.html'>
                        Quickly morph just in times front-end scenarios
                      </a>
                    </h3>
                    <div className='blog_button'>
                      <div className='blog_admin'>
                        <div className='blog_author'>
                          <ul>
                            <li>
                              <img
                                src='/images/main-home/blog-author2.png'
                                alt=''
                              />
                              Md Abu Taleb
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='blg-btn'>
                        <Link to='blog-details.html'>
                          <span className='visually-hidden'>right: </span>
                          <i className='flaticon flaticon-right-arrow'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='blog-single-box'>
                  <div className='blog-thumb'>
                    <img src='/images/main-home/blog3.jpg' alt='' />
                    <div className='blog-date-line'>
                      <p>
                        25
                        <br />
                        <span>NOV</span>
                      </p>
                    </div>
                  </div>
                  <div className='blog-content'>
                    <span className='category'>Fitness</span>
                    <h3>
                      <a href='blog-details.html'>
                        Appropriately initiate resource through line metrics
                      </a>
                    </h3>
                    <div className='blog_button'>
                      <div className='blog_admin'>
                        <div className='blog_author'>
                          <ul>
                            <li>
                              <img
                                src='/images/main-home/blog-author3.png'
                                alt=''
                              />
                              Sanida Khatun
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='blg-btn'>
                        <a href='blog-details.html'>
                          <span className='visually-hidden'>Right: </span>
                          <i className='flaticon flaticon-right-arrow'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Blog Section --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Appoinment Section  --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='appoinment-section'>
          <div className='container'>
            <div className='row appoinment'>
              <div className='col-lg-6' data-aos='fade-up'>
                <div className='contact_thumb'>
                  <img src='/images/main-home/contact_img.jpg' alt='' />
                </div>
              </div>
              <div className='col-lg-6' data-aos='fade-up'>
                <div className='contact-form-box'>
                  <div className='hotelhub-section-title'>
                    <h4>
                      <i className='flaticon flaticon-right-arrow'></i>get in
                      touch
                    </h4>
                    <h1>Contact with Us</h1>
                  </div>
                  <form
                    action='https://formspree.io/f/myyleorq'
                    method='POST'
                    id='dreamit-form'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6'>
                        <div className='form-box'>
                          <input
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6'>
                        <div className='form-box'>
                          <input
                            type='text'
                            name='name'
                            placeholder='Your Phone Nimber'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6'>
                        <div className='form-box'>
                          <input
                            type='text'
                            name='email'
                            placeholder='Enter Your Email*'
                            required
                          />
                        </div>
                      </div>

                      <div className='col-lg-6 col-md-6'>
                        <div className='form-box'>
                          <select id='cars'>
                            <option value='volvo'>Englis</option>
                            <option value='saab'>Bangla</option>
                            <option value='vw'>Hindi</option>
                            <option defaultValue='audi'>Select Subject</option>
                          </select>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-12'>
                        <div className='form-box'>
                          <textarea
                            name='massage'
                            id='massage'
                            placeholder='Write Message'
                            required></textarea>
                        </div>
                      </div>

                      <div className='col-lg-12 col-md-6'>
                        <div className='check_bx'>
                          <input type='checkbox' />
                          <p>Save my email adress for next query.</p>
                        </div>
                        <div className='submit-button'>
                          <button className='submit-btn'>
                            send message
                            <i className='flaticon flaticon-right-arrow'></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {isDev ? (
        <div className='contant_info-section' data-aos='fade-up'>
          <div className='container'>
            <div className='row info_bg'>
              <div className='col-lg-6'></div>
              <div className='col-lg-6'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='contact-info-bx'>
                      <div className='info-icon'>
                        <i className='fa-solid fa-phone'></i>
                      </div>
                      <div className='info-content'>
                        <p>Call us Anitme</p>
                        <h3>+00 123 (4567) 890</h3>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='contact-info-bx'>
                      <div className='info-icon'>
                        <i className='fa-regular fa-envelope'></i>
                      </div>
                      <div className='info-content'>
                        <p>Send us E-Mail</p>
                        <h3>example@gmail.com</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Appoinment Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Footer Section --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='footer-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6' data-aos='fade-up'>
                <div className='widget'>
                  <div className='footer_widget'>
                    <div className='company-logo'>
                      <a href='index.html'>
                        <img src='/images/logo.png' alt='logo' />
                      </a>
                    </div>
                    <p>
                      Conveniently fashion market positioning readiness before
                      sticky communities. Assertively matrix multif sources
                      through team building
                    </p>
                    <div className='hotelhub-social-icon cursor-scale small'>
                      <h3 className='follow-title'>Follow Us On :</h3>
                      <a href='#'>
                        <span className='visually-hidden'>fb: </span>
                        <i className='fab fa-facebook-f'></i>
                      </a>
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
                        <a href='about.html'> About Hotel </a>
                      </li>
                      <li>
                        <a href='rooms-details.html'> Rooms & Suites </a>
                      </li>
                      <li>
                        <a href='restaurant.html'> Reservations </a>
                      </li>
                      <li>
                        <a href='blog-grid.html'> Latest Blog </a>
                      </li>
                      <li>
                        <a href='team.html'> Our Team </a>
                      </li>
                      <li>
                        <a href='contact.html'> Contact Us </a>
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
                        <a href='booking.html'> Booking </a>
                      </li>
                      <li>
                        <a href='rooms.html'> Rooms & Suites </a>
                      </li>
                      <li>
                        <a href='testimonial.html'> Testimonials </a>
                      </li>
                      <li>
                        <a href='cafy.html'> Career </a>
                      </li>
                      <li>
                        <a href='relux.html'> Privecy Policy </a>
                      </li>
                      <li>
                        <a href='faq.html'> FAQ's </a>
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
                  <p>© Copyright 2025 Hotelhub for Hotel Booking.</p>
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
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Footer Section --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start Search Popup Section --> */}
      {/* <!--==================================================--> */}
      {isDev ? (
        <div className='search-popup'>
          <button className='close-search style-two'>
            <span className='visually-hidden'>Multiply: </span>
            <span className='flaticon-multiply'>
              <i className='far fa-times-circle'></i>
            </span>
          </button>
          <button className='close-search'>
            <span className='visually-hidden'>Top: </span>
            <i className='bi bi-arrow-up'></i>
          </button>
          <form method='post' action='#'>
            <div className='form-group'>
              <input
                type='search'
                name='search-field'
                defaultValue=''
                placeholder='Search Here'
                required
              />
              <button type='submit'>
                <span className='visually-hidden'>Search: </span>
                <i className='fa fa-search'></i>
              </button>
            </div>
          </form>
        </div>
      ) : null}
      {/* <!--==================================================--> */}
      {/* <!-- Start Search Popup Section --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start scrollup section Area --> */}
      {/* <!--==================================================--> */}
      <div id='progress' className='progress hide'>
        <div id='progress-value'></div>
      </div>
      {/* <!--==================================================--> */}
      {/* <!-- Start scrollup section Area --> */}
      {/* <!--==================================================--> */}
    </>
  );
}
