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
    if (getUrlParam('coupon') != '') {
      setCouponActive({
        status: true,
        coupon: getUrlParam('coupon'),
        percent: parseInt(getUrlParam('coupon').substring(0, 2))
      })
      ls.set('coupon', getUrlParam('coupon'))
    }
    if (ls('coupon') != null) {
      setCouponActive({
        status: true,
        coupon: ls('coupon'),
        percent: parseInt(ls('coupon').substring(0, 2))
      })
    }
    //handle affiliate
    if (getUrlParam('affcode') != '') {
      setAffiliateActive({
        status: true,
        affcode: getUrlParam('affcode')
      })
      ls.set('affcode', getUrlParam('affcode'))
    }
    if (ls('affcode') != null) {
      setAffiliateActive({
        status: true,
        affcode: ls('affcode')
      })
    }
  }, []);

  return (
    <>
      <Head>
        <title>CodingPhase | James Hagood Review</title>
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
                        src="/img/hall-of-famelogo3.png"
                        className="hof-page-user__logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="offset-md-1 col-md-4">
                  <div className="hof-page-user__user">
                    <LazyLoadImage
                      alt={'James Hagood'}
                      effect="blur"
                      src="/img/hall-of-fame/james-hagood.jpg"
                      className="hof-page-user__user-img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hof-page-user__info">
                    <span className="hof-page-user__name">James Hagood</span>
                    <span className="hof-page-user__career">Shopify Developer</span>
                    <p className="hof-page-user__testimonial">
                      Pretty much my whole adult life was spent trafficking loads of drugs from the west coast to the southeast and during that time I ended up getting on Heroin so after years of jail and rehab, I finally got clean but it was hard to get a real job.
                    </p>
                    <p className="hof-page-user__testimonial">
                      So I started learning web development and I spent about a year learning the MERN stack and as soon as I started looking for a job COVID hit. so I wasn’t sure what I was going to do because I bet every last dollar I had on learning how to be a developer (I didn’t even have running water at the time).
                      So about that time I saw you on youtube talking about Shopify development and how COVID will help the growth of Shopify and I thought well that makes sense.
                    </p>
                    <p className="hof-page-user__testimonial">
                      I signed up for codingpahse to learn Shopify development and I immediately started getting work on Upwork doing Shopify theme work and I did that for almost a year until a company I had done some work for (through upwork) asked if I wanted to work for them full-time. So I have been working for them doing Shopify theme and app development and BigCommerce theme work for the past 9 or 10 months.</p>

                    <div className="relevant-links">
                      <span className="relevant-links__title">Check Out His Links</span>
                      <ul>
                        {/* <li><a href="https://www.linkedin.com/in/james-hagood-154403199" className="relevant-links__link">Linkedin</a>
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
