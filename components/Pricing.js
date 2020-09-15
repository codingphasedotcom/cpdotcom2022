import Link from 'next/link'
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FirstTier = (props)=>{
    console.log(props)
    if (props.location == "home") {
        return(
            <>
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
            </>
        )
    } else {
        return(
            <>
                <div className="tier">
                    <span className="title">Buy Career Bundle</span>
                    <span className="price">$300</span>
                    <span className="info">
                    ✔️ All Courses In This Career Path<br/>
                    ✔️ Including New Courses<br/>
                    ✔️ All Free Updates<br/>
                    ✔️ ASAP Developers Group<br/><br/>
                    </span>
                    <Link  href={`${props.bundleURL}?utm_source=codingphase.com&utm_medium=homepage&utm_campaign=pricing%20sign%20up`}>
                        <a className="button">Sign Up</a>
                    </Link>
                  </div>
            </>
        )
    }
}

export default function(props){
    
    return(<>
        <section id="pricing">
          <div className="container">
            <h2>PRICING</h2>
            <p>Save money by signing up to a subscription</p>
            <div className="prices">
              <FirstTier {...props} />
              <div className="tier">
                <span className="title">Monthly</span>
                <span className="price">$20</span>
                <span className="info">
                ✔️ Free courses & Tutorials<br/>
                ✔️ Premium Programming Courses<br/>
                ✔️ ASAP Developers Group<br/>
                ❌ All Career Bundles<br/>
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
                ✔️ All Career Bundles<br/>
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
        </>
    )
}