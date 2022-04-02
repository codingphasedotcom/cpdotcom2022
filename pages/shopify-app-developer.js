import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactGA from 'react-ga';
import Pricing from '../components/Pricing';
import getUrlParam from '../components/getParam';
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
        <title>Shopify App Developer Career Path</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="project-jumbo">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-middle">
                <div className="left-info">
                  <h1>SHOPIFY APP DEVELOPER</h1>
                  <p>We are the only platform that goes beyond just teaching you how to get a job 
      we focus on skills that are in high demand but also allow you to make your own
      income independently online.</p>
                  <a href="#pricing" className="start-btn">
                    Start Now
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <section id="timeline">
          <div className="container">
            <div className="row g-3">
              <div className="col-md-6 ">
              <h2>Courses To Take</h2>
              <p>All courses are set in order in which you need to take them. If you see a 🔥 next to course title they are exclusive to Yearly Members and Career Bundles Owners.</p>
                <div className="courses">
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/visual-studio-code-101/lectures/9429539">
                          <a>
                            <span className="title">Text Editors</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/learn-html-and-css-by-building-a-cool-social-network/lectures/28048202">
                          <a>
                            <span className="title">HTML & CSS</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/terminal-for-developers/lectures/3316931">
                          <a>
                            <span className="title">Terminal For Developers</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/git-like-a-pro/lectures/9849970">
                          <a>
                            <span className="title">Git Like A Pro</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/future-proof-javascript-course/lectures/2918049">
                          <a>
                            <span className="title">Future Proof Javascript</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
									<div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/debugging-like-a-pro/lectures/9896883">
                          <a>
                            <span className="title">Debuggin Like A Pro</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/jquery-a-beginners-best-friend/lectures/3503191">
                          <a>
                            <span className="title">JQuery</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
									<div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/esnext-es6-es7-es8/lectures/3411587">
                          <a>
                            <span className="title">ESNEXT - ES6 to ES10</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/node-and-npm-basics/lectures/8766354">
                          <a>
                            <span className="title">Node and NPM Basics</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
									<div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/express-js-node-js-framework-course/lectures/12301190">
                          <a>
                            <span className="title">Express JS - Node JS Framework</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
									<div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/koa-js-node-js-framework-course/lectures/22792639">
                          <a>
                            <span className="title">Koa - Node JS Framework</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
									<div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/learn-php-7-and-laravel-master-course/lectures/3676397">
                          <a>
                            <span className="title">PHP 7 and Laravel</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/my-first-shopify-store-course/lectures/16872141">
                          <a>
                            <span className="title">My First Shopify Store 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/shopify-app-development/lectures/22718566">
                          <a>
                            <span className="title">Shopify App Development With Node JS 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/master-shopify-app-course-with-node-js/lectures/35271142">
                          <a>
                            <span className="title">Master Shopify App Development Course with Node JS 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
									<div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/advanced-shopify-app-development-with-php-and-laravel/lectures/24381887">
                          <a>
                            <span className="title">Advanced Shopify App Development with PHP Laravel 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
									{/* <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="#">
                          <a>
                            <span className="title">Vapor - Serverless Deployment Auto Scale 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/google-analytics-course/lectures/11737858">
                          <a>
                            <span className="title">Google Analytics 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/facebook-and-google-ads-marketing/lectures/12732525">
                          <a>
                            <span className="title">Facebook and Google Ads Marketing 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 jobs">
                <h2>Real Skills For Jobs Check On Indeed</h2>
                <div className="path">
                  <Link href="https://www.indeed.com/jobs?q=title%3Afront%20end%20developer&l&vjk=d8fdabe51ecc95fe">
                    <a target="new">
                    <LazyLoadImage
                      src="/img/shopify-dev-jobs.jpg"
                      alt="Landscape picture"
                      effect="blur"
                       />
                    
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h2>What Will You Learn?</h2>
              </div>
              <div className="col-md-9">
                <ul>
                  <li>Convert a Design to HTML and CSS</li>
                  <li>Build a Facebook Clone</li>
                  <li>Responsive Layout With CSS Grid</li>
                  <li>Notifications App</li>
                  <li>Pokemon Rock, Papers, Scissors Battle</li>
                  <li>Learn the shopify dashboard</li>
                  <li>Learn AJAX</li>
                  <li>Build Custom Shopify Theme</li>
                  <li>Liquid Template Language</li>
                  <li>Design Software - Photoshop and Sketch</li>
                </ul>
              </div>
            </div>
          </div>
          
        </section>
        <Pricing location="course" bundleURL="https://codingphase.teachable.com/p/shopify-developer-career-bundle" bundlePrice="500" couponActive={couponActive} affiliateActive={affiliateActive}/>
        
      </MainLayout>
      <style jsx>{`
        
      `}
      </style>
      
      <style global jsx>{`
        a{
          text-decoration: none;
        }
        a:hover{
          color: red !important;
        }
      `}</style>
    </>
  )
}
