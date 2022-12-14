import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navigation from '../components/navigation_bar'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <main>

      <link rel="stylesheet" href="./css/style.css" />
      {/* SHOWCASE */}
      <section className="showcase" id="home">

        <div className="showcase_container container">
          <h1 className="showcase_title title title-main">Welcome to Ye Olde Coin Co. Coin Dealers Adelaide South Australia</h1>
          <picture className="showcase_image">
            <img src="/images/Homepage_image.png" />
          </picture>
        </div>
      </section>

    {/* PORTFOLIO */}
    <section className="portfolio" id="portfolio">
      <div className="portfolio_container container">
        <div className="portfolio_metadata section-metadata">
          <h2 className="title">Ancient Greek and Other Cultures, from 500 BC to 1000 AD.</h2>
        </div>
        <div className="swiper myswiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/images/swiper_images/swiper_image_1.png" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="/images/swiper_images/swiper_image_2.png" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="/images/swiper_images/swiper_image_3.png" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="/images/swiper_images/swiper_image_4.png" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="/images/swiper_images/swiper_image_5.png" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="/images/swiper_images/swiper_image_6.png" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="/images/swiper_images/swiper_image_7.png" alt=""/>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>

    </section>
    </main>
    
  )
}
