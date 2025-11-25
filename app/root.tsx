import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';

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
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Hotelhub Luxury Hotel</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <!-- Favicon --> */}
        <link
          rel='icon'
          type='image/png'
          sizes='56x56'
          href='/images/fav-icon/icon.png'
        />
        {/* <!-- bootstrap CSS --> */}
        <link
          rel='stylesheet'
          href='/css/bootstrap.min.css'
          type='text/css'
          media='all'
        />
        {/* <!-- carousel CSS --> */}
        <link
          rel='stylesheet'
          href='/css/owl.carousel.min.css'
          type='text/css'
          media='all'
        />
        {/* <!-- font-awesome CSS --> */}
        <link
          rel='stylesheet'
          href='/css/all.min.css'
          type='text/css'
          media='all'
        />
        {/* <!-- font-flaticon CSS --> */}
        <link
          rel='stylesheet'
          href='/css/flaticon.css'
          type='text/css'
          media='all'
        />
        {/* <!-- theme-default CSS --> */}
        <link
          rel='stylesheet'
          href='/css/theme-default.css'
          type='text/css'
          media='all'
        />
        {/* <!-- meanmenu CSS --> */}
        <link
          rel='stylesheet'
          href='/css/meanmenu.min.css'
          type='text/css'
          media='all'
        />
        {/* <!-- venobox CSS --> */}
        <link
          rel='stylesheet'
          href='/venobox/venobox.css'
          type='text/css'
          media='all'
        />
        {/* <!-- bootstrap icons --> */}
        <link
          rel='stylesheet'
          href='/css/bootstrap-icons.css'
          type='text/css'
          media='all'
        />
        {/* <!-- Main Style CSS --> */}
        <link
          rel='stylesheet'
          href='/css/style.css'
          type='text/css'
          media='all'
        />
        <link rel='stylesheet' href='/css/odometer-theme-default.css' />
        {/* <!-- responsive CSS --> */}
        <link
          rel='stylesheet'
          href='/css/responsive.css'
          type='text/css'
          media='all'
        />
        <link rel='stylesheet' href='/css/swiper.min.css' />

        {/* <!-- modernizr js --> */}
        <script src='/js/vendor/modernizr-3.5.0.min.js'></script>
        <link rel='stylesheet' href='/css/aos.css' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script src='/js/aos.js' defer></script>

        <script src='/js/vendor/jquery-3.6.2.min.js'></script>

        <script src='/js/odometer.min.js'></script>

        <script src='/js/bootstrap.min.js'></script>

        <script src='/js/imagesloaded.pkgd.min.js'></script>

        <script src='/venobox/venobox.js'></script>

        <script src='/venobox/venobox.min.js'></script>

        <script src='/js/jquery.meanmenu.js'></script>

        <script src='/js/jquery.scrollUp.js'></script>

        <script src='/js/owl.carousel.min.js'></script>

        <script src='/js/appear.js'></script>

        <script src='/js/jquery.barfiller.js'></script>

        <script src='/js/swiper.min.js'></script>

        <script src='/js/theme.js'></script>

        <script src='/js/my.js'></script>

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
  return <Outlet />;
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
