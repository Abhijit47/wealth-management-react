export default function HeroSection() {
  return (
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
  );
}
