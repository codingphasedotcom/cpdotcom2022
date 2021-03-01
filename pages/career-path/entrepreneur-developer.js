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
        <title>Entrepreneur Developer Career Path</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="project-jumbo">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-middle">
                <div className="left-info">
                  <h1>ENTREPRENEUR DEVELOPER</h1>
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
                        <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img" />
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/enrolled/1298638">
                          <a>
                            <span className="title">Entrepreneur Developer 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img" />
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/enrolled/658640">
                          <a>
                            <span className="title">Niche Websites 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img" />
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/enrolled/762985">
                          <a>
                            <span className="title">Building A Niche Website With Wordpress 🔥</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="course">
                    <div className="row g-3">
                      <div className="col-md-1">
                        <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img" />
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/enrolled/658642">
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
                        <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/9Wf8JuAQCY6sp17W0Ggm" className="course-img" />
                      </div>
                      <div className="col-md-10">
                        <Link href="https://codingphase.teachable.com/courses/enrolled/708949">
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
                        alt={'image.alt'}
                        effect="blur"
                        src="/img/shopify-dev-jobs.jpg" className="course-img"/>
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
                  <li>Learn to monetize your skills as a developer</li>
                  <li>Profitable business models for SaaS, Applications, Niche Sites,  Micro-services</li>
                  <li>Understand Tax Brackets</li>
                  <li>Learn the differences between Sole Proprietorship, LLC, S-Corp</li>
                  <li>Learn how to establish your business</li>
                  <li>Build credit for your business</li>
                  <li>Getting capital for growing your business</li>
                  <li>Design Software - Photoshop and Sketch</li>
                </ul>
              </div>
            </div>
          </div>
          
        </section>
        <Pricing location="course" bundleURL="https://codingphase.teachable.com/p/shopify-developer-career-bundle" bundlePrice="300" couponActive={couponActive}/>
        
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
