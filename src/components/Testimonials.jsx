import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const articles = [
  [
    {
      title: 'COMMITTABLE: Towards a sustainable open-source ecosystem with verifiable contribution tokens',
      summary: 'An introduction to Committable as the first decentralized open-source protocol At Committable, we focus on helping developers with the monetization of…',
      link: 'https://bef0rewind.substack.com/p/committable-towards-a-sustainable',
      image: 'https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F53bf4c58-736b-4fda-8d54-e61c9b24a413_1400x490.png',
    },
    {
      title: 'Meta-Commit Examples',
      summary: 'What is CMT? CMT is the native non-fungible token (NFT) on Committable, minted out of a commit in an open-source software project. Every CMT is unique…',
      link: 'https://bef0rewind.substack.com/p/meta-commit-examples',
      image: 'https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F83538e4d-cd9d-407b-ab10-5844b73cb0db_1000x1057.png',
    },
    {
      title: 'How could I mint a CMT?',
      summary: 'General Introduction',
      link: 'https://bef0rewind.substack.com/p/how-could-i-mint-a-cmt',
      image: 'https://substackcdn.com/image/fetch/w_320,h_213,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbd65339f-1674-4e19-818d-4ecb3d67f86f_1000x529.png',
    },
  ],
  [
    {
      title: 'What is CMT?',
      summary: 'CMT is the native non-fungible token (NFT) on Committable, minted out of a commit in an open-source software project. Every CMT is unique in a way that…',
      link: 'https://bef0rewind.substack.com/p/what-is-cmt',
      image: '',
    },
    {
      title: 'What are NFTs?',
      summary: 'General Introduction',
      link: 'https://bef0rewind.substack.com/p/what-are-nfts',
      image: '',
    },
    {
      title: 'Announcing the Early-Bird Commit Program, Wave I',
      summary: 'We plan to launch the Early-Bird Commit Program for the Committable platform. DApp developers can explore this exciting decentralized open-source world…',
      link: 'https://bef0rewind.substack.com/p/announcing-the-early-bird-commit',
      image: '',
    },
    {
      title: 'Keynote speech at EDCON 2021',
      summary: 'Everything can be turned into NFTs nowadays. When it comes to software products or even requirement documents, the process of tokenization could go…',
      link: 'https://bef0rewind.substack.com/p/keynote-speech-at-edcon-2021',
      image: 'https://substackcdn.com/image/youtube/w_728,c_limit/z1MCPMQDdU8',
    },
  ],
  [
    {
      title: 'First Prize in ETH Rebase Hackathon 2021',
      summary: 'An ETH Hackathon was organized in Beijing, Nanjing, Shanghai, Chengdu and Shenzhen by the Rebase community from 14, May 2021 to 16, May 2021. The topic…',
      link: 'https://bef0rewind.substack.com/p/first-prize-in-eth-rebase-hackathon',
      image: '',
    },
    {
      title: 'Birthmarking Your Smart Contracts For Vulnerability Search, presented on DevCon V',
      summary: 'We’re happy to share a keynote presented at the event of DevCon V (2019 in Osaka) about detecting cloned smart contracts by capturing high-level…',
      link: 'https://bef0rewind.substack.com/p/birthmarking-your-smart-contracts',
      image: 'https://substackcdn.com/image/youtube/w_728,c_limit/WZS-KrdXUcU',
    },
    {
      title: 'S-gram: Statistical Linter For Incomplete Solidity Smart Contracts, presented on DevCon IV',
      summary: 'We’re happy to share a keynote presented at the event of DevCon IV (2018 in Prague) about helping audit Solidity smart contracts by identifying…',
      link: 'https://bef0rewind.substack.com/p/s-gram-statistical-linter-for-incomplete',
      image: 'https://substackcdn.com/image/youtube/w_728,c_limit/tCZGgDSAMAs',
    },
  ],
]


const testimonials = [
  [
    {
      content:
        'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
      author: {
        name: 'Sheryl Berge',
        role: 'CEO at Lynch LLC',
        image: avatarImage1,
      },
    },
    {
      content:
        'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
      author: {
        name: 'Leland Kiehn',
        role: 'Founder of Kiehn and Sons',
        image: avatarImage5,
      },
    },
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        name: 'Peter Renolds',
        role: 'Founder of West Inc',
        image: avatarImage3,
      },
    },
    {
      content:
        'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: avatarImage4,
      },
    },
  ],
]

const rainbowTextStyle = {
  backgroundImage: 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
  color: 'transparent',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  fontWeight: 'bold'
};

const RainbowText = ({ children }) => {
  return <div style={rainbowTextStyle}>{children}</div>;
}

export function Testimonials() {
  return (
    <Container>
      <div className="mx-auto max-w-2xl md:text-center">
        <h2
          id="blogs"
          className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Our thoughts
        </h2>
        <div className="mt-4 text-lg tracking-tight text-slate-700">
          Open Source, Web3.0, Committable and <RainbowText>Everything.</RainbowText>
        </div>
      </div>
      <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
        {articles.map((column, columnIndex) => (
          <li key={columnIndex}>
            <ul className="space-y-6 sm:space-y-8">
              {column.map((testimonial, testimonialIndex) => (
                <li key={testimonialIndex}>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <svg
                      aria-hidden="true"
                      width={105}
                      height={78}
                      className="absolute top-6 left-6 fill-slate-100"
                    >
                      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                    </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        {testimonial.summary}
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <a href={testimonial.link} className="inline-flex">
                          <div className="font-display text-base text-amber-600">
                            {testimonial.title}
                          </div>
                        </a>

                        {/* <div className="mt-1 text-sm text-slate-500">
                            {testimonial.title}
                          </div> */}
                      </div>
                      {/* <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50">
                          <Image src={testimonial.image} alt="" />
                        </div> */}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  )
}
