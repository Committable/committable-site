import 'focus-visible'
import Link from 'next/link'
import '@/styles/tailwind.css'
// import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import Home from '.'

export default function App({ Component, pageProps }) {
  return (
    <Home />
    // <ClerkProvider>
    //   <SignedIn>
    //     <Component {...pageProps} />
    //   </SignedIn>
    //   <SignedOut>
    //     <Component {...pageProps} />
    //   </SignedOut>
    // </ClerkProvider>
  )
}
