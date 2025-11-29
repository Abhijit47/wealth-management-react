import AboutSection from '~/components/home/about-section';
import HeroSection from '~/components/home/hero-section';
import Footer from '~/components/shared/footer';
import MobileMenu from '~/components/shared/mobile-menu';
import Navbar from '~/components/shared/navbar';
import { seo } from '~/constants';
import type { Route } from './+types/home';

import AppoinmentSection from '~/components/home/appoinment-section';
import BlogSection from '~/components/home/blog-section';
import ChooseSection from '~/components/home/choose-section';
import ContantInfoSection from '~/components/home/contant_info-section';
import MarqueeSection from '~/components/home/marquee-section';
import SearchPopup from '~/components/home/search-popup';
import ServiceSection from '~/components/home/service-section';
import TestimonialSection from '~/components/home/testimonial-section';
import VideoSection from '~/components/home/video-section';
import WhyChooseUsSection from '~/components/home/why-choose-us-section';
import Loader from '~/components/shared/loader';
import PageScrollProgress from '~/components/shared/page-scroll-progress';

export function meta({}: Route.MetaArgs) {
  return [
    { title: seo.title },
    { name: 'description', content: seo.description },
    { name: 'keywords', content: seo.keywords.join(', ') },
  ];
}

// const isDev = import.meta.env.DEV;

export default function Home() {
  return (
    <>
      {/* <!-- loder --> */}
      <Loader />

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Main Menu  --> */}
      {/* <!--==================================================--> */}
      <Navbar />

      {/* <!-- hotelhub Mobile Menu  --> */}
      <MobileMenu />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Main Menu  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Hero Section  --> */}
      {/* <!--==================================================--> */}
      <HeroSection />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Hero Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub About Section --> */}
      {/* <!--==================================================--> */}
      <AboutSection />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub About Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Why choose us Section --> */}
      {/* <!--==================================================--> */}
      <WhyChooseUsSection />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Why choose us Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Choose Section --> */}
      {/* <!--==================================================--> */}
      <ChooseSection />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Choose Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Service Section  --> */}
      {/* <!--==================================================--> */}
      <ServiceSection />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Service Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start Buddy  Video section --> */}
      {/* <!--==================================================--> */}
      <VideoSection />
      {/* <!--==================================================--> */}
      {/* <!-- End Buddy Video section --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Testimonial Section  --> */}
      {/* <!--==================================================--> */}
      <TestimonialSection />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Testimonial Section --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Marquee Section  --> */}
      {/* <!--==================================================--> */}
      <MarqueeSection />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Marquee Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Blog Section --> */}
      {/* <!--==================================================--> */}
      <BlogSection />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Blog Section --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Appoinment Section  --> */}
      {/* <!--==================================================--> */}
      <AppoinmentSection />
      <ContantInfoSection />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Appoinment Section  --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start hotelhub Footer Section --> */}
      {/* <!--==================================================--> */}
      <Footer />
      {/* <!--==================================================--> */}
      {/* <!-- End hotelhub Footer Section --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start Search Popup Section --> */}
      {/* <!--==================================================--> */}
      <SearchPopup />
      {/* <!--==================================================--> */}
      {/* <!-- Start Search Popup Section --> */}
      {/* <!--==================================================--> */}

      {/* <!--==================================================--> */}
      {/* <!-- Start scrollup section Area --> */}
      {/* <!--==================================================--> */}
      <PageScrollProgress />
      {/* <!--==================================================--> */}
      {/* <!-- Start scrollup section Area --> */}
      {/* <!--==================================================--> */}
    </>
  );
}
