import { Link } from 'react-router';

export default function ChooseSection() {
  return (
    <div className='choose-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 col-md-12' data-aos='fade-right'>
            <div className='hotelhub-section-title'>
              <h4>
                <i className='flaticon flaticon-right-arrow'></i>WHY CHOOS US?
              </h4>
              <h1>Why Risk Profiling is important</h1>
              <h1>for investors?</h1>
              <p>
                Most investors start with unrealistic expectations about risk
                and return. Unrealistic expectations can quickly become
                unfulfilled expectations and unfulfilled expectations tend to
                cause grief for all concerned. There is often a gap between the
                level of risk which a client would normally choose to take,
                their risk tolerance, and the risk associated with the return
                required to achieve their goals. profiling is a process for
                finding the optimal level of investment risk for your client by
                balancing their risk required, risk capacity and their
                individual risk tolerance. There is often a mismatch between
                risk required, capacity and tolerance.
              </p>
            </div>
            <div className='abou_list-item two'>
              <div className='abou_list'>
                <ul>
                  <li>
                    <img src='/images/main-home/aroow.png' alt='' />
                    Risk Tolerance is the level of financial risk the client is
                    emotionally comfortable with.
                  </li>
                  <li>
                    <img src='/images/main-home/aroow.png' alt='' />
                    For example,How much a person is willing for their portfolio
                    to diminish for a chance to make bigger returns.
                  </li>
                  <li>
                    <img src='/images/main-home/aroow.png' alt='' />
                    Risk Required is the risk associated with the return
                    required to achieve the client's goals from the financial
                    resources available.
                  </li>
                  <li>
                    <img src='/images/main-home/aroow.png' alt='' />
                    Risk Capacity is the level of financial risk the client can
                    afford to take.
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
                  Client Risk Profile Questionnaire
                </li>
              </ul>
            </div>
            <div className='hotelhub-btn'>
              <Link to='https://forms.gle/F1k3s6qWDpFLyQ2D8' target='_blank'>
                Know More <i className='flaticon flaticon-right-arrow'></i>
              </Link>
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
  );
}
