import Footer from "./footer";
import Navigation from "./navigation_bar";
import Script from 'next/script'

const Layout = ( {children} ) => {
    return (
        <div className="content">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
            <Navigation />
            { children }
            <Footer />
            <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" defer />
            <Script src="/../coding/swiper_code.js" />
            <Script src="/../coding/programming.js" />
        </div>
      );
}
 
export default Layout;
