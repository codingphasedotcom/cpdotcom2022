import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import Paths from '../components/Paths';
import ReactGA from 'react-ga';
import getUrlParam from '../components/getParam';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Home() {
  const [couponActive, setCouponActive] = useState(false);
  const [AffiliateActive, setAffiliateActive] = useState(false);
  useEffect(() => {
    ReactGA.initialize('UA-37043736-10');
     
    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  });
  useEffect(() => {
    if(getUrlParam('coupon') != ''){
      
      setCouponActive({
        status: true,
        coupon: getUrlParam('coupon'),
        percent: parseInt(getUrlParam('coupon').substring(0, 2))
      })
      setAffiliateActive({
        status: true,
        coupon: getUrlParam('affcode')
      })
      console.log(couponActive);
    }
  }, []);
  return (
    <>
      <Head>
        <title>CodingPhase </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section id="reviews-page">
          <div className="container">
            <h1>CodingPhase Reviews</h1>
            <h2 className="container">Real Reviews</h2>
            <div className="reviews-images">
              <a href="/img/reviews/1.png">
                <LazyLoadImage
                      alt={'Review'}
                      effect="blur"
                      src="/img/reviews/1.png" />
                
              </a>
              <a href="/img/reviews/2.png">
              <LazyLoadImage
                      alt={'Review'}
                      effect="blur"
                      src="/img/reviews/2.png" />
              
              </a>
              <a href="/img/reviews/3.png">
              <LazyLoadImage
                      alt={'Review'}
                      effect="blur"
                      src="/img/reviews/3.png" />
              </a>
              <a href="/img/reviews/4.png">
              <LazyLoadImage
                      alt={'Review'}
                      effect="blur"
                      src="/img/reviews/4.png" />
              </a>
            </div>
            
          </div>
        </section>
      </MainLayout>
    </>
  )
}
