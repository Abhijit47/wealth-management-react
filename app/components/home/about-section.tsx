export default function AboutSection() {
  return (
    <div className='about-serction'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6' data-aos='fade-up'>
            <div className='hotelhub-section-title'>
              <h4>
                <i className='flaticon flaticon-right-arrow'></i>Our Hotel
              </h4>
              <h1>It's Time To Begin, </h1>
              <h1>Your Ascent!</h1>
              <blockquote>
                <p>
                  "When a management with a reputation for brilliance, tackles a
                  business with a reputation for bad economics, it is the
                  reputation of the business that remains intact" – Warren
                  Buffett
                </p>
              </blockquote>
              {/* <p>
                Appropriately brand diverse schemas with orthogonal supply
                chains. Globally benchmark functionalized functionalities with
                24/365 metrics. Holisticly drive sticky products through
                emerging metrics
              </p> */}
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
              <img
                src='https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/954self.png'
                alt=''
              />
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
  );
}
