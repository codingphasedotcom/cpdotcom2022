import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import ReactGA from 'react-ga';
import getUrlParam from '../components/getParam';

export default function Home() {
  const [couponActive, setCouponActive] = useState(false);
  useEffect(() => {
    ReactGA.initialize('UA-37043736-10');
    ReactGA.addTrackers(
      [
        {
          trackingId: 'UA-37043736-10',
          gaOptions: {
            name: 'original'
          }
        },
        {
          trackingId: 'UA-37043736-16',
          gaOptions: { name: 'version4' }
        }
      ]
    );
    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search);
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
                <h1>Testing</h1>
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
