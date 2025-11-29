export default function HeroSection() {
  'use no memo';
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
              <h1 className='hotelhub-style cursor-scale'>Ascent Wealth</h1>
              <h1 className='hotelhub-style cursor-scale'>
                Welcomes <span>You!</span>
              </h1>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='hero-right_content'>
              <p>
                We are an AMFI registered Mutual Funds Distributor engaged in
                distribution of Equity, Debt, Hybrid, Sector and Thematic Mutual
                Funds. We also provide services with respect to various
                secondary Bonds, NCDs, Life and Health Insurance, Corporate FDs
                and Estate Planning solutions etc. These are ideal and practical
                investments vehicle that offer investors opportunities to build
                wealth through professional management of their investible
                savings.
              </p>
              {/* <p>
                Being your trusted Mutual Funds Distributor we assist clients in
                building wealth with a step-by-step process of Goal Based
                Financial Planning that help our investors to climb the wealth
                ladder and accomplish the financial goal pre-set. A good
                long-term investments planning includes protection through
                insurance, Tax efficient, specific goal oriented and carefully
                budgeted.
              </p>
              <p>
                A Mutual Fund is a trust that mobilizes investments from
                different investors whose desire and objective is to accomplish
                a set financial goal. The money thus collected in turn invested
                in capital markets such as shares(Equity), debentures, money
                market instruments, fixed income options, etc.The capital
                appreciation realized through long-term investments are shared
                among unit holders in proportion to the number of units owned by
                them.
              </p>
              <p>
                As Investments in mutual funds are regulated by SEBI, your
                investments are safe and secure. Mutual funds are managed by
                professional funds managers. SEBI has several regulations &
                legal frameworks in place which ensures that your investments
                are managed with utmost care and professionalism. Though every
                investment is subject to certain risks, however, cautious fund
                choices with diversification specific to the financial goals
                set, can help generate higher returns on your investments.
              </p>
              <p>
                With a thorough understanding of our clients and their
                investment goals, we provide insightful guidance and assistance
                by offering customized, long-term actionable solutions for
                achieving their bottom-line, targeted goals and ambitions. While
                we assist you in making wise investment decisions, we are
                dedicated to giving you timely market insights, scholarly
                materials, and individualized counsel.
              </p>
              <p>
                Thank you for entrusting your financial future to Ascent Wealth.
                We are excited to serve you and help you achieve your financial
                objectives.
              </p> */}
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
                      <img
                        src='https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/954self.png'
                        alt='image'
                      />
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='slider-img'>
                      <img
                        src='https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/954self.png'
                        alt='image'
                      />
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='slider-img'>
                      <img
                        src='https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/954self.png'
                        alt='image'
                      />
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
