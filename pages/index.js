import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>CodingPhase </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <MainLayout>
        <section className="jumbo">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-middle">
                <div className="left-info">
                  <h1>Learn The Skills
      You Need To Become
      A Profitable Developer</h1>
                  <p>We are the only platform that goes beyond just teaching you how to get a job 
      by focusing on skills that are in high deman but also allow you to make your own
      income independently online.</p>
                  <button className="start-btn">
                    Start Now
                  </button>
                </div>
              </div>
              <div className="col-md-6 align-middle">
                <div className="right-info">
                  <img src="/img/money-vector.png"/>
                  
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <section id="career-paths">
          <div className="container">
            <div className="row g-3">
              <h2>Career Paths</h2>
              <div className="col-md-3">
                <div className="path">
                  <Link href="/career-path/html-email-developer">
                    <a>
                      <img src="/img/html-email-thumb.jpg" className="path-img"/>
                      <span className="title">HTML Email Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="path">
                  <Link href="/career-path/front-end-developer">
                    <a>
                      <img src="/img/frontend-thumb.jpg" className="path-img"/>
                      <span className="title">Front End Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="path">
                  <Link href="/career-path/back-end-developer">
                    <a>
                      <img src="/img/backend-thumb.jpg" className="path-img"/>
                      <span className="title">Back End Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="path">
                  <Link href="/career-path/full-stack-developer">
                    <a>
                      <img src="/img/fullstack-thumb.jpg" className="path-img"/>
                      <span className="title">Full Stack Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="offset-md-3 col-md-3">
                <div className="path">
                  <Link href="/career-path/shopify-developer">
                    <a>
                      <img src="/img/shopify-thumb.jpg" className="path-img"/>
                      <span className="title">Shopify Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="path">
                  <Link href="/career-path/wordpress-developer">
                    <a>
                      <img src="/img/wordpress-thumb.jpg" className="path-img"/>
                      <span className="title">Wordpress Developer</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="foursteps">
          <div className="container">
            <h5>How We Teach</h5>
            <h4>The 4 Steps to Make You Succeed!</h4>
            <p>Discover How Hundreds of Students Have Learned Enough Coding Skills to Build Impressive Programs, Quit Their Dead- end Jobs, Spark High-Paying Tech Careers, and Double Their Income…</p>
            <div className="row g-3">
              <div className="col-md-3">
                <div className="step">
                  <img src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="step-img" />
                  <span className="title">Build Real Projects</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="step">
                  <img src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="step-img" />
                  <span className="title">Learn How To Make Income While You Continue To Learn</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="step">
                  <img src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="step-img" />
                  <span className="title">Build A Solid Portfolio Like A Pro</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="step">
                  <img src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="step-img" />
                  <span className="title">Land The Dream Job and Have Side Income!</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="whyus">
          <div className="container">
            <h2>Why Choose Us?</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="image-highlight">
                  <div className="gradient-bg"></div>
                  <img src="/img/joe-highlight.png"/>
                </div>
              </div>
              <div className="col-md-6">
                <h3>Experience</h3>
                <ul>
                  <li>8 Years Of Professional Experience</li>
                  <li>Self-taught so we know what it takes to learn at home</li>
                  <li>Over $500,000/yr independent income from development and will teach you the strategies that has helped me achieve this.</li>
                </ul>
                <span className="total-students">65,000</span>
                <span className="sub-total">Students Worldwide</span>
                <span className="who-hired">WHO HIRED OUR STUDENTS</span>
                <div className="logos">
                  <img src="/img/nasa.png"/>
                  <img src="/img/fedex.png"/>
                  <img src="/img/paypal.png"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing">
          <div className="container">
            <h2>PRICING</h2>
            <p>Save money by signing up to a subscription</p>
            <div className="prices">
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
                <button>Sign Up</button>
              </div>
              <div className="tier">
                <span className="title">Monthly</span>
                <span className="price">$20</span>
                <span className="info">
                ✔️ Free courses & Tutorials<br/>
                ✔️ Premium Programming Courses<br/>
                ✔️ ASAP Developers Group<br/>
                ❌ Career Bundles<br/>
                ❌ Make Money Online Courses<br/>
                </span>
                <button>Sign Up</button>
              </div>
              <div className="tier filled">
                <span className="title">Yearly</span>
                <span className="price">$397🔥</span>
                <span className="info">
                ✔️ Free courses & Tutorials<br/>
                ✔️ Premium Programming Courses<br/>
                ✔️ ASAP Developers Group<br/>
                ✔️ Career Bundles<br/>
                ✔️ Make Money Online Courses<br/>
                </span>
                <button>Sign Up</button>
              </div>
            </div>
            <p>Don’t want to subscribe... Just buy the <a href="#">courses</a> you need</p>
          </div>
        </section>
        
      </MainLayout>
      <style jsx>{`
        
        
        #whyus{
          background: #010117;
          padding: 4rem 0;
          
        }
        #whyus h2{
          font-size: 72px;
          background-size: 100%;
          text-transform: uppercase;
          text-align: center;
          border-image-source: linear-gradient(34deg, rgba(255,3,3,1) 0%, rgba(128,0,255,1) 61%);
          /* Warning: no fallback */
          background: linear-gradient(34deg, rgba(255,3,3,1) 0%, rgba(128,0,255,1) 61%);
          -webkit-background-clip: text;
          -webkit-text-stroke: 4px transparent;
          color: #010117; /* same as background */
          stroke-width: 2px;
          margin-bottom: 4rem;
        }
        #whyus .image-highlight {
          position: relative;
          width: 362px;
          height: 480px;
          margin-top: 4rem;
        }
        #whyus .image-highlight .gradient-bg{
          width: 362px;
          height: 480px;
          border: 16px solid;
          border-image-source: linear-gradient(34deg, rgba(255,3,3,1) 0%, rgba(128,0,255,1) 61%);
          border-image-slice: 1;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }
        #whyus .image-highlight img{
          width: 362px;
          height: 480px;
          object-fit: cover;
          position: absolute;
          top: -3rem;
          left: 3rem;
          z-index: 2;
        }
        #whyus h3{
          color: white;
          margin-bottom: 1rem;
        }
        #whyus ul{
          list-style: disc;
          color: white;
          font-size: 1rem;
          margin-bottom: 3rem;
        }
        #whyus li{
          line-height: 24px;
          margin-bottom: 1rem;
        }
        #whyus .total-students{
          font-size: 4rem;
          color: white;
          font-weight: 700;
          display:block;
          text-align: center;
          line-height: 1;
        }
        #whyus .sub-total{
          font-size: 1rem;
          color: white;
          font-weight: 300;
          display:block;
          text-align: center;
          margin-bottom: 3rem;
        }
        #whyus .who-hired{
          font-size: 1.5rem;
          color: white;
          font-weight: 400;
          display:block;
          text-align: center;
        }
        #whyus .logos{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #foursteps{
          background: #1859FF;
          padding: 4rem 0;
        }
        #foursteps h5{
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          color: #3FC5FF;
          margin-bottom: .5rem;
        }
        #foursteps h4{
          font-weight: bold;
          font-size: 1.5rem;
          line-height: 29px;
          color: #FFFFFF;
          margin-bottom: 1rem;
        }
        #foursteps p{
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          color: #D6D6D6;
          margin-bottom: 2rem;
        }
        #foursteps .step img{ 
          width: 100%;
          margin-bottom: 1rem;
          box-shadow: 0px 12px 13px -6px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          object-fit: cover;
          height: 400px;
        }
        #foursteps .title{
          display: block;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          color: #E3E3E3;
        }
        #career-paths{
          //height: 100vh;
          padding: 4rem 0;
        }
        #career-paths h2{
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        .path .path-img{
          background: black;
          width: 100%;
          height: 160px;
          border-radius: 5px;
          margin-bottom: 1rem;
          object-fit: cover;
          box-shadow: 0px 12px 13px -6px rgba(0, 0, 0, 0.25);
        }
        .path .title{
          font-family: Helvetica Neue;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
          color: #697589;
          display: block;
        }
        .jumbo{
          height: calc(100vh - 50px);
          background: linear-gradient(180deg, #38028F 0%, rgba(109, 20, 255, 0.69) 100%), url('https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
          background-repeat: no-repeat;
          background-size: cover;
        }
        .jumbo .container{
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 20px;
          grid-row-gap: 20px;
          align-items: center;
          justify-items: center;
          height: 100%;
          display: flex;
        }
        .left-info{
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
        }
        .left-info h1{
          font-family: Helvetica Neue;
          font-style: normal;
          font-weight: bold;
          font-size: 48px;
          line-height: 59px;
          color: #F0F0F0;
          margin-bottom: 32px;
        }
        .left-info p{
          font-family: Helvetica Neue;
          font-style: italic;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #E7E7E7;
          margin-bottom: 32px;
        }
        .left-info button{
          background: #292929;
          border: 1px solid #FFFFFF;
          box-sizing: border-box;
          border-radius: 5px;
          color: white;
          height: 48px;
          width: 170px;
        }

        .right-info img{
          max-width: 563px;
          width: 100%;
        }

      `}
      </style>
      
      <style global jsx>{`
        a{
          text-decoration: none;
        }
        a:hover{
          color: red !important;
        }
        #pricing {
          padding: 4rem 0;
        }
        #pricing h2{
          font-style: normal;
          font-weight: bold;
          font-size: 32px;
          line-height: 123.1%;
          color: #000000;
          text-align: center;
        }
        #pricing p{
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 123.1%;
          color: #697589;
          text-align: center;
          margin-bottom: 2rem;
        }
        #pricing .prices{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          margin-bottom: 3rem;
        }
        
        #pricing .prices .tier{
          padding: 2rem 1rem;
          background: #FFFFFF;
          border: 1px solid #1859FF;
          box-sizing: border-box;
          box-shadow: 0px 12px 13px -6px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          width: 270px;
          height: 496px;
          display: flex;
          flex-direction: column;
          margin-right: 1rem;
        }
        #pricing .prices .tier.filled{
          background: #1859FF;
          color: white;
        }
        #pricing .prices .tier.filled .title{
          color: white;
        }
        #pricing .prices .tier.filled .price{
          color: white;
        }
        #pricing .prices .tier.filled button{
          background: white;
          color: #1859FF;
        }
        #pricing .prices .tier:nth-child(3){
          margin-right: 0;
        }
        #pricing .title{
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 123.1%;
          color: #000000;
          align-self: center;
        }
        #pricing .price{
          font-style: normal;
          font-weight: bold;
          font-size: 48px;
          line-height: 123.1%;
          align-self: center;
          color: #000000;
          margin-bottom: 2rem;
        }
        #pricing .info{
          font-family: Helvetica Neue;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 32px;
          margin-bottom: 4rem;
        }
        #pricing button{
          width: 208px;
          height: 48px;
          left: 560px;
          top: 3936px;
          border: none;
          background: #1859FF;
          box-shadow: 0px 12px 13px -6px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          color: white;
          align-self: center;
        }
        @media screen and (min-width: 0px) and (max-width: 600px){
          #pricing .prices .tier{
            margin: 0 0 1rem 0;
          }
          #pricing .prices {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  )
}
