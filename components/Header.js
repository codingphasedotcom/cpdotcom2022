import Link from 'next/link'
import React, { useState } from 'react';

export default function Header(){
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
                    <Link href="/reviews">
                        <a>Reviews</a>
                    </Link>
                    <Link href="https://codingphase.teachable.com/courses">
                        <a>All Courses</a>
                    </Link>
                    <Link href="/timeline">
                        <a>Timeline</a>
                    </Link>
                    
                    <Link href="https://codingphase.teachable.com/courses/enrolled">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
                    {/* <i className={`fa fa-bars`} aria-hidden="true"></i> */}
                </span>
            </div>
        </header>
        </>
    )
}