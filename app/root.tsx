import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import '@flaticon/flaticon-uicons/css/all/all.css';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import type { Route } from './+types/root';
import './app.css';
import { seo } from './constants';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Ascent Wealth Management</title>
        <meta name='title' content={seo.title} />
        <meta name='description' content={seo.description} />
        <meta name='keywords' content={seo.keywords.join(', ')} />
        {/* <!-- Favicon --> */}
        <link rel='icon' type='image/png' sizes='130x130' href='/favicon.png' />
        {/* <!-- bootstrap CSS --> */}
        <link
          rel='stylesheet'
          // href='../assets/css/bootstrap.min.css'
          href='/assets/css/bootstrap.min.css'
          type='text/css'
          media='all'
        />
        {/* <!-- carousel CSS --> */}
        <link
          rel='stylesheet'
          href='/assets/css/owl.carousel.min.css'
          type='text/css'
          media='all'
        />
        {/* <!-- font-awesome CSS --> */}
        <link
          rel='stylesheet'
          href='/assets/css/all.min.css'
          type='text/css'
          media='all'
        />
        {/* <!-- font-flaticon CSS --> */}
        <link
          rel='stylesheet'
          href='/assets/css/flaticon.css'
          type='text/css'
          media='all'
        />
        {/* <!-- theme-default CSS --> */}
        <link
          rel='stylesheet'
          href='/assets/css/theme-default.css'
          type='text/css'
          media='all'
        />
        {/* <!-- meanmenu CSS --> */}
        <link
          rel='stylesheet'
          href='/assets/css/meanmenu.min.css'
          type='text/css'
          media='all'
        />
        {/* <!-- venobox CSS --> */}
        <link
          rel='stylesheet'
          href='/assets/venobox/venobox.css'
          type='text/css'
          media='all'
        />
        {/* <!-- bootstrap icons --> */}
        {/* <link
          rel='stylesheet'
          href='/assets/css/bootstrap-icons.css'
          type='text/css'
          media='all'
        /> */}
        {/* <!-- Main Style CSS --> */}
        <link
          rel='stylesheet'
          href='/assets/css/style.css'
          type='text/css'
          media='all'
        />
        <link rel='stylesheet' href='./assets/css/odometer-theme-default.css' />
        {/* <!-- responsive CSS --> */}
        <link
          rel='stylesheet'
          href='/assets/css/responsive.css'
          type='text/css'
          media='all'
        />
        <link rel='stylesheet' href='./assets/css/swiper.min.css' />

        {/* <!-- modernizr js --> */}
        <script src='/assets/js/vendor/modernizr-3.5.0.min.js'></script>
        <link rel='stylesheet' href='/assets/css/aos.css' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script src='/assets/js/aos.js'></script>

        <script src='/assets/js/vendor/jquery-3.6.2.min.js'></script>

        <script src='/assets/js/odometer.min.js'></script>

        <script src='/assets/js/bootstrap.min.js'></script>

        <script src='/assets/js/imagesloaded.pkgd.min.js'></script>

        <script src='/assets/venobox/venobox.js'></script>

        <script src='/assets/venobox/venobox.min.js'></script>

        <script src='/assets/js/jquery.meanmenu.js'></script>

        <script src='/assets/js/jquery.scrollUp.js'></script>

        <script src='/assets/js/owl.carousel.min.js'></script>

        <script src='/assets/js/appear.js'></script>

        <script src='/assets/js/jquery.barfiller.js'></script>

        <script src='/assets/js/swiper.min.js'></script>

        <script src='/assets/js/theme.js'></script>

        <script src='/assets/js/my.js'></script>

        {/* <script>
      document
        .getElementById('checkin')
        .addEventListener('focus', function (event) {
          event.target.type = 'date';
        });

      document
        .getElementById('checkin')
        .addEventListener('blur', function (event) {
          if (!event.target.value) {
            event.target.type = 'text';
            event.target.placeholder = 'Check In';
          }
        });

      document
        .getElementById('checkout')
        .addEventListener('focus', function (event) {
          event.target.type = 'date';
        });

      document
        .getElementById('checkout')
        .addEventListener('blur', function (event) {
          if (!event.target.value) {
            event.target.type = 'text';
            event.target.placeholder = 'Check Out';
          }
        });
    </script> */}
      </body>
    </html>
  );
}

export default function App() {
  return (
    // <AosProvider>
    <Outlet />
    // </AosProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className='pt-16 p-4 container mx-auto'>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className='w-full p-4 overflow-x-auto'>
          <code>{stack}</code>
        </pre>
      )}
      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Breatcome Section  --> */}
      {/* <!--==================================================--> */}
      <div className='error-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='error-service-content'>
                <div className='error-content'>
                  <h4>Page not found!</h4>
                  <h2>
                    Oh No! <br />
                    Your Strategy's Missing
                  </h2>
                  <p>
                    Appropriately brand diverse schemas with orthogonal supply
                    brand diverse sticky products through emerging metrics
                  </p>
                  <div className='hotelhub-button cursor-scale small'>
                    <Link prefetch='viewport' to='/' className='hotelhub-btn'>
                      back to home page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='error-img'>
                <img src='/images/resource/error-img.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Breatcome Section  --> */}
      {/* <!--==================================================--> */}
    </main>
  );
}
