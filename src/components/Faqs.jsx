import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'


function OpenSourceResources() {
  return (
    <div className="p-8 rounded-lg space-y-6 max-w-7xl mx-auto">
      <p className="text-lg leading-7">
        Our document site{' '}
        <a 
          href="https://docs.committable.io/en/overview/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-700 hover:text-blue-900 underline"
        >
          https://docs.committable.io/en/overview/
        </a>{' '}
        will grant you access to our continuously growing database of relevant information on our protocol.
      </p>
      
      <p className="text-lg leading-7">
        Access our open-source repositories of our protocol on our GitHub page{' '}
        <a 
          href="https://github.com/Committable" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-700 hover:text-blue-900 underline"
        >
          https://github.com/Committable
        </a>
        .
      </p>
      
      <p className="text-lg leading-7 font-semibold">
        Committable is an open-source collaborative effort and is for open-source collaboration. We welcome all contributions:
      </p>
      
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-lg leading-7">
          <span className="font-semibold">Improve the protocol:</span> {' '}
          <a 
            href="https://github.com/Committable/Contracts" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-700 hover:text-blue-900 underline"
          >
            https://github.com/Committable/Contracts
          </a>
        </li>
        <li className="text-lg leading-7">
          <span className="font-semibold">Design a new software analysis algorithm:</span> {' '}
          <a 
            href="https://github.com/Committable/TSA-core" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-700 hover:text-blue-900 underline"
          >
            https://github.com/Committable/TSA-core
          </a>
        </li>
        <li className="text-lg leading-7">
          <span className="font-semibold">Improve the docs:</span> {' '}
          <a 
            href="https://github.com/Committable/committable-doc/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-700 hover:text-blue-900 underline"
          >
            https://github.com/Committable/committable-doc/
          </a>
        </li>
      </ul>
    </div>
  );
}




const faqs = [
  [
    {
      "question": "What is the primary goal of Committable?",
      "answer": "Committable focuses on helping developers monetize their contributions to open-source software (OSS) with the core goal to grow and sustain the OSS ecosystem."
    },
    {
      "question": "Why are most OSS projects inactive?",
      "answer": "Over 99% of OSS projects are inactive due to challenges like lack of developers’ remuneration, leading to project disengagement and ineffective project hand-offs."
    },
    {
      "question": "How does Committable differentiate from other platforms?",
      "answer": "Committable is a decentralized open-source protocol built on trusted software analysis technology. It transforms commits into COMMIT assets and ensures a secure tokenization process and certified developer identity."
    },
  ],
  [
    {
      "question": "What is a meta commit?",
      "answer": "A meta commit is a computational proof and permanent digital signature generated by Committable from a commit hash, capturing key information about a developer's contribution."
    },
    {
      "question": "How can developers showcase their contributions using Committable?",
      "answer": "Developers can embed their project-specific metadata into a COMMIT NFT and list it on marketplaces, serving as a digital identity asset that links to their GitHub account and wallet."
    },
    {
      "question": "What benefits do COMMIT buyers receive?",
      "answer": "COMMIT buyers gain ownership of contributions, earn development bounties, claim community rewards from the mining pool, and become part of an innovative community."
    },
  ],
  [
    {
      "question": "How can one support the growth of the Committable ecosystem?",
      "answer": "Sponsors can donate to promising projects in the Committable ecosystem, sponsor key development events, and have a say in the governance of the ecosystem through awarded governance tokens."
    },
    {
      "question": "What is Committable's vision for the open-source economy?",
      "answer": "Committable aims to establish a self-sustained decentralized open-source economy where all stakeholders contribute to projects for valuable returns such as ownership, earnings, and credibility."
    }
],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <h2 id="faq-title" className="sr-only">
        Frequently asked questions
      </h2>
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, reach out to us
            and someone will get back to you.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
      <OpenSourceResources />
    </section>
  )
}
