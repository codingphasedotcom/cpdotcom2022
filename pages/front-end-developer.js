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
        <title>Front End Developer Career Path</title>``
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="jumbo">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-middle">
                <div className="left-info">
                  <h1>Frontend Developer</h1>
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
                        <Link href=" https://codingphase.teachable.com/courses/learn-advance-css-with-flexbox-and-css-grid-course/lectures/3946609">
                          <a>
                            <span className="title">Advance CSS with Flexbox and Grid</span>
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
                        <Link href=" https://codingphase.teachable.com/courses/animation-for-developers/lectures/4169493">
                          <a>
                            <span className="title">CSS Animations</span>
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
                        <Link href=" https://codingphase.teachable.com/courses/sass-like-a-pro-course/lectures/3300829">
                          <a>
                            <span className="title">SASS Like A Pro</span>
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
                        <Link href=" https://codingphase.teachable.com/courses/git-like-a-pro/lectures/9849970">
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
                        <Link href=" https://codingphase.teachable.com/courses/future-proof-javascript-course/lectures/2918049">
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
                        <Link href=" https://codingphase.teachable.com/courses/advance-javascript-animations-with-gsap-anime-js/lectures/15871268">
                          <a>
                            <span className="title">Javascript Animations</span>
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
                        <Link href=" https://codingphase.teachable.com/courses/enrolled/336889">
                          <a>
                            <span className="title">How To Deploy Your Site</span>
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
                        <Link href=" https://codingphase.teachable.com/courses/web-developer-personal-brand/lectures/5512136">
                          <a>
                            <span className="title">Web Developer Personal Brand</span>
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
                        <Link href=" https://codingphase.teachable.com/courses/object-oriented-programming-with-javascript-course/lectures/3664054">
                          <a>
                            <span className="title">Object Oriented Programming With Javascript</span>
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
                        <Link href=" https://codingphase.teachable.com/courses/esnext-es6-es7-es8/lectures/3411587">
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
                        <Link href="https://codingphase.teachable.com/courses/react-js-job-ready/lectures/32022490">
                          <a>
                            <span className="title">React - Job Ready</span>
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
                        <Link href=" https://codingphase.teachable.com/courses/redux-the-easy-way-course/lectures/9097542">
                          <a>
                            <span className="title">Redux - The Easy Way Course</span>
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
                        <Link href=" https://codingphase.teachable.com/courses/react-js-til-infinity-course/lectures/10081502">
                          <a>
                            <span className="title">React - Till Infinity</span>
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
                  <Link href="https://www.indeed.com/jobs?q=title%3Afrontend%20developer&l&vjk=d0a69069a194c28e">
                    <a target="new">
                    <LazyLoadImage
                      src="/img/frontend-dev-jobs.jpg"
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
                  <li>Advanced Javascript Animations</li>
                  <li>{`Learn Ajax and working with API's`}</li>
                  <li>Build Your Web Developer Portfolio</li>
                  <li>Learn To Debug Your Apps</li>
                  <li>Personal Brand For Web Developer</li>
                  <li>Build Real Estate Filter</li>
                  <li>Build Responsive Emails</li>
                  <li>Learn The Most Popular Javascript Frameworks</li>
                  <li>Build Mobile Apps with React Native</li>
                  <li>Deploy Websites</li>
                </ul>
              </div>
            </div>
          </div>
          
        </section>
        <Pricing location="course" couponActive={couponActive} affiliateActive={affiliateActive}/>
      </MainLayout>
      <style jsx>{`
        #projects h2{
          font-size: 2rem;
          background-size: 100%;
          text-transform: uppercase;
          text-align: center;
          border-image-source: linear-gradient(34deg,rgba(255,3,3,1) 0%,rgba(128,0,255,1) 61%);
          background: linear-gradient(34deg,rgba(255,3,3,1) 0%,rgba(128,0,255,1) 61%);
          -webkit-background-clip: text;
          -webkit-text-stroke: 4px transparent;
          color: #010117;
          stroke-width: 2px;
          margin-bottom: 4rem;
        }
        #projects ul{
          list-style: disc;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        #projects li{
          font-size: 1.5rem;
          color: white;
          text-transform: capitalize;
        }
        #timeline{
          padding: 4rem 0;
        }
        #timeline .course{
          border-bottom: 2px solid white;
          padding: 1rem;
          transition: all .2s ease-in-out;
          cursor: pointer;
        }
        #timeline .course:hover{
          border-bottom: 2px solid;
          border-image-source: linear-gradient(34deg,rgba(255,3,3,1) 0%,rgba(128,0,255,1) 61%);
          border-image-slice: 1;
          padding: 1rem;
          box-shadow: 0px 12px 13px -6px rgba(255,3,3, 0.25);
        }
        #timeline .course .title{
          font-size: 1rem;
          font-weight: 500;

        }
        #timeline .course .course-img{
          width: 100%;

        }
        #timeline .jobs img{
          width: 100%;
        }
        #projects{
          background: #010117;
          padding: 4rem 0;
        }
        #pricing {
          padding: 4rem 0;
        }
        #pricing h2{
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          line-height: 123.1%;
          color: #000000;
          text-align: center;
        }
        #pricing p{
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 123.1%;
          color: #697589;
          text-align: center;
          margin-bottom: 2rem;
        }
        #pricing .prices{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          margin-bottom: 3rem;
        }
        
        #pricing .prices .tier{
          padding: 2rem 1rem;
          background: #FFFFFF;
          border: 1px solid #1859FF;
          box-sizing: border-box;
          box-shadow: 0px 12px 13px -6px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          width: 270px;
          height: 496px;
          display: flex;
          flex-direction: column;
          margin-right: 1rem;
        }
        #pricing .prices .tier.filled{
          background: #1859FF;
          color: white;
        }
        #pricing .prices .tier.filled .title{
          color: white;
        }
        #pricing .prices .tier.filled .price{
          color: white;
        }
        #pricing .prices .tier.filled button{
          background: white;
          color: #1859FF;
        }
        #pricing .prices .tier:nth-child(3){
          margin-right: 0;
        }
        #pricing .title{
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 123.1%;
          color: #000000;
          align-self: center;
        }
        #pricing .price{
          font-style: normal;
          font-weight: bold;
          font-size: 48px;
          line-height: 123.1%;
          align-self: center;
          color: #000000;
          margin-bottom: 2rem;
        }
        #pricing .info{
          font-family: Helvetica Neue;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 32px;
          margin-bottom: 4rem;
        }
        #pricing button{
          width: 208px;
          height: 48px;
          left: 560px;
          top: 3936px;
          border: none;
          background: #1859FF;
          box-shadow: 0px 12px 13px -6px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          color: white;
          align-self: center;
        }
        #whyus{
          background: #010117;
          padding: 4rem 0;
          
        }
        #whyus h2{
          font-size: 72px;
          background-size: 100%;
          text-transform: uppercase;
          text-align: center;
          border-image-source: linear-gradient(34deg, rgba(255,3,3,1) 0%, rgba(128,0,255,1) 61%);
          /* Warning: no fallback */
          background: linear-gradient(34deg, rgba(255,3,3,1) 0%, rgba(128,0,255,1) 61%);
          -webkit-background-clip: text;
          -webkit-text-stroke: 4px transparent;
          color: #010117; /* same as background */
          stroke-width: 2px;
          margin-bottom: 4rem;
        }
        #whyus .image-highlight {
          position: relative;
          width: 362px;
          height: 480px;
          margin-top: 4rem;
        }
        #whyus .image-highlight .gradient-bg{
          width: 362px;
          height: 480px;
          border: 16px solid;
          border-image-source: linear-gradient(34deg, rgba(255,3,3,1) 0%, rgba(128,0,255,1) 61%);
          border-image-slice: 1;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
        #whyus .image-highlight img{
          width: 362px;
          height: 480px;
          object-fit: cover;
          position: absolute;
          top: -3rem;
          left: 3rem;
          z-index: 2;
        }
        #whyus h3{
          color: white;
          margin-bottom: 1rem;
        }
        #whyus ul{
          list-style: disc;
          color: white;
          font-size: 1rem;
          margin-bottom: 3rem;
        }
        #whyus li{
          line-height: 24px;
          margin-bottom: 1rem;
        }
        #whyus .total-students{
          font-size: 4rem;
          color: white;
          font-weight: 700;
          display:block;
          text-align: center;
          line-height: 1;
        }
        #whyus .sub-total{
          font-size: 1rem;
          color: white;
          font-weight: 300;
          display:block;
          text-align: center;
          margin-bottom: 3rem;
        }
        #whyus .who-hired{
          font-size: 1.5rem;
          color: white;
          font-weight: 400;
          display:block;
          text-align: center;
        }
        #whyus .logos{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #foursteps{
          background: #1859FF;
          padding: 4rem 0;
        }
        #foursteps h5{
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          color: #3FC5FF;
          margin-bottom: .5rem;
        }
        #foursteps h4{
          font-weight: bold;
          font-size: 1.5rem;
          line-height: 29px;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }
        #foursteps p{
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          color: #D6D6D6;
          margin-bottom: 2rem;
        }
        #foursteps .step img{ 
          width: 100%;
          margin-bottom: 1rem;
          box-shadow: 0px 12px 13px -6px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          object-fit: cover;
          height: 400px;
        }
        #foursteps .title{
          display: block;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          color: #E3E3E3;
        }
        #career-paths{
          //height: 100vh;
          padding: 4rem 0;
        }
        #career-paths h2{
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        .path .path-img{
          background: black;
          width: 100%;
          height: 160px;
          border-radius: 5px;
          margin-bottom: 1rem;
        }
        .path .title{
          font-family: Helvetica Neue;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          color: #697589;
          display: block;
        }
        .jumbo{
          height: 400px;
          background: linear-gradient(180deg, #38028F 0%, rgba(109, 20, 255, 0.69) 100%), url('https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
          background-repeat: no-repeat;
          background-size: cover;
        }
        .jumbo .container{
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 20px;
          grid-row-gap: 20px;
          align-items: center;
          justify-items: center;
          height: 100%;
          display: flex;
        }
        .left-info{
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
        }
        .left-info h1{
          font-family: Helvetica Neue;
          font-style: normal;
          font-weight: bold;
          font-size: 48px;
          line-height: 59px;
          color: #F0F0F0;
          margin-bottom: 32px;
        }
        .left-info p{
          font-family: Helvetica Neue;
          font-style: italic;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #E7E7E7;
          margin-bottom: 32px;
        }
        .left-info button{
          background: #292929;
          border: 1px solid #FFFFFF;
          box-sizing: border-box;
          border-radius: 5px;
          color: white;
          height: 48px;
          width: 170px;
        }

        .right-info img{
          max-width: 563px;
          width: 100%;
        }

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
