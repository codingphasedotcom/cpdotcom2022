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
        <title>CodingPhase | Billy Rodriguez</title>
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
                          alt={'Kevin Mosley'}
                          effect="blur"
                          src="/img/hof/kevin-mosley.jpg"
                          className="hof-page-user__user-img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hof-page-user__info">
                    <span className="hof-page-user__name">Kevin Mosley</span>
                    <span className="hof-page-user__career">Software Engineer</span>
                    <p className="hof-page-user__testimonial">
                    My name is Kevin Mosley and I am a U.S. Navy veteran and Software Engineer based out of California. I came across codingphase’s YouTube channel about 2weeks before finishing a coding bootcamp and have not looked back since. I signed up for the yearly membership the day I graduated and with 2months I was hired by a social impact startup as a Software/Solutions Engineer. I can relate to codingphase because we both grew up in poverty on the Westside of Chicago and had to overcome tremendous odds to get to where we are today. In 2014, I was working as a correctional officer at a maximum security prison not knowing what the future would hold. Today, I code an educational solution that is used to teach and rehabilitate inmates all across the country.
                    </p>

                    <div className="relevant-links">
                      <span className="relevant-links__title">Check Out His Links</span>
                      <ul>
                        <li><a href="https://www.kevinjmosley.com" className="relevant-links__link">kevinjmosley.com</a>
                        </li>
                        <li><a href="https://www.employthevets.com" className="relevant-links__link">Employ The Vets</a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/kevinjmosley/" className="relevant-links__link">LinkedIn</a>
                        </li>
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
