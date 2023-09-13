import Head from 'next/head'
import React from 'react'
import { Technology } from '@/components/Technology'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Partnerships } from '@/components/Partnerships'
import EventsList from '@/components/Events'


export default function Home() {
  return (
    <>
      <Head>
        <title>Committable -  Decentralized identity for developers</title>
        <meta name="description" content="The decentralized identity for developers: contribute to Web3 with verifiable profiles." />
      </Head>
      <Header />
      <main>
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
