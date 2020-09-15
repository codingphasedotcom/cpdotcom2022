import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'

export default function Home() {
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
