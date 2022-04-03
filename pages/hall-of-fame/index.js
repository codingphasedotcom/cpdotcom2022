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
                  <a href="/hall-of-fame">
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
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/waldimir-perez">
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
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/david-norris">
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
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/amit-patel">
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
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/billy-rodriguez">
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
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/ruel-misa">
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
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/kevin-mosley">
                    <LazyLoadImage
                        alt={'Kevin Mosley Software Engineer'}
                        effect="blur"
                        src="/img/hof/kevin-mosley.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Kevin M. </span>
                    <span className="hof-page__career">Software Engineer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/emmanuel-perez">
                    <LazyLoadImage
                        alt={'Emmanuel Perez Email Developer'}
                        effect="blur"
                        src="/img/hof/emmanuel-perez.webp"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Emmanuel P. </span>
                    <span className="hof-page__career">Email Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/francis-turinayo">
                    <LazyLoadImage
                        alt={'Francis Turinayo Email Developer'}
                        effect="blur"
                        src="/img/hof/francis-turinayo.webp"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Francis T. </span>
                    <span className="hof-page__career">Email Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/daryl-dauphin">
                    <LazyLoadImage
                        alt={'Francis Turinayo Email Developer'}
                        effect="blur"
                        src="/img/hof/daryl-dauphin.webp"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Daryl D. </span>
                    <span className="hof-page__career">Digital Agency Owner</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/nicksonder-examar">
                    <LazyLoadImage
                        alt={'Nicksonde Examar Email Developer'}
                        effect="blur"
                        src="/img/hof/nicksonder-examar.jpeg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Nicksonder E. </span>
                    <span className="hof-page__career">Front End Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/jerome-young">
                    <LazyLoadImage
                        alt={'Jerome Young Email Developer'}
                        effect="blur"
                        src="/img/hof/jerome-young.png"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Jerome Y. </span>
                    <span className="hof-page__career">Email Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/jon-disla">
                    <LazyLoadImage
                        alt={'Jon Disla Web Content Manager'}
                        effect="blur"
                        src="/img/hof/jon-disla.png"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Jon D. </span>
                    <span className="hof-page__career">Web Content Manager</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/sita">
                    <LazyLoadImage
                        alt={'Sita Web Content Editor'}
                        effect="blur"
                        src="/img/hof/sita.webp"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Sita</span>
                    <span className="hof-page__career">Web Content Editor</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/ivan-hurt">
                    <LazyLoadImage
                        alt={'Ivan Hurt Salesforce Email Developer'}
                        effect="blur"
                        src="/img/hof/ivan-hurt.webp"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Ivan Hurt</span>
                    <span className="hof-page__career">Salesforce Email Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/ivan-hurt">
                    <LazyLoadImage
                        alt={'Ivan Hurt Salesforce Email Developer'}
                        effect="blur"
                        src="/img/hof/cameron-everett.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Cameron Everett</span>
                    <span className="hof-page__career">Web Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/james-hagood">
                    <LazyLoadImage
                        alt={'James Hagood Shopify Developer'}
                        effect="blur"
                        src="/img/hof/james-hagood.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">James Hagood</span>
                    <span className="hof-page__career">Shopify Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/donly-wilson">
                    <LazyLoadImage
                        alt={'Donly Wilson Web Developer'}
                        effect="blur"
                        src="/img/hof/donly-wilson.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Donly Wilson</span>
                    <span className="hof-page__career">Web Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/devin-martinez">
                    <LazyLoadImage
                        alt={'Devin Martinez Email Developer'}
                        effect="blur"
                        src="/img/hof/devin-martinez.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Devin Martinez</span>
                    <span className="hof-page__career">Email Developer</span>
                  </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="hof-page__user">
                  <a href="/hall-of-fame/renell-tigue">
                    <LazyLoadImage
                        alt={'Renell Tigue Shopify Developer'}
                        effect="blur"
                        src="/img/hof/renell-tigue.jpg"
                        className="hof-page__user-img" />
                        <span className="hof-page__name">Renell Tigue</span>
                    <span className="hof-page__career">Shopify Developer</span>
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
