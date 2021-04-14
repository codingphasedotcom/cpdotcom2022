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
     
        if (typeof window !== 'undefined') {
          ReactGA.pageview(window.location.pathname + window.location.search);
        }
      });
      useEffect(() => {
        if(getUrlParam('coupon') != ''){
          
          setCouponActive({
            status: true,
            coupon: getUrlParam('coupon'),
            percent: parseInt(getUrlParam('coupon').substring(0, 2))
          })
          console.log(couponActive);
        }
      }, []);
  return (
    <>
      <Head>
        <title>Privacy Policy - CodingPhase.com </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {/* <section className="page">
            <div className="container">
                <h1>Privacy Policy</h1>

<span style="letter-spacing: 0px;">This Privacy Policy governs the manner in which the website collects, uses, maintains and discloses information collected from users (each, a ‘User’) of the website (‘Site’). This privacy policy applies to the Site and all products and services offered by company.</span>
<h2><span id="Personal_identification_information"><b>Personal identification information</b></span></h2>
We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, email address. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
<h2><span id="Non-personal_identification_information"><b>Non-personal identification information</b></span></h2>
We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
<h2><span id="Web_browser_cookies"><b>Web browser cookies</b></span></h2>
Our Site may use ‘cookies’ to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
<h2><span id="How_we_use_collected_information"><b>How we use collected information</b></span></h2>
Company may collect and use Users personal information for the following purposes:
<ul><li><i>To improve customer service</i>
Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
 	<li><i>To personalize user experience</i>
We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
 	<li><i>To send periodic emails</i>
We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.</li>
</ul><h2><span id="How_we_protect_your_information"><b>How we protect your information</b></span></h2>
We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
<h2><span id="Sharing_your_personal_information"><b>Sharing your personal information</b></span></h2>
We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
<h2><span id="Third_party_websites"><b>Third party websites</b></span></h2>
Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies.
<h2><span id="Changes_to_this_privacy_policy"><b>Changes to this privacy policy</b></span></h2>
Company has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
<h2><span id="Your_acceptance_of_these_terms"><b>Your acceptance of these terms</b></span></h2>
By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</div>
        </section> */}
      </MainLayout>
      <style jsx>{`
        
      `}
      </style>
      
      <style global jsx>{`
        
      `}</style>
    </>
  )
}
