export default function AppoinmentSection() {
  return (
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
                  <i className='flaticon flaticon-right-arrow'></i>get in touch
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
  );
}
