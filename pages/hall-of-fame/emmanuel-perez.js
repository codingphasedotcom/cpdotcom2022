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
        <title>CodingPhase | Emmanuel Perez Review</title>
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
                          alt={'Emmanuel Perez'}
                          effect="blur"
                          src="/img/hof/emmanuel-perez.webp"
                          className="hof-page-user__user-img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hof-page-user__info">
                    <span className="hof-page-user__name">Emmanuel Perez</span>
                    <span className="hof-page-user__career">Email Developer</span>
                    <p className="hof-page-user__testimonial">
                    I graduated college in 2020 with a CS degree & planned to get into DevOps. I didn’t enjoy coding in college due to not having the greatest professors, but once my DevOps plans didn’t go as I hoped I decided to give coding another chance after stumbling across CodingPhase on Youtube. I focused on HTML, CSS, and responsive web design, and for a few months I only built static sites; later moving onto JS. Within 6 months of CodingPhase and self-study, I was able to build a few projects that I later sent over with countless applications. I landed a Developer position in April 2021 and if it weren’t for finding CodingPhase in September I don’t know if I would’ve had the motivation to get where I am now.
                    </p>
                    <p className="hof-page-user__testimonial">
                    I enjoyed Joe’s classes because as many will tell you they’re straightforward and simple to understand. Joe is someone I felt like I could relate to and because we came from the same background I was easily motivated by his success. Aside from the courses, the CodingPhase community has also been fully supportive and kept me going. I strongly recommend tuning into the live streams, everyone is very helpful and supportive. I still keep up with the streams and videos when I can. Entrepreneurship is a goal of mine and I know within a few years I can accomplish this thanks to CodingPhase.  
                    </p>

                    <div className="relevant-links">
                      <span className="relevant-links__title">Check Out His Links</span>
                      <ul>
                        <li><a href="https://www.linkedin.com/in/emmanuel-perez-154403199" className="relevant-links__link">djnorris.io</a>
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
