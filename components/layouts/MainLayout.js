import Header from '../Header';
import Link from 'next/link'

export default function MainLayout(props){
    return(<>
        <Header></Header>
        <section className="content-container">
            {props.children}
        </section>
        <footer>
          <div className="container">
            <div className="row g-3">
              <div className="col-md-3 ">
                <span className="title">ABOUT US</span>
                <p>We are here to help you on journey on becoming a developer. Helping you get from zero experience to a hired developer.</p>
              </div>
              <div className="col-md-3">
                <span className="title">IMPORTANT LINKS</span>
                <Link href="/timeline">
                  <a>Timeline</a>
                </Link>
                <Link href="/terms-of-service">
                  <a>Terms of Service</a>
                </Link>
                <Link href="/privacy-policy">
                  <a>Privacy Policy</a>
                </Link>
                <Link href="/refund-policy">
                  <a>Refund Policy</a>
                </Link>
                <Link href="/contact-us">
                  <a>Contact-Us</a>
                </Link>
              </div>
              <div className="col-md-3">
                <span className="title">AFFILIATE PROGRAM</span>
                <a href="#">Become an Affiliate</a>
                <a href="#">Affiliates Login</a>
              </div>
              <div className="col-md-3">
                <span className="title">CONTACT US</span>
                  <p>
                    Email: <a href="mailto:codingphase@gmail.com">codingphase@gmail.com</a>
                  </p>
              </div>
              
            </div>
          </div>
          
        </footer>
        <style jsx>{`
            .content-container{
                padding-top: 48px;
            }
            footer{
          background: #010117;
          padding: 2rem 0;
        }
        footer .title{
          color: #1859FF;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 1rem;
          display:block;
        }
        footer p{
          color: white;
          font-size: 14px;
        }
        footer a{
          color: white;
          font-size: 14px;
          display: block;
        }
        `
        }
        </style>
        </>)
}