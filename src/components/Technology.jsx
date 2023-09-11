import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import imagetsa from '@/images/tsa.png'

export function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-white pt-32"
    >
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          // width={2347}
          // height={1244}
          layout="fixed"
          unoptimized
        />
      </div> */}
      <Container className="relative">
        <div className="mx-auto text-center">
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">
            Built on our cutting-edge Trusted Software Analysis
          </h2>
          <p className="mt-4 text-lg tracking-tight text-black text-left">
            Committable is built on top of our in-house trusted software analysis <i>(TSA),</i>  which guanratees our secure and verifiable analysis of all development contribution.
          </p>
        </div>
        <Image
          src={imagetsa}
          alt=""
          // layout="fill"
          // objectFit="cover"
          unoptimized
        />
        <div className="mx-auto text-center">
          <p className="mt-4 text-lg tracking-tight text-black text-left">
            Our TSA is both as simple and complex as running software analysis algorithms in trusted computing environments. It therefore ensures a:
          </p>
          <ul className='list-disc pl-5 mt-4 text-lg tracking-tight text-black text-left'>
            <li>secure, unbiased and accountable tokenization process</li>
            <li>certified developer’s identity</li>
          </ul>
          <p className="mt-4 text-lg tracking-tight text-black text-left">
            which showcases their past development contribution and decentralized identity.
          </p>
          <p className="mt-4 text-lg tracking-tight text-black text-left">
            With trusted software analysis as a core technology, Committable is able to trace and securely record all stages of the life cycle of a project, from a developer’s contribution perspective. Said record is stored in a
          </p>
          <p className="mt-4 text-lg tracking-tight text-black text-left">
            COMMIT, our native NFT, which can later be traded between stakeholders, showcasing all aspects of a project’s evolution, facilitating a seamless and effective work hand.
          </p>
        </div>
      </Container>
    </section>
  )
}
