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
                
                
            `}</style>
        </header>
        </>
    )
}