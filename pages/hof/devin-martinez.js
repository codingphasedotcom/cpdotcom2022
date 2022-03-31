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
        if (getUrlParam('coupon') != '') {
            setCouponActive({
                status: true,
                coupon: getUrlParam('coupon'),
                percent: parseInt(getUrlParam('coupon').substring(0, 2))
            })
            ls.set('coupon', getUrlParam('coupon'))
        }
        if (ls('coupon') != null) {
            setCouponActive({
                status: true,
                coupon: ls('coupon'),
                percent: parseInt(ls('coupon').substring(0, 2))
            })
        }
        //handle affiliate
        if (getUrlParam('affcode') != '') {
            setAffiliateActive({
                status: true,
                affcode: getUrlParam('affcode')
            })
            ls.set('affcode', getUrlParam('affcode'))
        }
        if (ls('affcode') != null) {
            setAffiliateActive({
                status: true,
                affcode: ls('affcode')
            })
        }
    }, []);

    return (
        <>
            <Head>
                <title>CodingPhase | Devin Martinez Review</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <div className="hof-page-user">
                    <section className="hof-page-user__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="d-flex justify-content-center">
                                        <a href="/hof">
                                            <LazyLoadImage
                                                alt={'Hall Of Fame Logo'}
                                                effect="blur"
                                                src="/img/hoflogo3.png"
                                                className="hof-page-user__logo" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="offset-md-1 col-md-4">
                                    <div className="hof-page-user__user">
                                        <LazyLoadImage
                                            alt={'Devin Martinez'}
                                            effect="blur"
                                            src="/img/hof/devin-martinez.webp"
                                            className="hof-page-user__user-img" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="hof-page-user__info">
                                        <span className="hof-page-user__name">Devin Martinez</span>
                                        <span className="hof-page-user__career">Email Developer</span>
                                        <p className="hof-page-user__testimonial">
                                            I’ve been learning on codingphase for about 6 months now. Didn’t really get focused until about 2 months ago when I decided on HTML email development as my first job.
                                            It was definitely a lot of work but I did it man! I accepted a job yesterday from a smaller travel company as their “Email marketing specialist” for $72k/year. This is life-changing for me.</p>
                                        <p className="hof-page-user__testimonial">
                                            For some context, my job I just left was as a pellet stove technician. I was literally cleaning stoves all day lol I hated it. And I was making $23/hour.
                                            So thanks to you, I went from making around $47k to $72k in 2 MONTHS. And I plan to get growing very quickly from here.
                                        </p>
                                        <p className="hof-page-user__testimonial">
                                            Just having these opportunities ahead of me is so damn exciting man. So I just want to thank you. You sped up what would’ve probably taken me a year or two. This is huge for me, my girlfriend, and my family. I can finally enjoy life the way I’ve wanted to, without stressing bills and all that.
                                            So again, thank you for all your help. I hope my story can motivate others like others stories have kept me motivated on my journey.
                                        </p>

                                        <div className="relevant-links">
                                            <span className="relevant-links__title">Check Out His Links</span>
                                            <ul>
                                                {/* <li><a href="https://www.linkedin.com/in/devin-martinez-154403199" className="relevant-links__link">Linkedin</a>
                                                </li> */}

                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </MainLayout>

        </>
    )
}
