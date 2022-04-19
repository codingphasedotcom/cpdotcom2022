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
        <title>Content Editor Career Path</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="project-jumbo">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-middle">
                <div className="left-info">
                  <h1>Content Editor</h1>
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
              <p>All courses are set in order in which you need to take them. If you see a 💎 next to course title they are exclusive to Yearly Members and Career Bundles Owners.</p>
                <div className="courses">
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                      
                      </div>
                      <div className="col-md-10">
                        <Link href=" https://codingphase.teachable.com/courses/visual-studio-code-101/lectures/9429539">
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
                        <Link href=" https://codingphase.teachable.com/courses/learn-html-and-css-by-building-a-cool-social-network/lectures/28048202">
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
                        <Link href=" https://codingphase.teachable.com/courses/terminal-for-developers/lectures/3316931">
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
                        <Link href=" https://codingphase.teachable.com/courses/node-and-npm-basics/lectures/8766354">
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
                        <Link href="https://codingphase.teachable.com/courses/practical-javascript-course/lectures/31108107">
                          <a>
                            <span className="title">Practical Javascript 💎</span>
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
                        <Link href="https://codingphase.teachable.com/courses/content-management-systems/lectures/34672531">
                          <a>
                            <span className="title">Content Management Systems 💎</span>
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
                        <Link href="https://codingphase.teachable.com/courses/google-analytics-course/lectures/11737858">
                          <a>
                            <span className="title">Google Analytics 💎</span>
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
                        <Link href=" https://codingphase.teachable.com/courses/design-for-developers/lectures/11000334">
                          <a>
                            <span className="title">Design Softwares For Developers 💎</span>
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
                  <Link href="https://www.indeed.com/jobs?q=content%20editor&l&vjk=2cc9492db3076128" passHref>
                  <LazyLoadImage
                      src="/img/content-editor-jobs.png"
                      alt="Landscape picture"
                      effect="blur"
                       />
                    
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
                  <li>Responsive Layout</li>
                  <li>Javascript</li>
                  <li>Learn Content Management</li>
                  <li>Hubspot</li>
                  <li>Wordpress</li>
                  <li>Shopify</li>
                  <li>Square Space</li>
                  <li>Design Software - Photoshop and Sketch</li>
                </ul>
              </div>
            </div>
          </div>
          
        </section>
        <Pricing location="course" bundleURL="https://codingphase.teachable.com/p/content-editor-career-bundle" bundlePrice="200" couponActive={couponActive} affiliateActive={affiliateActive}/>
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
