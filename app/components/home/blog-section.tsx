import { Link } from 'react-router';

export default function BlogSection() {
  return (
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
                          <img src='/images/main-home/blog-author.png' alt='' />
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
  );
}
