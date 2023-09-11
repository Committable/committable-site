import { Fragment } from 'react'
import Link from 'next/link'

// Header component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
// import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none" strokeWidth={2} strokeLinecap="round">
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-150 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel as="ul" className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5">
                {/* <li>
                  <Link href="#features">
                    <a className="block w-full" onClick={() => close()}>
                      Features
                    </a>
                  </Link>
                </li> */}
                <li>
                  <Link href="#technology">
                    <a className="block w-full" onClick={() => close()}>
                      Technology
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#partners">
                    <a className="block w-full" onClick={() => close()}>
                    Partnership
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#blogs">
                    <a className="block w-full" onClick={() => close()}>
                      Blogs
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#events">
                    <a className="block w-full" onClick={() => close()}>
                      Events
                    </a>
                  </Link>
                </li>                
                <li>
                  <Link href="https://docs.committable.io">
                    <a className="block w-full" onClick={() => close()}>
                      Documentation
                    </a>
                  </Link>
                </li>
                
                {/* <SignedOut>
                  <li className="border-t border-slate-300/40 pt-4">
                    <Link href="/sign-in">
                      <a className="block w-full">Sign in</a>
                    </Link>
                  </li>
                </SignedOut>
                <SignedIn>
                  <UserButton userProfileURL="/user" afterSignOutAll="/" afterSignOutOneUrl="/" />
                </SignedIn> */}
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export function Header() {
  return (
    <header className="fixed top-0 z-10 w-full bg-white">
      <Container>
        <nav className="relative z-50 text-base">
          <ul className="flex items-center">
            <li>
              <Link href="#">
                <a>
                  <span className="sr-only">Home</span>
                  <Logo className="h-10 w-auto" />
                </a>
              </Link>
            </li>
            <li className="ml-12 hidden md:block">
              {/* <Link href="#features">
                <a className="rounded-lg py-1 px-2 font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900">Features</a>
              </Link> */}
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#technology">
                <a className="rounded-lg py-1 px-2 font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900">Technology</a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#partners">
                <a className="rounded-lg py-1 px-2 font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900">Partnership</a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#blogs">
                <a className="rounded-lg py-1 px-2 font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900">Blogs</a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#events">
                <a className="rounded-lg py-1 px-2 font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900">Events</a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="https://docs.committable.io">
                <a className="rounded-lg py-1 px-2 font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900">Documentation</a>
              </Link>
            </li>
            {/* <SignedOut>
              <li className="border-t border-slate-300/40 pt-4">
                <Link href="/sign-in">
                  <a className="block w-full">Sign in</a>
                </Link>
              </li>
            </SignedOut> */}
            {/* <SignedIn>
              <UserButton userProfileURL="/user" afterSignOutAll="/" afterSignOutOneUrl="/" />
            </SignedIn> */}
            <li className="ml-auto md:ml-8 font-bold">
              <ButtonLink href="https://app-test.committable.io/gallery" color="blue">
                <span>
                  Launch<span className="hidden lg:inline"> App</span>
                </span>
              </ButtonLink>
            </li>
            <li className="ml-5 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
