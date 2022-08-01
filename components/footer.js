import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <div className="footer_group">
                    <h2 className="footer_title title title-main">Looking for the best Coin Dealer Service?</h2>
                    <Link href="mailto:yeoldcoi@senet.com.au" ><a className="btn btn-text btn-transparent">Contact me</a></Link>
                </div>
                <span className="footer_separator"></span>
                    <div className="footer_group">
                        <Link href="/" >
                            <a className="footer_logo"><Image src="/../public/images/logo_image.png" 
                            width={192} 
                            height={44} 
                            className="navbar_logo-image"/></a>
                        </Link>
                        <p className="footer_description">Knowledge is everything in collectables, if you are not prepared to spend money on books, catalogues, magazines, etc to research your field then what hope have you got?? 
                        I cannot believe the number of people who put money into coins and notes WITHOUT any proper research! 
                        People who think they are investing and do not research their investments, deserve what they get! 
                        I have available, or can order, most major numismatic or philatelic publications. Also, I sometimes have cheap, relevant, 2nd hand books and journals so please ask on the field you require and I will try to help. 
                        If you don't care for the history and romance of notes, stamps and coins, then don't invest in them, because nine times out of 10 you will get burnt.
                        As a hobby, I can't find anything I'd rather be doing.
                        Richard Welling.
                        Adelaide, written 2008 and updated since then.
                        email: oldcoins@senet.com.au
                        website: www.oldcoin.com.au</p>
                        <ul className="footer_list">
                            <li className="footer_list-item">
                                <a href="" className="footer_list-link">
                                    <i className="ri-twitter-line"></i>
                                </a>
                            </li>
                            <li className="footer_list-item">
                                <a href="https://www.ebay.com.au/str/yeoldecoinco" className="footer_list-link">
                                    <i className="ri-store-line"></i>
                                </a>
                            </li>
                            <li className="footer_list-item">
                                <a href="https://www.facebook.com/yeoldecoinco/?ref=page_internal" className="footer_list-link">
                                    <i className="ri-facebook-box-fill"></i>
                                </a>
                            </li>
                        </ul>
                        <span className="footer_copyright">&copy; Richard Welling 2022. All rights reserved.</span>
                </div>
            </div>
        </footer>
      );
}
 
export default Footer;
