import React from 'react';

const eventsData = [
    {
        title: 'ICP Hub Turkey Ideathon 2023 x CoinOXS',
        date: 'October 8th',
        location: 'Istanbul, Turkey',
        description: 'Committable will announce its partnership with CoinOXS, during the ideathon in Turkey, this coming october. The Committable protocol will issue certificates for all attendees of the event, and launch its first call for academical paper.'
    },
    {
        title: 'EDCON 2023',
        date: 'May 19th - May 23rd',
        location: 'Podgorica, Montenegro',
        description: 'Committable Keynote Speech: Know your Developer - Verifiable Development Contribution via Trusted Software Analysis.'
    },
    {
        title: 'Blockchain in Education 2023',
        date: 'March 28th - March 30th',
        location: 'University of Oxford, UK',
        description: 'Committable Keynote Speech: Open-Source Made Easy For Web 3.0 - Developer DID with Verifiable Profiles. Blockchain in Education was a summit organized by the Immersive Education Initiative and the Digital Civilisation. Further information can be found: https://summit.immersiveeducation.org/news-2023-Oxford-conferences.html'
    },
    {
        title: 'Early Bird Program II 2023',
        date: 'January 16th - February 20th',
        location: 'Virtual',
        description: 'Committable Early Bird Wave II was set up as a testing playground to receive feedback from developers on ways to improve our algorithm and focus our technical analysis software. It was also the stepping stone to creating and launching our Partnership Paths Program, launched Q3 2023.'
    },
    {
        title: 'PAVe Trust Workshop 2022',
        date: 'December 5th - December 9th',
        location: 'ACSAC Austin, Texas, USA',
        description: 'Committable was introduced at ACSAC, during The Blockhouse Technology Limited second sponsored workshop, Program Analysis & Verification on Trusted Platforms (PAVeTrust). More info found at: https://www.acsac.org/2022/workshops/pavetrust/ “Committable: OSS monetisation via trusted software analysis” by Liu Han (remote presentation).'
    },
    {
        title: 'ETH Rebase Hackathon 2021',
        date: 'May 14th - May 16th',
        location: 'Beijing, China',
        description: 'Committable founder and its core engineering team, won the first prize in the ETH Rebase Hackathon 2021 on the topic “Build the next 5B unicorn with 500 lines of code”. The idea of Committable was first shared during the hackathon for boosting collaborative development with the blockchain ecosystem.'
    },
    {
        title: 'Early Bird Commit Program Wave I 2021',
        date: 'November 15th - December 31st',
        location: 'Virtual',
        description: 'Committable Early Bird Wave I was set up as an exciting playground (committable.io) for DApp developers to test out and experience the decentralized open-source world that Commitable aims to build (prior to the official 2022 launch), via the creation (mint) and trade of self-generated CMT tokens.'
    },
    {
        title: 'DEVCON V. 2019',
        date: 'October 8th - October 11th',
        location: 'Osaka, Japan',
        description: 'Committable founding team has been doing research for over half a decade leading to the creation of the Committable protocol. During DEVCON V in 2019, Committable’s founder presented a keynote speach about deecting cloned smart contracts by capturing high-leve semantics from smart contract byte-code, while implementing the tool EClone to identify a vulnerability when copying functions from a smart contract, titled: “Birthmarking your smart contracts for vulnerability search”. Keynote Speech Link: https://youtu.be/WZS-KrdXUcU'
    },
    {
        title: 'DEVCON IV. 2018',
        date: 'October 30th - November 2nd',
        location: 'Prague, Czech Republic',
        description: 'Committable founding team has been doing research for over half a decade leading to the creation of the Committable protocol. During DEVCON IV in 2018, Committable’s founder presented a keynote speach on the topic of helping audit Solidity smart contracts by identifying potential vulnerabilites with N-gram language modeling techniques, titled: “S-gram: Statistical linter for incomplete solidity smart contracts”. Keynote speech link: https://youtu.be/tCZGgDSAMAs'
    }
];


const Event = ({ event }) => (
    <div className="mb-6 text-left">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p className="text-sm mb-2">{event.date} | {event.location}</p>
        <p className="text-gray-600">{event.description}</p>
    </div>
);

const EventsList = () => (
    <section
        id="events"
        className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32 content-center"
    >
        <div className="p-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Events: Building an empowering, self governing open-source community.</h2>
            <p className="mb-6">We participate in and organize activities with the aim to collaborate with the community, as a two way street, learning from one another.</p>
            {eventsData.map((event, index) => <Event key={index} event={event} />)}
        </div>
    </section>

);

export default EventsList;
