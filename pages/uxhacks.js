import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import ReactGA from 'react-ga';
import getUrlParam from '../components/getParam';

export default function ChrisSean() {
  const [couponActive, setCouponActive] = useState(false);
    useEffect(() => {
        ReactGA.initialize('UA-37043736-10');
     
        if (typeof window !== 'undefined') {
          ReactGA.pageview(window.location.pathname + window.location.search);
        }
      });
      useEffect(() => {
        window.location.href = "https://www.codingphase.com/?affcode=117955_ra2bijst&coupon=20UXHACKS&utm_source=youtube&utm_medium=video&utm_campaign=UXHACKS";
        if(getUrlParam('coupon') != ''){
          setCouponActive({
            status: true,
            coupon: getUrlParam('coupon'),
            percent: parseInt(getUrlParam('coupon').substring(0, 2))
          })
          console.log(couponActive);
        }
      }, []);
  return (
    <>
      <Head>
        <title>CodingPhase - UX HACKS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="page">
            <div className="container" style={{flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '700px'}}>
              <h1>UX HACKS</h1>
              <p>Applying your coupon will redirect in a few seconds</p>
              
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

