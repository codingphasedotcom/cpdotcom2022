import Link from 'next/link'
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const clickedOpen = () => {
        setMobileMenuOpen(!mobileMenuOpen)
        console.log(mobileMenuOpen)
    }
    return(<>
        <section id="career-paths">
          <div className="container">
            <div className="row g-3">
              <h2>Career Paths</h2>
              <div className="col-md-3">
                <div className="path">
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
                <div className="path">
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
                <div className="path">
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
                <div className="path">
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
              <div className="offset-md-3 col-md-3">
                <div className="path">
                  <Link href="/career-path/shopify-developer">
                    <a>
                      <LazyLoadImage
                          alt={'image.alt'}
                          effect="blur"
                          src="/img/shopify-thumb.jpg" className="path-img"/>
                      <span className="title">Shopify Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="path">
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
            </div>
          </div>
        </section>
        </>
    )
}