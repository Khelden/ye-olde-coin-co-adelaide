import Footer from "./footer";
import Navigation from "./navigation_bar";
import Script from 'next/script'

const Layout = ( {children} ) => {
    return (
        <div className="content">
            <Navigation />
            { children }
            <Footer />
            <Script src="/../coding/programming.js" />
        </div>
      );
}
 
export default Layout;