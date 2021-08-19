import Link from 'next/link'
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Paths(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const clickedOpen = () => {
        setMobileMenuOpen(!mobileMenuOpen)
        console.log(mobileMenuOpen)
    }
    return(<>
        <section className="career-paths">
          <div className="container">
            <div className="row g-3">
              <div className="col-md-12">
              <h2 className="career-paths__title">You Choose Your Career Path</h2>
              <p className="career-paths__paragraph">Each path has all the courses you need to land the job in a easy way to follow.  No matter what level you are, you can jump in the timeline of your career path and follow along.</p>
              </div>
              <div className="col-md-3">
                <div className="career-paths__path">
                  <Link href="/career-path/html-email-developer">
                    <a>
                    <LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src="/img/html-email-thumb.jpg" className="path-img"/>
                      <span className="title">HTML Email Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="career-paths__path">
                  <Link href="/career-path/front-end-developer">
                    <a>
                    <LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src={'/img/frontend-thumb.jpg'} 
                      className="path-img"/>
                      {/* <img src="/img/frontend-thumb.jpg" className="path-img"/> */}
                      <span className="title">Front End Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="career-paths__path">
                  <Link href="/career-path/back-end-developer">
                    <a>
                    <LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src="/img/backend-thumb.jpg" className="path-img"/>
                      <span className="title">Back End Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="career-paths__path">
                  <Link href="/career-path/full-stack-developer">
                    <a>
                      <LazyLoadImage
                        alt={'image.alt'}
                        effect="blur"
                        src="/img/fullstack-thumb.jpg" className="path-img"/>
                      <span className="title">Full Stack Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="career-paths__path">
                  <Link href="/career-path/react-developer">
                    <a>
                      <LazyLoadImage
                          alt={'react developer career path'}
                          effect="blur"
                          src="/img/reactjs.jpg" className="path-img"/>
                      <span className="title">React Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="career-paths__path">
                  <Link href="/career-path/shopify-theme-developer">
                    <a>
                      <LazyLoadImage
                          alt={'image.alt'}
                          effect="blur"
                          src="/img/shopify-thumb.jpg" className="path-img"/>
                      <span className="title">Shopify Theme Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="career-paths__path">
                  <Link href="/career-path/shopify-app-developer">
                    <a>
                      <LazyLoadImage
                          alt={'image.alt'}
                          effect="blur"
                          src="/img/shopify-thumb.jpg" className="path-img"/>
                      <span className="title">Shopify App Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="career-paths__path">
                  <Link href="/career-path/entrepreneur-developer">
                    <a>
                      <LazyLoadImage
                          alt={'image.alt'}
                          effect="blur"
                          src="/img/entrepreneur.jpg" className="path-img"/>
                      <span className="title">Entrepreneur Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              
              {/* <div className="col-md-3">
                <div className="career-paths__path">
                  <Link href="/career-path/wordpress-developer">
                    <a>
                      <LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src="/img/wordpress-thumb.jpg" className="path-img"/>
                      <span className="title">Wordpress Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="career-paths__path">
                  <Link href="/career-path/wordpress-developer">
                    <a>
                      <LazyLoadImage
                      alt={'image.alt'}
                      effect="blur"
                      src="/img/niche-sites-thumb.jpg" className="path-img"/>
                      <span className="title">Niche Site</span>
                    </a>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        </>
    )
}