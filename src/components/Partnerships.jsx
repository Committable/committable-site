import { ButtonLink } from '@/components/Button'


import { Container } from '@/components/Container'

export function Partnerships() {
  return (
    <section
      id="partnership"
      aria-labelledby="secondary-features-title"
      className="pt-40 sm:pt-22"
    >
      <Container>
        <div className="max-w-7xl text-left">
          <h2
            id="secondary-features-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            &#x2709; We are inviting you to become our partner
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Join one or more of our four partnership path and enhance your project growth and adoption.
          </p>
          Contact us today for more information and begin one of the partnership line.
        </div>
        <div className="flex flex-col lg:flex-row w-full py-8">
          {/* Left Side */}
          <div className="w-full lg:w-2/5 p-8">
            <div className="outline outline-offset-2 outline-4 outline-gray-400 p-4">
              <h2 className="font-bold text-xl mb-4">INCLUSION</h2>
              <p>
                Our Inclusion path allows projects to partner with us for the purpose of recruitment.
              </p>
              <p className="mt-2">
                Through this path, projects can scan our pool of developers for specific skills and expertise needed, and facilitate a fair and accurate <strong>recruitment process</strong>.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-3/5">
            <div className="px-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Projects partnering with us on the inclusion path</h2>
              <p className="mb-4">Projects partnering with us on the inclusion path are encouraged to be as specific as possible, for a more accurate matching with candidates, when listing skills, such as (but not limited to):</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Programming languages expertise (rust, solidity, javascript, monoko etc.)</li>
                <li className="mb-2">Cybersecurity skills, with a focus on virtual machines</li>
                <li className="mb-2">Expertise in IoT, cloud computing and cryptography</li>
                <li className="mb-2">Ability to debug complex web3 problems</li>
                <li className="mb-2">Number of web3 projects previously involved in, specifically metaverse ones</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Committable will deliver the following to projects</h2>
              <p>Committable will deliver the following to projects (but not limited to):</p>
              <ul className="list-disc pl-6 mt-4">
                <li className="mb-2">List of candidates that best meet the projects’ inputed skills and expertise</li>
                <li className="mb-2">Specific tasks to be further evaluated during the recruitment process</li>
                <li className="mb-2">Certificates of recruitment upon completion</li>
                <li className="mb-2">A platform to advertise job postings and facilitate accurate recruitment</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full py-8">
          {/* Left Side */}
          <div className="w-full lg:w-2/5 p-8">
            <div className="outline outline-offset-2 outline-4 outline-gray-400 p-4">
              <h2 className="font-bold text-xl mb-4">CERTIFICATION</h2>
              <p>
                Our certification path allows projects to partner with us for the purpose of issuing certificates.
              </p>
              <p className="mt-2">
                Through this path, projects can use our protocol to issue <strong>certificates of attendance</strong> (e.g., for hackathons, workshops etc.) and <strong>certificates of achievements</strong>.
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="w-full lg:w-3/5">
            <div className=" px-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Projects partnering with us on the certification path</h2>
              <p className="mb-4">Projects partnering with us on the certification path will provide us with the following (but not limited to):</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Access to their participants basic digital identity information</li>
                <li className="mb-2">Access to specific activities involvement and participation (e.g., attendance to a seminar within a conference)</li>
                <li className="mb-2">Access to relevant documentation and information regarding contribution to events</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Committable will deliver the following to projects</h2>
              <p>Committable will deliver the following to projects (but not limited to):</p>
              <ul className="list-disc pl-6 mt-4">
                <li className="mb-2">Certificates of attendance for all participants</li>
                <li className="mb-2">Certificates of achievements (in the case of competitions, hackathons, or completion of online educational program)</li>
                <li className="mb-2">Ranking and description of skillsets for achievements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full py-8">
          {/* Left Side */}
          <div className="w-full lg:w-2/5 p-8">
            <div className="outline outline-offset-2 outline-4 outline-gray-400 p-4 mt-4">
              <h2 className="font-bold text-xl mb-4">EVALUATION</h2>
              <p>
                Our evaluation path allows projects to partner with us for the purpose of implementing internal and external evaluations.
              </p>
              <p className="mt-2">
                Through this path, projects can use our protocol to undergo <strong>evaluations of developers</strong> within their projects or externally (e.g., for recruitment or collaboration).
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-3/5">
            <div className=" px-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Projects partnering with us on the evaluation path</h2>
              <p className="mb-4">Projects partnering with us on the evaluation path will provide us with the following (but not limited to):</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Access to their participants basic digital identity information</li>
                <li className="mb-2">Onboarding of their developers to the Committable protocol (for access to their GitHub repos)</li>
                <li className="mb-2">List of specific evaluation criteria to be inputed to our protocol for optimized outputs</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Committable will deliver the following to projects</h2>
              <p>Committable will deliver the following to projects (but not limited to):</p>
              <ul className="list-disc pl-6 mt-4">
                <li className="mb-2">Certificates of achievements</li>
                <li className="mb-2">List of developers that meet their target in the context of the evaluation goals</li>
                <li className="mb-2">Summary of individual evaluation, with strengths and weaknesses highlighted</li>
                <li className="mb-2">Summary of overall evaluation, with ranking and description of all skillset evaluated</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full py-8">
          {/* Left Side */}
          <div className="w-full lg:w-2/5 p-8">
            <div className="outline outline-offset-2 outline-4 outline-gray-400 p-4 mt-4">
              <h2 className="font-bold text-xl mb-4">ACCELERATION</h2>
              <p>
                Our acceleration path allows projects to partner with us for the purpose of product and project development via the community.
              </p>
              <p className="mt-2">
                Through this path, projects can use our ecosystem and growing community to foster a collaborative effort for <strong>growth, sustainability, and accelerated development</strong>.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-3/5">
            <div className=" px-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Projects partnering with us on the acceleration path</h2>
              <p className="mb-4">Projects partnering with us on the acceleration path aim will provide us with the following (but not limited to):</p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">List of development needs</li>
                <li className="mb-2">KPIs and goals (short-term and long-term)</li>
                <li className="mb-2">SWOT analysis of their current project status</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Committable will deliver the following to projects</h2>
              <p>Committable will deliver the following to projects (but not limited to):</p>
              <ul className="list-disc pl-6 mt-4">
                <li className="mb-2">Access to our ecosystem and community for selection of developers</li>
                <li className="mb-2">List of collaboration and partnerships activities and business models</li>
                <li className="mb-2">Academical research supervision</li>
                <li className="mb-2">New lines of business development and implementation, when applicable</li>
              </ul>
            </div>
          </div>
        </div>

      </Container>
      {/* <PartnershipSteps /> */}
    </section>
  )
}
