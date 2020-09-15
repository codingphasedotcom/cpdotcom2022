import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import ReactGA from 'react-ga';

export default function Home() {
    useEffect(() => {
        ReactGA.initialize('UA-37043736-10');
        if (typeof window !== 'undefined') {
        //   ReactGA.pageview(window.location.pathname + window.location.search);
        }
      });
  return (
    <>
      <Head>
        <title>CodingPhase </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section className="page">
            <div className="container">
                <h1>Refund Policy</h1>

<h1>Refund Policy</h1>
<h2>Refund policy on Course Purchases</h2>
<p>We’re so convinced you’ll absolutely love our services, that we’re willing to offer a 7 day risk-free money back guarantee. If you are not satisfied with the service for any reason you can get a refund within 7 days of making a purchase.</p>
<h2>Refund policy on Subscription</h2>
<p>When it comes to subscriptions either monthly or yearly that we’re willing to offer a 7 day risk-free money back guarantee on your first payment. Anything beyond the first payment is no longer covered to a refund. Remember this is a subscription you will get charged on a monthly basis or a yearly basis. It’s the customers responsibility to cancel their membership before getting charged again you can either contact us at <strong>codingphase@gmail.com</strong> and we will cancel your subscription or go through your account settings and cancel your subscription manually.</p>

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

