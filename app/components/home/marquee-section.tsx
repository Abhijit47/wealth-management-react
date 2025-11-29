import { companyLogos } from '~/constants';

export default function MarqueeSection() {
  const doubleLogos = [...companyLogos, ...companyLogos, ...companyLogos];
  return (
    <div className='marquee-section'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='marquee'>
              <div className='marquee-single-box'>
                <div className='marquee-content d-flex gap-1'>
                  {doubleLogos.map((logo) => (
                    <div key={logo.id} className={'w-full h-full'}>
                      <img
                        src={logo.imgSrc}
                        alt='company logo'
                        className={
                          'ratio ratio-16/9 w-full h-full object-cover'
                        }
                      />
                      {/* <span>
                        <img src='/images/main-home/star.png' alt='' />
                      </span> */}
                    </div>
                  ))}
                </div>
              </div>
              <div className='marquee-single-box'>
                <div className='marquee-content d-flex gap-1'>
                  {doubleLogos.map((logo) => (
                    <div key={logo.id} className={'w-full h-full'}>
                      <img
                        src={logo.imgSrc}
                        alt='company logo'
                        className={
                          'ratio ratio-16/9 w-full h-full object-cover'
                        }
                      />
                      {/* <span>
                        <img src='/images/main-home/star.png' alt='' />
                      </span> */}
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className='marquee-single-box'>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
