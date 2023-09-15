import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features-purple.webp'
import screenshotConnect from '@/images/screenshots/connect.png'
import screenshotAnalyze from '@/images/screenshots/analyze.png'
import screenshotProfile from '@/images/screenshots/profile.png'
import screenshotMarket from '@/images/screenshots/market.png'

const features = [
  {
    title: 'Connect your ID',
    description:
      "Login with your GitHub identity and your web3.0 wallet.",
    image: screenshotConnect,
  },
  {
    title: 'Analyze your code',
    description:
      "All of your commits are analyzed by our trust analysis kit.",
    image: screenshotAnalyze,
  },
  {
    title: 'Share your profile',
    description:
      "Share your verified profile, which includes your contribution history, your skillset, your interests, and more.",
    image: screenshotProfile,
  },
  {
    title: 'Collaborate on projects',
    description:
      'Find a trusted collaborator for an existing or new project, all in one place.',
    image: screenshotMarket,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-white pt-20 pb-28 sm:py-32"
    >
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2245}
          height={1636}
          layout="fixed"
          unoptimized
        />
      </div> */}
      <Container className="relative">
        <div className="pt-10 pb-16 text-left lg:pt-12 flex flex-wrap justify-between">
          <div className="w-full text-4xl lg:w-4/12">
            Our Core Functionalities
          </div>
          <div className="w-full lg:w-8/12">
            <p className="mx-auto max-w-7xl mb-5 font-display text-base text-slate-900">
              Our current protocol features four initial core functions on the Sepolia testnet, to allow developers and other community stakeholders to showcase or support open-source contributions.

              These functions, connecting via GitHub, analyzing via minting a COMMIT, collaborating via sponsoring a pull-request and sharing a profile, will serve as a pillar to our future tokeneconomics.
            </p>
          </div>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0 text-left"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        {
                          'bg-white lg:bg-amber-600/10 lg:ring-1 lg:ring-inset lg:ring-white/10':
                            selectedIndex === featureIndex,
                          'hover:bg-white/10 lg:hover:bg-white/5':
                            selectedIndex !== featureIndex,
                        }
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            {
                              'text-amber-600 lg:text-black':
                                selectedIndex === featureIndex,
                              'text-amber-600 hover:text-black lg:text-black':
                                selectedIndex !== featureIndex,
                            }
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx('mt-2 hidden text-sm lg:block', {
                          'text-black': selectedIndex === featureIndex,
                          'text-amber-600 group-hover:text-black':
                            selectedIndex !== featureIndex,
                        })}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-black sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-amber-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        src={feature.image}
                        alt=""
                        layout="fill"
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
