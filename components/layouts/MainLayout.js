import Header from '../Header';

export default function(props){
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
                <a href="#">Timeline</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Refund Policy</a>
                <a href="#">Contact Us</a>
              </div>
              <div className="col-md-3">
                <span className="title">AFFILIATE PROGRAM</span>
                <a href="#">Become an Affiliate</a>
                <a href="#">Affiliates Login</a>
              </div>
              <div className="col-md-3">
                <span className="title">CONTACT US</span>
                  <p>
                    Office Address<br/>
                    44 Waterbury RD Suite 2D Prospect CT 06712
                    <br/>
                    Email: codingphase@gmail.com
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