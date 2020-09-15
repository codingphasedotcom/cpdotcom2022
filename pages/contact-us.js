import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import Paths from '../components/Paths';

export default function Home() {
  return (
    <>
      <Head>
        <title>CodingPhase </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <section id="contact-us-page">
          <div className="container">
            <h1>Contact-Us</h1>
          <p><img className="lazy-loaded" loading="lazy" src="/img/contact-us.png" data-lazy-type="image"/></p>
  <h3>Get in Touch</h3>
  <h3>For problems with payment, want a refund, or any other question.</h3>
  <p>44 Waterbury Rd Suite 2D<br/>
  Prospect, CT 06712<br/>
  <a href="mailto:info@example.com">Email us on:<br/>
  codingphase@gmail.com</a></p>
  <h3>Drop us a line</h3>
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
