import Head from 'next/head'
import Link from 'next/link';
import Paths from '../components/Paths';
import MainLayout from '../components/layouts/MainLayout';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Home() {
  return (
    <>
      <Head>
        <title>CodingPhase </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
      </Head>
      <MainLayout>
        <section className="jumbo">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-middle">
                <div className="left-info">
                  <h1>Learn The Skills
      You Need To Become
      A Profitable Developer</h1>
                  <p>We are the only platform that goes beyond just teaching you how to get a job 
      by focusing on skills that are in high deman but also allow you to make your own
      income independently online.</p>
                  <button className="start-btn">
                    Start Now
                  </button>
                </div>
              </div>
              <div className="col-md-6 align-middle">
                <div className="right-info">
                  <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="/img/money-vector.png"/>
                  
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <Paths/>
        <section id="foursteps">
          <div className="container">
            <h5>How We Teach</h5>
            <h4>The 4 Steps to Make You Succeed!</h4>
            <p>Discover How Hundreds of Students Have Learned Enough Coding Skills to Build Impressive Programs, Quit Their Dead- end Jobs, Spark High-Paying Tech Careers, and Double Their Income…</p>
            <div className="row g-3">
              <div className="col-md-3">
                <div className="step">
                  <LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="step-img"/>
                  <span className="title">Build Real Projects</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="step">
                  <LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="step-img" className="step-img"/>
                  <span className="title">Learn How To Make Income While You Continue To Learn</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="step">
                  <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="step-img"/>
                  
                  <span className="title">Build A Solid Portfolio Like A Pro</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="step">
                  <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="step-img"/>
                  <span className="title">Land The Dream Job and Have Side Income!</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="whyus">
          <div className="container">
            <h2>Why Choose Us?</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="image-highlight">
                  <div className="gradient-bg"></div>
                  <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="/img/joe-highlight.png"/>
                </div>
              </div>
              <div className="col-md-6">
                <h3>Experience</h3>
                <ul>
                  <li>8 Years Of Professional Experience</li>
                  <li>Self-taught so we know what it takes to learn at home</li>
                  <li>Over $500,000/yr independent income from development and will teach you the strategies that has helped me achieve this.</li>
                </ul>
                <span className="total-students">65,000</span>
                <span className="sub-total">Students Worldwide</span>
                <span className="who-hired">WHO HIRED OUR STUDENTS</span>
                <div className="logos">
                
                <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="/img/fedex.png"/>
                    <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="/img/nasa.png"/>
                <LazyLoadImage
                    alt={'image.alt'}
                    effect="blur"
                    src="/img/paypal.png"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing">
          <div className="container">
            <h2>PRICING</h2>
            <p>Save money by signing up to a subscription</p>
            <div className="prices">
              <div className="tier">
                <span className="title">Basic</span>
                <span className="price">FREE</span>
                <span className="info">
                ✔️ Free courses & Tutorials<br/>
                ❌ Premium Programming Courses<br/>
                ❌ ASAP Developers Group<br/>
                ❌ Career Bundles<br/>
                ❌ Make Money Online Courses<br/>
                </span>
                <Link  href="https://student.codingphase.com/p/codingphase-free-membership?utm_source=codingphase.com&utm_medium=homepage&utm_campaign=pricing%20sign%20up">
                    <a className="button">Sign Up</a>
                </Link>
              </div>
              <div className="tier">
                <span className="title">Monthly</span>
                <span className="price">$20</span>
                <span className="info">
                ✔️ Free courses & Tutorials<br/>
                ✔️ Premium Programming Courses<br/>
                ✔️ ASAP Developers Group<br/>
                ❌ Career Bundles<br/>
                ❌ Make Money Online Courses<br/>
                </span>
                <Link href="https://student.codingphase.com/p/all-courses-subscription?utm_source=codingphase.com&utm_medium=homepage&utm_campaign=pricing%20sign%20up">
                    <a className="button">Sign Up</a>
                </Link>
              </div>
              <div className="tier filled">
                <span className="title">Yearly</span>
                <span className="price">$397🔥</span>
                <span className="info">
                ✔️ Free courses & Tutorials<br/>
                ✔️ Premium Programming Courses<br/>
                ✔️ ASAP Developers Group<br/>
                ✔️ Career Bundles<br/>
                ✔️ Make Money Online Courses<br/>
                </span>
                <Link href="https://student.codingphase.com/p/yearly-plus-membership?utm_source=codingphase.com&utm_medium=homepage&utm_campaign=pricing%20sign%20up">
                    <a className="button">Sign Up</a>
                </Link>
              </div>
            </div>
            <p>Don’t want to subscribe... Just buy the <a href="#">courses</a> you need</p>
          </div>
        </section>
        
      </MainLayout>
      <style jsx>{`
        
        
        

      `}
      </style>
      
      <style global jsx>{`
        
      `}</style>
    </>
  )
}
