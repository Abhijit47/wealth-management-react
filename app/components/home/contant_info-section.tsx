import { Link } from 'react-router';

export default function ContantInfoSection() {
  return (
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
                    <p>Call us Any tme</p>
                    <Link to='tel:+917305953668'>+91 7305953668</Link>
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
                    <Link to='mailto:ascentwealth.invest@gmail.com'>
                      ascentwealth.invest@gmail.com
                    </Link>
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
