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
        <title>CodingPhase Hall Of Fame Students</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="hof-page">
          <section className="hof-page__top">
            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                <div className="d-flex justify-content-center">
                  <a href="/hof">
                    <LazyLoadImage
                      alt={'Hall Of Fame Logo'}
                      effect="blur"
                      src="/img/hoflogo3.png"
                      className="hof-page__logo" />
                  </a>
                </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="hof-page__user">
                  <a href="/hof/waldimir-perez">
                    <LazyLoadImage
                        alt={'Wally Code'}
                        effect="blur"
                        src="/img/hof/waldimir-perez.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Waldimir P.</span>
                    <span className="hof-page__career">HTML Email Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hof-page__user">
                  <a href="/hof/david-norris">
                    <LazyLoadImage
                        alt={'David Norris'}
                        effect="blur"
                        src="/img/hof/david-norris.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">David N. </span>
                    <span className="hof-page__career">Full Stack Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="hof-page__user">
                  <a href="/hof/amit-patel">
                    <LazyLoadImage
                        alt={'Amit Patel'}
                        effect="blur"
                        src="/img/hof/amit-patel.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Amit P. </span>
                    <span className="hof-page__career">Shopify Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="hof-page__user">
                  <a href="/hof/billy-rodriguez">
                    <LazyLoadImage
                        alt={'Billy Rodriguez HTML Email Developer'}
                        effect="blur"
                        src="/img/hof/billy-rodriguez.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Billy R. </span>
                    <span className="hof-page__career">HTML Email Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="hof-page__user">
                  <a href="/hof/ruel-misa">
                    <LazyLoadImage
                        alt={'Ruel Misa Web Producer'}
                        effect="blur"
                        src="/img/hof/ruel-misa.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Ruel M. </span>
                    <span className="hof-page__career">Web Producer</span>
                  </a>
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
