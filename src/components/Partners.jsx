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
          <h2 className="mb-10 font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Our Partners
          </h2>

          <p className="mx-auto max-w-7xl text-left mb-5 font-display text-base text-slate-900">
            Committable, is the first Web3 spin-off of the University College Oxford Blockchain Research Center, officially launched in 2022, with related research and events begining from the end of 2021.
          </p>
          <p className="mx-auto max-w-7xl text-left mb-5 font-display text-base text-slate-900">
            Committable was founded in Oxford UK, on the basis of innovative, world-class sicentific and technological research.
          </p>
          <p className="mx-auto max-w-7xl text-left mb-5 font-display text-base text-slate-900">
            We are is the next-generation decentralized open-source protocol for all web3 software and developers. It is developed by a team of world-leading computer scientists and web3 experts.
          </p>
          <p className="mx-auto max-w-7xl text-left mb-5 font-display text-base text-slate-900">
            Committable is collaborating with initiatives such as Digital Civilization Conference, as well as with leading industry contributors — e.g., University College Oxford Blockchain Research Institute, ACSAC and more — to ensure the establishment of a strong and active community with industry leaders. Jointly with its partners, Committable will ensure continuous community activities to educate, exchange, engage and motivate all its participants, sustaining the OSS ecosystem in the process.
          </p>

          <ul className="mt-8 flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12">
            <li>
              <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
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
