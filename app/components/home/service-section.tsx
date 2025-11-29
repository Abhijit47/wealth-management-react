import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router';

const services = [
  {
    id: crypto.randomUUID(),
    title: 'Mutual Fund',
    subtitle: 'Salutations from Ascent Wealth!',
    description:
      'At Ascent Wealth, we are dedicated to providing you with individualized assistance and services support as you navigate the world of mutual funds.',
    cover:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/176mfa.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Life and Health Insurance',
    subtitle: 'Secure the future of your loved ones!',
    description:
      'At Ascent Wealth, we remain committed to serve families with Healthcare and Life Insurance covers to protect them from hard times as these are compulsory choice to insulate from unknown risks.',
    cover:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/507insurance.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Corporate FDs, Bonds and NCDs',
    subtitle: 'An alternative to Traditional Investments!',
    description:
      'We at Ascent Wealth recognize the value of consistent & dependable investment options. From the traditional fixed income products, we handpick reliable businesses with reliable ratings and suggest to clients. ',
    cover:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/301eqa.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Estate Planning Solutions',
    subtitle: 'Secure & Safeguard Your Next Generation!',
    description:
      'Ascent Wealth assist our clients through Estate Planning to preserve their assets and wealth built over the years and help them in transfer of their wealth to next generation.',
    cover:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/729eee.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Equity - De-mat Accounts',
    subtitle: 'Know Your Optimal Level of Investment Risks!',
    description:
      'Without a doubt, equity is the best method for accumulating wealth. Almost every investment portfolio needs stocks.',
    cover:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/384eq.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Goal Based Financial Planning',
    subtitle: 'Your future is created by what you do today, not tomorrow',
    description:
      'In Mutual Funds a goal oriented Systematic Investment Plan (SIP) is indeed a financial stress buster and wealth creation vehicle in the long term.',
    cover:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/664goalf.jpg',
  },
];

