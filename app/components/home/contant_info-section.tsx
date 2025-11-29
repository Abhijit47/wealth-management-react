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
  );
}
