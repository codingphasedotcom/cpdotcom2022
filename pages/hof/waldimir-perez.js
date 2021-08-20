import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactGA from 'react-ga';
import Pricing from '../../components/Pricing';
import getUrlParam from '../../components/getParam';
import ls from 'local-storage';

export default function Home() {
  const [couponActive, setCouponActive] = useState(false);
  const [affiliateActive, setAffiliateActive] = useState(false);
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
       ls.set('coupon', getUrlParam('coupon'))
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
        <title>CodingPhase | Waldimir Perez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="hof-page-user">
          <section className="hof-page-user__top">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                <div className="d-flex justify-content-center">
                  <a href="/hof">
                    <LazyLoadImage
                      alt={'Hall Of Fame Logo'}
                      effect="blur"
                      src="/img/hoflogo3.png"
                      className="hof-page-user__logo" />
                  </a>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="offset-md-1 col-md-4">
                  <div className="hof-page-user__user">
                      <LazyLoadImage
                          alt={'Wally Code'}
                          effect="blur"
                          src="/img/hof/waldimir-perez.jpg"
                          className="hof-page-user__user-img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hof-page-user__info">
                    <span className="hof-page-user__name">Waldimir Perez</span>
                    <span className="hof-page-user__career">HTML Email Developer</span>
                    <p className="hof-page-user__testimonial">
                    Been coding for give or take 5 months. Decided to go for employment ASAP. Chose the email dev track. Got a job within two weeks of applying! Your courses are straightforward, to the point, exactly what I had to learn to get a job. Thank you sooo much for your content, this job will change my family's future. Your courses gave me a sure path to kickstart my career.
                    </p>
                    <p className="hof-page-user__testimonial">
                    Currently budgeting out my life so i can buy a multifamily unit in a years time. Going job hop to a 70-90k job and buy that multi. It'll be a great start for my future family. My kids are going to be mami and papi kids. Thank you again!
                    </p>

                    <div className="relevant-links">
                      <span className="relevant-links__title">Check Out His Links</span>
                      <ul>
                        <li><a href="https://www.waldimirperez.com/" className="relevant-links__link" target="_blank">waldimirperez.com</a></li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>
					
        </div>
          
      </MainLayout>
      
    </>
  )
}
