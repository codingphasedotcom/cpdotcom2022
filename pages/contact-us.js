import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MainLayout from '../components/layouts/MainLayout'
import Paths from '../components/Paths';
import ReactGA from 'react-ga';
import getUrlParam from '../components/getParam';

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
        <section id="contact-us-page">
          <div className="container">
            <h1>Contact-Us</h1>
          <p>
          <LazyLoadImage
                      alt={'Contact CodingPhase'}
                      effect="blur"
                      src="/img/contact-us.png" />
          
            
            </p>
  <h3>Get in Touch</h3>
  <h3>For problems with payment, want a refund, or any other question.</h3>
  <p>44 Waterbury Rd Suite 2D<br/>
  Prospect, CT 06712<br/>
  <a href="mailto:codingphase@gmail.com">Email us on:<br/>
  codingphase@gmail.com</a></p>
  <h3>Drop us a line</h3>
          </div>
        </section>
        
      </MainLayout>
      <style jsx>{`
        
      `}
      </style>
      
      <style global jsx>{`
        
      `}</style>
    </>
  )
}
