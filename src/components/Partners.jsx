import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import logoDCC from '@/images/logos/dcc-logo.png'
import logoTBTL from '@/images/logos/tbtl-site-logo.svg'
import logoOxford from '@/images/logos/oxfordchenter-300x300-cropped.png'

export function Partners() {
  return (
    <section
      id="partners"
      aria-labelledby="secondary-features-title"
      className="pt-10 pb-14 sm:pb-20 sm:pt-12 lg:pb-12"
    >
      <Container className="pt-10 pb-16 text-center lg:pt-12">
        <div className="">


          <p className="mx-auto max-w-7xl text-left mb-5 font-display text-base text-slate-900">
            Web3 stakeholders are still struggling to efficently scale their projects and meet their goals and needs.
          </p>
          <p className="mx-auto max-w-7xl text-left mb-5 font-display text-base text-slate-900">
            On one hand, web3 projects are unable to meet development KPIs in a timely manner, due to insufficient qualified workforce.
          </p>
          <p className="mx-auto max-w-7xl text-left mb-5 font-display text-base text-slate-900">
            On another hand, web3 developers are not always hired  based on their specific skillset and fortés, leading to unuse expertise, and at times unfair compensation.
          </p>
          <p className="mx-auto max-w-7xl text-left mb-5 font-display text-base text-slate-900">
            Committable introduces its protocol to address such industry problems and beyond.
          </p>
          <p className="mx-auto max-w-7xl text-left mb-5 font-display text-base text-slate-900">
            Our core technology enables us to run in-depth analysis on developers contribution, leveraging their existing decentralized identity (DID), while securely and fairly generating their verifiable profiles, which can be used in the industry for better recognition, compensation and professional growth.
          </p>
          <p className="mx-auto max-w-7xl text-left mb-5 font-display text-base text-slate-900">
            Committable, is the first Web3 spin-off of the University College Oxford Blockchain Research Center, founded on the basis of innovative, world-class sicentific and technological research.
          </p>


          <ul className="mt-8 flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12">
            <li>
              <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
                <div className="mb-10 font-display text-xl tracking-tight text-slate-900 sm:text-2xl">
                  Our Ecosystem Partners
                </div>
                <li className="flex">
                  <Image
                    src={logoTBTL}
                    alt="TBTL"
                    layout="fixed"
                    unoptimized
                  />
                </li>
                <li className="flex">
                  <Image
                    src={logoOxford}
                    alt="Oxford Blockchain Research Centre"
                    layout="fixed"
                    unoptimized
                  />
                </li>
                <li className="flex">
                  <Image
                    src={logoDCC}
                    alt="DCC"
                    layout="fixed"
                    unoptimized
                  />
                </li>
              </ul>
            </li>
            {/* <li>
              <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
                
              </ul>
            </li> */}
          </ul>
        </div>
      </Container>
    </section>

  )
}