export default function ServiceSection() {
  // const [selectedService, setSelectedService] = useState('');
  const [show, setShow] = useState(true);

  function toggleModal() {
    return setShow((prev) => !prev);
  }

  console.log({ show });

  return (
    <div className='service-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4' data-aos='fade-right'>
            <div className='hotelhub-section-title style_two'>
              <h4>
                <i className='flaticon flaticon-right-arrow'></i>Service
              </h4>
              <h1>Create a Perfect Goal</h1>
              <blockquote>
                <p>
                  "Consuming knowledge can be fairly useless if you don't pair
                  it with intelligent behavioral design and systems" - Ben
                  Carlson
                </p>
              </blockquote>
              <div className='contact-infos'>
                <span>
                  <i className='fa-solid fa-phone'></i>
                </span>
                <div className='contact-info-content'>
                  <p>For More Information</p>
                  <Link to='tel:+917305953668'>+91 7305953668</Link>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-8' data-aos='fade-left'>
            <div className='row'>
              <div
                role='button'
                className='col-lg-6 col-md-6'
                onClick={toggleModal}>
                <div className='single-service-box'>
                  <div className='service-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='#D9D2C6'
                      className='bi bi-book'
                      viewBox='0 0 16 16'>
                      <path d='M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783' />
                    </svg>
                  </div>
                  <div className='service-content'>
                    <h3>Education Calculator</h3>
                    <p>Proactively morph optimal infom progressive resources</p>
                  </div>
                  <div className='hotelhub-hover-box hover-bx'></div>
                  <div className='hotelhub-hover-box hover-bx2'></div>
                  <div className='hotelhub-hover-box hover-bx3'></div>
                  <div className='hotelhub-hover-box hover-bx4'></div>
                </div>
              </div>
              <div
                role='button'
                className='col-lg-6 col-md-6'
                onClick={toggleModal}>
                <div className='single-service-box'>
                  <div className='service-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='#D9D2C6'
                      className='bi bi-wallet2'
                      viewBox='0 0 16 16'>
                      <path d='M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z' />
                    </svg>
                  </div>
                  <div className='service-content'>
                    <h3>Lumpsum Calculator</h3>
                    <p>Proactively morph optimal infom progressive resources</p>
                  </div>
                  <div className='hotelhub-hover-box hover-bx'></div>
                  <div className='hotelhub-hover-box hover-bx2'></div>
                  <div className='hotelhub-hover-box hover-bx3'></div>
                  <div className='hotelhub-hover-box hover-bx4'></div>
                </div>
              </div>
              <div
                role='button'
                className='col-lg-6 col-md-6'
                onClick={toggleModal}>
                <div className='single-service-box'>
                  <div className='service-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='#D9D2C6'
                      className='bi bi-calculator'
                      viewBox='0 0 16 16'>
                      <path d='M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z' />
                      <path d='M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z' />
                    </svg>
                  </div>
                  <div className='service-content'>
                    <h3>SIP Calculator</h3>
                    <p>Proactively morph optimal infom progressive resources</p>
                  </div>
                  <div className='hotelhub-hover-box hover-bx'></div>
                  <div className='hotelhub-hover-box hover-bx2'></div>
                  <div className='hotelhub-hover-box hover-bx3'></div>
                  <div className='hotelhub-hover-box hover-bx4'></div>
                </div>
              </div>
              <div
                role='button'
                className='col-lg-6 col-md-6'
                onClick={toggleModal}>
                <div className='single-service-box'>
                  <div className='service-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='#D9D2C6'
                      className='bi bi-calculator'
                      viewBox='0 0 16 16'>
                      <path d='M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z' />
                      <path d='M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z' />
                    </svg>
                  </div>
                  <div className='service-content'>
                    <h3>Retirement Calculator</h3>
                    <p>Proactively morph optimal infom progressive resources</p>
                  </div>
                  <div className='hotelhub-hover-box hover-bx'></div>
                  <div className='hotelhub-hover-box hover-bx2'></div>
                  <div className='hotelhub-hover-box hover-bx3'></div>
                  <div className='hotelhub-hover-box hover-bx4'></div>
                </div>
              </div>
              <div
                role='button'
                className='col-lg-6 col-md-6'
                onClick={toggleModal}>
                <div className='single-service-box'>
                  <div className='service-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='#D9D2C6'
                      className='bi bi-calculator'
                      viewBox='0 0 16 16'>
                      <path d='M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z' />
                      <path d='M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z' />
                    </svg>
                  </div>
                  <div className='service-content'>
                    <h3>Wedding Calculator</h3>
                    <p>Proactively morph optimal infom progressive resources</p>
                  </div>
                  <div className='hotelhub-hover-box hover-bx'></div>
                  <div className='hotelhub-hover-box hover-bx2'></div>
                  <div className='hotelhub-hover-box hover-bx3'></div>
                  <div className='hotelhub-hover-box hover-bx4'></div>
                </div>
              </div>
              <div
                role='button'
                className='col-lg-6 col-md-6'
                onClick={toggleModal}>
                <div className='single-service-box'>
                  <div className='service-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      fill='#D9D2C6'
                      className='bi bi-calculator'
                      viewBox='0 0 16 16'>
                      <path d='M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z' />
                      <path d='M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z' />
                    </svg>
                  </div>
                  <div className='service-content'>
                    <h3>Vacation Calculator</h3>
                    <p>Proactively morph optimal infom progressive resources</p>
                  </div>
                  <div className='hotelhub-hover-box hover-bx'></div>
                  <div className='hotelhub-hover-box hover-bx2'></div>
                  <div className='hotelhub-hover-box hover-bx3'></div>
                  <div className='hotelhub-hover-box hover-bx4'></div>
                </div>
              </div>
            </div>

            {/* <CalculatorModal isShow={show} onToggle={toggleModal} /> */}
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
  );
}

// function CalculatorModal({
//   isShow,
//   onToggle,
// }: {
//   isShow: boolean;
//   onToggle: () => void;
// }) {
//   return (
//     <Modal show={isShow} onHide={onToggle}>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal heading</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//       <Modal.Footer>
//         <Button variant='secondary' onClick={onToggle}>
//           Close
//         </Button>
//         <Button variant='primary' onClick={onToggle}>
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
