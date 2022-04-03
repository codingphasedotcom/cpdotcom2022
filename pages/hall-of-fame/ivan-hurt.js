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
        <title>CodingPhase | Ivan Hurt Review</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="hof-page-user">
          <section className="hof-page-user__top">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                <div className="d-flex justify-content-center">
                  <a href="/hall-of-fame">
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
                          alt={'Ivan Hurt'}
                          effect="blur"
                          src="/img/hof/ivan-hurt.webp"
                          className="hof-page-user__user-img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hof-page-user__info">
                    <span className="hof-page-user__name">Ivan Hurt</span>
                    <span className="hof-page-user__career">Salesforce Email Developer</span>
                    <p className="hof-page-user__testimonial">
                    PC tech for over 15 years but had to have heart surgery in April 2018
    Took a couple of your HTML courses starting since January 2018.
        Creating a wedding invite page for sister who was getting married.
        Showed wedding page to co-worker who was being promoted from webmaster to project manager
    Became a webmaster in May 2018.
    Got promoted from webmaster web developer in December 2018 because I was willing to learn Drupal & PHP
        Worked on SharePoint,
        Drupal,
        Salesforce.
        Made some money with digital products that allowed me to travel just using HTML & CSS
    January 2020 became an email developer after taking your email course that I brought about 6 months before
    Been an email developer for two years
    Now working as Salesforce email developer.
                    </p>

                    <div className="relevant-links">
                      <span className="relevant-links__title">Check Out His Links</span>
                      <ul>
                        {/* <li><a href="https://www.linkedin.com/in/ivan-hurt-154403199" className="relevant-links__link">Linkedin</a>
                        </li> */}
                        
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
