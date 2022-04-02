import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Paths from '../components/Paths';
import MainLayout from '../components/layouts/MainLayout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactGA from 'react-ga';
import Pricing from '../components/Pricing';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import getUrlParam from '../components/getParam';
import ls from 'local-storage';

export default function Home() {
  const [couponActive, setCouponActive] = useState(false);
  const [affiliateActive, setAffiliateActive] = useState(false);
  useEffect(() => {
    ReactGA.initialize('UA-37043736-10');
     
     
    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);
  
  useEffect(() => {
    // handle coupon
    if(getUrlParam('coupon') != ''){
      setCouponActive({
        status: true,
        coupon: getUrlParam('coupon'),
        percent: parseInt(getUrlParam('coupon').substring(0, 2))
      })
       ls.set('coupon', getUrlParam('coupon'))
    }else{
      ls.remove('coupon');
    }
    if(ls('coupon') != null) {
      setCouponActive({
        status: true,
        coupon: ls('coupon'),
        percent: parseInt(ls('coupon').substring(0, 2))
      })
    }
    //handle affiliate
    if(getUrlParam('affcode') != ''){
      setAffiliateActive({
        status: true,
        affcode: getUrlParam('affcode')
      })
      ls.set('affcode', getUrlParam('affcode'))
    }else{
      // ls.remove('affcode');
    }
    if(ls('affcode') != null) {
      setAffiliateActive({
        status: true,
        affcode: ls('affcode')
      })
    }

  }, []);
  return (
    <>
      <Head>
        <title>CodingPhase </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <script async data-uid="2f89e66125" src="https://codingphase.ck.page/2f89e66125/index.js"></script>
      </MainLayout>
      <style jsx>{`
        
        
        

      `}
      </style>
      
      <style global jsx>{`
        
      `}</style>
    </>
  )
}
