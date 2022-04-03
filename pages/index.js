import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Paths from '../components/Paths';
import MainLayout from '../components/layouts/MainLayout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ReactGA from 'react-ga';
import Pricing from '../components/Pricing';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import getUrlParam from '../components/getParam';
import ls from 'local-storage';

export default function Home() {
  const [couponActive, setCouponActive] = useState(false);
  const [affiliateActive, setAffiliateActive] = useState(false);
	const [introVidActive, setintroVidActive] = useState(false);
  useEffect(() => {
    ReactGA.initialize('UA-37043736-10');
     
     
    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
		document.addEventListener("DOMContentLoaded", function() {
			var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
		
			if ("IntersectionObserver" in window) {
				var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
					entries.forEach(function(video) {
						if (video.isIntersecting) {
							for (var source in video.target.children) {
								var videoSource = video.target.children[source];
								if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
									videoSource.src = videoSource.dataset.src;
								}
							}
		
							video.target.load();
							video.target.classList.remove("lazy");
							lazyVideoObserver.unobserve(video.target);
						}
					});
				});
		
				lazyVideos.forEach(function(lazyVideo) {
					lazyVideoObserver.observe(lazyVideo);
				});
			}
		});
  }, []);
  
  useEffect(() => {
    // handle coupon
    if(getUrlParam('coupon') != ''){
      setCouponActive({
        status: true,
        coupon: getUrlParam('coupon'),
        percent: parseInt(getUrlParam('coupon').substring(0, 2))
      })
       ls.set('coupon', getUrlParam('coupon'))
    }else{
      ls.remove('coupon');
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
    }else{
      // ls.remove('affcode');
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
				<title>CodingPhase </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<section className="hero-comp">
					<div className="hero-comp__content">
						
						<h2 className="hero-comp__title">
							Learning to Code has Never Been Easier
						</h2>
						<p className="hero-comp__paragraph">
							{`All the skills that employers expect from a developer in one place!`}
						</p>
						<a href="#pricing" className="hero-comp__button">
							Start Now
						</a>
						<LazyLoadImage
						wrapperClassName="lazywrap"
                      alt={'Front Code'}
                      effect="blur"
                      src="/img/frontcode.webp"
					  className='hero-comp__front-code' />
						
						
					</div>
				</section>
				
				<section className="nohobby-comp">
					<div className="container">
						<div className="row">
							<div className="col">
								<h2 className="nohobby-comp__title">We Don’t Teach <span className="nohobby-comp__coding">Coding</span> As A <span className="nohobby-comp__hobby"><div className="nohobby-comp__crossline"></div>Hobby</span></h2>
							<div className="nohobby-comp__sub">Learn Skills That Are Actually Worth Learning and Get Results </div>
							<p className="nohobby-comp__paragraph">What is the point of learning, and learning and learning without any monetary results? If you make no money then you have a hobby. We don’t teach our students to have a hobby we  teach you what’s going to get your results ASAP!</p>
							</div>

							<div className="row nohobby-comp__logos">
								<div className="col-md-6">
									<div className="row">
										<div className="col-md-6 nohobby-comp__logo">
										<LazyLoadImage
                      alt={'React Logo'}
                      effect="blur"
                      src="/img/react-logo.png" />
											
										</div>
										<div className="col-md-6 nohobby-comp__logo">
										<LazyLoadImage
                      alt={'Shopify Logo'}
                      effect="blur"
                      src="/img/shopify-logo.png" />
											
										</div>
										<div className="col-md-6 nohobby-comp__logo">
										<LazyLoadImage
                      alt={'Node JS Logo'}
                      effect="blur"
                      src="/img/node-logo.png" />
											
										</div>
										<div className="col-md-6 nohobby-comp__logo">
										<LazyLoadImage
                      alt={'Node JS Logo'}
                      effect="blur"
                      src="/img/php-logo.png" />
											
										</div>
									</div>
									
								</div>
								<div className="col-md-6 nohobby-comp__bag-girl">
								<LazyLoadImage
                      alt={'Node JS Logo'}
                      effect="blur"
                      src="/img/bag-girl.png" />
											
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<Paths />
				<section className="hof-comp">
					{/* <h2 className="hof-comp__title">Hall Of Fame</h2> */}
					<p className="hof-comp__sub">
						View some of our students that had success with CodingPhase
					</p>
					<div  className="container">
						<div className="row">
								<div className="col-md-6 center d-flex justify-content-center">
									<a href="/hall-of-fame" className="">
									<LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src="/img/hoflogo3.png" 
											className="hof-comp__logo"/>
									</a>
									
								</div>
								<div className="col-md-6 d-flex justify-content-center">
									<a href="/hall-of-fame" className="">
									<LazyLoadImage
                      alt={'Node JS Logo'}
                      effect="blur"
                      src="/img/hofstudents.png" />
										
									</a>
								
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
									<div className="respo-img">
									<LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src="/img/joe-highlight.png" 
											className="hof-comp__logo"/>
										
									</div>
									
								</div>
							</div>
							<div className="col-md-6">
								<h3>Experience</h3>
								<ul>
									<li>8 Years Of Professional Experience</li>
									<li>Self-taught so we know what it takes to learn at home</li>
									<li>
										Over $500,000/yr independent income from development and
										will teach you the strategies that has helped me achieve
										this.
									</li>
								</ul>
								<span className="total-students">65,000</span>
								<span className="sub-total">Students Worldwide</span>
								<span className="who-hired">WHO HIRED OUR STUDENTS</span>
								<div className="logos">
								<div className="respo-img">
								<LazyLoadImage
                      alt={'FedEx Logo'}
                      effect="blur"
                      src="/img/fedex.png" />
								</div>
								<div className="respo-img">
								<LazyLoadImage
                      alt={'NASA'}
                      effect="blur"
                      src="/img/nasa.png" />
								</div>
								
								<div className="respo-img">
									<LazyLoadImage
                      alt={'Paypal'}
                      effect="blur"
                      src="/img/paypal.png" />
									</div>
								
								</div>
							</div>
						</div>
					</div>
				</section>
				<Pricing
					location="home"
					couponActive={couponActive}
					affiliateActive={affiliateActive}
				/>
				<script
					async
					data-uid="2f89e66125"
					src="https://codingphase.ck.page/2f89e66125/index.js"></script>
			</MainLayout>
			<style jsx>{``}</style>

			<style global jsx>{``}</style>
		</>
	);
}
