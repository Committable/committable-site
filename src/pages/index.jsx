import Head from 'next/head'
// import { SignedIn, SignedOut } from '@clerk/nextjs'
// import { withServerSideAuth } from '@clerk/nextjs/ssr'
import React from 'react'
import Link from 'next/link'
import { Technology } from '@/components/Technology'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Partners } from '@/components/Partners'
import { Partnerships } from '@/components/Partnerships'
import EventsList from '@/components/Events'

// export const getServerSideProps = withServerSideAuth()

const SignupLink = () => (
  <Link href="/sign-up">
    <a className="">
      <img alt="Sign up" src="/icons/user-plus.svg" />
      <div>
        <h3>Sign up for an account</h3>
        <p>Sign up and sign in to explore all the features provided by Clerk out-of-the-box</p>
      </div>
      <div className="">
        <img src="/icons/arrow-right.svg" />
      </div>
    </a>
  </Link>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Committable -  Decentralized identity for developers</title>
        <meta name="description" content="The decentralized identity for developers: contribute to Web3 with verifiable profiles." />
      </Head>
      <Header />
      {/* <SignedIn>
        <p className="bg-red-400 p-8">You have successfully signed in</p>
      </SignedIn>
      <SignedOut>
        <p className="bg-red-400 p-8">
          Sign up for an account to get started <SignupLink />
        </p>
      </SignedOut> */}
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
