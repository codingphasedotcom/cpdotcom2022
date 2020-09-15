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
                        <a>CodingPhases</a>
                    </Link>
                </div>
                <div id="header-menu" className={`${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    <Link href="https://student.codingphase.com/courses">
                        <a>All Courses</a>
                    </Link>
                    <Link href="/timeline">
                        <a>Timeline</a>
                    </Link>
                    <Link href="https://student.codingphase.com/courses/enrolled">
                        <a>My Courses</a>
                    </Link>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                    <Link href="/contact-us">
                        <a>Contact Us</a>
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