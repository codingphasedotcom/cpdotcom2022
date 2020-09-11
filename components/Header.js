import Link from 'next/link'
export default function(){
    return(<>
        <header>
            <div className="container">
                <div id="logo">
                    <Link href="/">
                        <a>CodingPhases</a>
                    </Link>
                </div>
                <div id="header-menu">
                    <Link href="/joe">
                        <a>All Courses</a>
                    </Link>
                    <Link href="/joe">
                        <a>Timeline</a>
                    </Link>
                    <Link href="/joe">
                        <a>Tutorials</a>
                    </Link>
                    <Link href="/joe">
                        <a>Blog</a>
                    </Link>
                    <Link href="/joe">
                        <a>Contact Us</a>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                a{
                    text-decoration: none;
                }
                
                header{
                    box-shadow: 0px 4px 18px -4px rgba(0, 0, 0, 0.25);
                    width: 100%;
                    position: fixed;
                    background: white;
                    z-index: 10;
                }
                header .container{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: row;
                    height: 48px;
                }
                #logo{
                    font-family: Helvetica Neue;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 1rem;
                    line-height: 24px;
                    color: #1859FF;
                }
                #header-menu{
                    font-family: Helvetica Neue;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 19px;
                    color: #000000;
                }
                #header-menu a{
                    margin-right: 15px;
                    text-decoration: none;
                }
                
            `}</style>
        </header>
        </>
    )
}