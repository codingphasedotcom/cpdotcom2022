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
        <title>CodingPhase | Ruel Misa</title>
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
                          alt={'Billy Rodriguez Web Developer HTML Emails'}
                          effect="blur"
                          src="/img/hof/billy-rodriguez.jpg"
                          className="hof-page-user__user-img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hof-page-user__info">
                    <span className="hof-page-user__name">Ruel Misa</span>
                    <span className="hof-page-user__career">Web Producer</span>
                    <p className="hof-page-user__testimonial">
                    Stumbling upon CodingPhase’s youtube channel was a Godsend. Before, I was unfocused with what I wanted in my career. He woke me up and helped me regain that focus. So, I had to try out his services. It was 20 bucks (16 with the discount) which was a steal. He breaks down every lesson easily and imparts his experience on each; you can actually notice it.
                    </p>
                    <p className="hof-page-user__testimonial">
                    After a few months (2.5 to 3), I got my breakthrough as a Web Producer for Haymarket. I am currently a yearly subscriber because I want to get into the Shopify and entrepreneurial courses in order to gradually build my own business. He provides gems on the daily and I can attest that you will get your money’s worth! Thank you again Joe! You definitely changed people's lives with your service!
                    </p>
                    

                    <div className="relevant-links">
                      <span className="relevant-links__title">Check Out His Links</span>
                      {/* <ul>
                        <li><a href="http://billyrdz.com/" className="relevant-links__link">billyrdz.com</a>
                        </li>
                        <li><a href="https://twitter.com/billyrdz" className="relevant-links__link">Twitter</a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/billyrdz" className="relevant-links__link">LinkedIn</a>
                        </li>
                      </ul> */}
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
