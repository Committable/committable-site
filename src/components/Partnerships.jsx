import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { ButtonLink } from '@/components/Button'


import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

import iconInclusion from '@/images/inclusion.png'
import iconCertificate from '@/images/certificate.png'
import iconEvaluation from '@/images/evaluation.png'
import iconAcceleration from '@/images/acceleration.png'
import iconIdeaGeneration from '@/images/idea-generation.png'

const features = [
  {
    id: 1,
    name: 'INCLUSION',
    summary: 'Allows projects to partner with us for the purpose of recruitment.',
    description:
      'Through this path, projects can scan our pool of developers for specific skills and expertise needed, and faclitate a fair and accurate recruitment process.',
    image: screenshotProfitLoss,
    icon: iconInclusion,
  },
  {
    id: 2,
    name: 'CERTIFICATE',
    summary:
      'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    image: screenshotInventory,
    icon: iconCertificate,
  },
  {
    id: 3,
    name: 'EVALUATION',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    image: screenshotContacts,
    icon: iconEvaluation,
  },
  {
    id: 4,
    name: 'ACCELERATION',
    summary:
      'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    image: screenshotContacts,
    icon: iconAcceleration,
  },
  {
    id: 0,
    name: 'Other Ideas?',
    summary:
      'If you have any other ideas for collaboration.',
    description:
      '',
    image: screenshotContacts,
    icon: iconIdeaGeneration,
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, { 'opacity-75 hover:opacity-100': !isActive })}
      {...props}
    >
      {/* ... */}
      <div className='flex items-center'>
        {/* <div className="bg-white mr-3">
          <Image src={feature.icon} aria-hidden="true" className="h-9 w-9" fill="none" />
        </div> */}
        <h3
          className={clsx('mt-6 text-xl font-medium', {
            'text-amber-600': isActive,
            'text-slate-600': !isActive,
          })}
        >
          {feature.name}
        </h3>
      </div>

      <div className="mt-2 font-display text-xl text-slate-900">
        <p>{feature.summary}</p>

      </div>

      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
      {feature.id === 0 && (<ButtonLink
        variant='outline'
        color='amber'
        href="/contact-us">Contact us </ButtonLink>)}
    </div>
  )
}


function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
        </>
      )}
    </Tab.Group>
  )
}
function PartnershipSteps() {
  return (
    <section
      id="partnership-steps"
      aria-labelledby="steps-title"
      className="py-20 sm:py-32 lg:py-32"
    >
      <Container>
        <div className="mx-auto md:text-center">
          <h2
            id="steps-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl mb-8"
          >
            Partnership Steps
          </h2>
          <div className="mt-4 space-y-6 text-lg tracking-tight text-slate-700 text-left">
            <Step number="1" text="Contact us today for more information on the chosen line, and for mutual sharings of inital organizational information." />
            <Step number="2" text="A partnership pre-agreement will be signed by both parties (Committable & party A)." />
            <Step number="3" text="Party A will share all relevant documentation and grant access to relevant information (e.g., internal developers’s github accounts, recruitment needs, growth needs etc.)." />
            <Step number="4" text="Commitable will onboard related developers to its protocol, when applicable." />
            <Step number="5" text="Committable core team will run an in-depth analysis of the other party’s needs, and accurately adapt the Committable protocol to the specific goals and expected outcomes of party A." />
            <Step number="6" text="The partnership will officially be launched, and announced through a press release and via both parties social medias." />
            <Step number="X" text="Committable will continuously contribute to the creation and/or support of new business lines and development processes for party A accordingly." />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Step({ number, text }) {
  return (
    <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="flex items-start">
        <div className="text-2xl font-bold text-amber-600 mr-4">
          {number}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export function Partnerships() {
  return (
    <section
      id="partnerships"
      aria-labelledby="secondary-features-title"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="secondary-features-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            &#x2709; Become our partner
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Join one or more of our four partnership path and enhance your project growth and adoption.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
      <PartnershipSteps />
    </section>
  )
}
