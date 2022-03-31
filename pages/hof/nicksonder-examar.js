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
        <title>CodingPhase | Nicksonder Examar Review</title>
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
                          alt={'Nicksonder Examar'}
                          effect="blur"
                          src="/img/hof/nicksonder-examar.webp"
                          className="hof-page-user__user-img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hof-page-user__info">
                    <span className="hof-page-user__name">Nicksonder Examar</span>
                    <span className="hof-page-user__career">Front End Developer</span>
                    <p className="hof-page-user__testimonial">
                    I first started taking courses in 2018, after graduating high school, I didn’t want to waste time taking useless courses in college without having a goal in mind so I spend two years searching for a career I would love, Web Development seems to be the pathway for me and after some more searching, I found CodingPhase’s YouTube channel. CodingPhase has been a great part of my success in landing a job, I first learned HTML/CSS syntax on Code Academy, but everything else I learned on CodingPhase. The way Joe, the instructor, explains things, a 10 years old kid can learn to code from him, he breaks difficult concepts down and makes them simple for your to understand.
                    </p>
                    <p className="hof-page-user__testimonial">
                    All thanks to Joe, the next step is to learn as much as I can and be able to achieve my ultimate goal.
                    </p>
                    <p className="hof-page-user__testimonial">
                    Thanks again, Joe, this is just the beginning!
                    </p>

                    <div className="relevant-links">
                      <span className="relevant-links__title">Check Out His Links</span>
                      <ul>
                        {/* <li><a href="https://www.linkedin.com/in/nicksonder-examar-154403199" className="relevant-links__link">Linkedin</a>
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
