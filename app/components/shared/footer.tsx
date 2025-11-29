import { Link } from 'react-router';
import { footerLinks } from '~/constants';

export default function Footer() {
  return (
    <div className='footer-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6' data-aos='fade-up'>
            <div className='widget'>
              <div className='footer_widget'>
                <div className='company-logo'>
                  <Link to='/'>
                    <img src='/logo.svg' alt='logo' width={80} height={80} />
                  </Link>
                </div>
                <p>
                  We are an AMFI registered Mutual Funds Distributor engaged in
                  distribution of Equity, Debt, Hybrid, Sector and Thematic
                  Mutual Funds. We also provide services with respect to various
                  secondary Bonds, Equity trading, NCDs, Life and Health
                  Insurance, Corporate FDs and Estate Planning solutions etc.
                </p>
                <p>
                  AMFI Registered Mutual Funds Distributor <br />
                  <strong>(ARN 109866)</strong>
                </p>
                <div className='hotelhub-social-icon cursor-scale small'>
                  <h3 className='follow-title'>Follow Us On :</h3>
                  {footerLinks.followUs.map((link) => (
                    <Link key={link.id} to={link.href} target='_blank'>
                      <span className='visually-hidden'>social: </span>
                      <i className={link.label}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6' data-aos='fade-up'>
            <div className='widget widget-nav-menu'>
              <h4 className='widget-title'>Products</h4>
              <div className='menu-quick-link-content'>
                <ul className='footer-menu cursor-scale small'>
                  {footerLinks.products.map((link) => (
                    <li key={link.id}>
                      <Link to={link.href}> {link.label} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6' data-aos='fade-up'>
            <div className='widget widget-nav-menu'>
              <h4 className='widget-title'>Usefull Links</h4>
              <div className='menu-quick-link-content'>
                <ul className='footer-menu cursor-scale small'>
                  {footerLinks.useFullLinks.map((link) => (
                    <li key={link.id}>
                      <Link to={link.href}> {link.label} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-6' data-aos='fade-up'>
            <div className='widget widget-nav-menu'>
              <h4 className='widget-title'>Connect</h4>
              <div className='menu-quick-link-content'>
                <ul className='footer-menu cursor-scale small'>
                  {footerLinks.useFullLinks.map((link) => (
                    <li key={link.id}>
                      <Link to={link.href}> {link.label} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className='col-lg-4 col-md-6' data-aos='fade-up'>
            <div className='widget hotelhub-footer_widget'>
              <h4 className='widget-title'>Our Galary</h4>
              <div className='footer-recent'>
                <Link to='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend06.png' alt='' />
                </Link>
                <a href='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend05.png' alt='' />
                </a>
                <a href='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend04.png' alt='' />
                </a>
                <a href='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend03.png' alt='' />
                </a>
                <a href='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend02.png' alt='' />
                </a>
                <a href='#'>
                  <span className='visually-hidden'>recend: </span>
                  <img src='/images/main-home/recend01.png' alt='' />
                </a>
              </div>
            </div>
          </div> */}
        </div>

        <div className={'mt-5 text-secondary'}>
          <p>
            Risk Factors – Investments in Mutual Funds are subject to Market
            Risks. Read all scheme related documents carefully before investing.
            Mutual Fund Schemes do not assure or guarantee any returns. Past
            performances of any Mutual Fund Scheme may or may not be sustained
            in future. There is no guarantee that the investment objective of
            any suggested scheme shall be achieved. All existing and prospective
            investors are advised to check and evaluate the Exit loads and other
            cost structure (TER) applicable at the time of making the investment
            before finalizing on any investment decision for Mutual Funds
            schemes. We deal in Regular Plans only for Mutual Fund Schemes and
            earn a Trailing Commission on client investments. Disclosure For
            Commission earnings is made to clients at the time of investments.
            Option of Direct Plan for every Mutual Fund Scheme is available to
            investors offering advantage of lower expense ratio. We are not
            entitled to earn any commission on Direct plans. Hence we do not
            deal in Direct Plans.
          </p>
          <p>
            AMFI Registered Mutual Fund Distributor | ARN-109866 | Date of
            initial registration – 02-Apr-2025 | Current validity of ARN –
            01-Apr-2028
          </p>
          <p>
            Grievance Officer- Ascent Wealth |{' '}
            <Link to='mailto:ascentwealth.invest@gmail.com'>
              ascentwealth.invest@gmail.com
            </Link>
          </p>
        </div>

        <div className='row footer-btm d-flex align-items-center'>
          <div className='col-lg-6 col-md-6'>
            <div className='hotelhub-company-desc'>
              <p>
                &copy; Copyright {new Date().getFullYear()} Ascent Wealth
                Management.
              </p>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
            <div className='footer-bottom-menu text-right'>
              <ul>
                <li>
                  <a href='#'>
                    <span className='visually-hidden'>Payoneer: </span>
                    <img src='/images/main-home/curency01.png' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='visually-hidden'>Paypal: </span>
                    <img src='/images/main-home/curency02.png' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='visually-hidden'>Stripe: </span>
                    <img src='/images/main-home/curency03.png' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='visually-hidden'>Visa: </span>
                    <img src='/images/main-home/curency04.png' alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
