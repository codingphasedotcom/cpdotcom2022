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
        <title>CodingPhase | Jerome Young Review</title>
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
                          alt={'Jerome Young'}
                          effect="blur"
                          src="/img/hof/jerome-young.png"
                          className="hof-page-user__user-img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hof-page-user__info">
                    <span className="hof-page-user__name">Jerome Young</span>
                    <span className="hof-page-user__career">Email Developer</span>
                    <p className="hof-page-user__testimonial">
                    I started my journey by hearing about coding from my father encouraging me to dive into medical or software because those careers will always be in demand. Later, I decided to start getting into software development and began to take time every day to learn HTML. I found I enjoyed learning HTML, so I attended a Bootcamp in 2018 where I learned how to become a full-stack developer, with a tech stack that covered HTML, CSS, Vanilla Javascript, React, Redux, Mongo DB, Express, NoSql, and SQL. Once I graduated from my bootcamp, I went straight into looking for work and applying for job placement as a Front-End developer. Through that process, I put out at least 300 different applications at the time, and then primarily heard from various companies stating, “currently your experience as a developer doesn’t meet our required skillset for this position”, or “we decided to go with another candidate.”  
                    </p>
                    <p className="hof-page-user__testimonial">
                    At that point, I decided to do some research on finding a mentor that would help me acquire the skills necessary for me to dive into the industry as a developer. Later, I ran across ‘Codingphase‘ Youtube channel that was recommended to me through the Youtube Algorithm. I decided that I would give him a shot once I saw one of his HTML Email Developer videos; he sold me once he said all you need to know is HTML & CSS. I later then bought the Codingphase $20 monthly membership and took his HTML Email Developer course. Once I finished the course and built several personal projects, I decided to apply to some companies once again. This time I received some calls, and not that much longer later I landed my role at my current job I’m working for right now. Thank you Joe for always giving back to others through your blood and sweat. I wouldn’t be in this position being an Email developer if you hadn’t made the time to create that course for individuals like myself. I 100% recommend Codingphase to anybody thinking about diving into a Web Developer career or Email developer career!
                    </p>

                    <div className="relevant-links">
                      <span className="relevant-links__title">Check Out His Links</span>
                      <ul>
                        {/* <li><a href="https://www.linkedin.com/in/jerome-young-154403199" className="relevant-links__link">Linkedin</a>
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
