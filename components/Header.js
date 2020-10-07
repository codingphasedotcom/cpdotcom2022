import Link from 'next/link'
import React, { useState } from 'react';

export default function(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const clickedOpen = () => {
        setMobileMenuOpen(!mobileMenuOpen)
        console.log(mobileMenuOpen)
    }
    return(<>
        <header>
            <div className="container">
                <div id="logo">
                    <Link href="/">
                        <a>CodingPhase</a>
                    </Link>
                </div>
                <div id="header-menu" className={`${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <Link href=" https://codingphase.teachable.com/courses">
                        <a>All Courses</a>
                    </Link>
                    <Link href="/timeline">
                        <a>Timeline</a>
                    </Link>
                    <Link href=" https://codingphase.teachable.com/courses/enrolled">
                        <a>My Courses</a>
                    </Link>
                    <Link href="https://anchor.fm/back-at-it-again">
                        <a>Podcast</a>
                    </Link>
                    <Link href="/contact-us">
                        <a>Contact Us</a>
                    </Link>
                    <Link href="https://sso.teachable.com/secure/117955/users/sign_in">
                        <a>Account</a>
                    </Link>
                </div>
                <span className="mobile-icon" onClick={clickedOpen}>
                    <i className={`fa fa-bars`} aria-hidden="true"></i>
                </span>
            </div>
            <style jsx>{`
                
                
            `}</style>
        </header>
        </>
    )
}