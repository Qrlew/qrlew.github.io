import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { GitHub, Twitter } from '@/app/buttons'
import { SQL, Rust, Python, Shell } from '@/app/code'
import { Rewrite, TrackPrivacyUnit, Private } from '@/app/dot'
import Pdf from '@/app/pdf'
import { Link, Section, SubSection, Title, Subtitle, H1, H2, H3, P } from '@/app/components'
import Playground from '@/app/dot/playground'

export default function Page() {
  return (
    <React.Fragment>
      <Section color="dark-green-alt">
        <div className="w-full max-w-7xl text-center mt-20">
          <Title><span className="text-lightest-green">Qrlew</span> framework</Title>
          <Subtitle>The SQL-to-SQL Differential Privacy layer</Subtitle>
        </div>
        <div className="w-80 flex justify-between py-10 mb-10 content-center">
          <GitHub />
          <Twitter />
        </div>
      </Section>
      <Section color="dark-green">
        <SubSection>
          <H2>What is Qrlew?</H2>
          <P>Qrlew <span className="text-light-green">/ˈkɝlu/</span> is the <Link href="https://github.com/Qrlew">open source library</Link> that rewrites SQL queries into privacy-preserving variants using <Link href="https://en.wikipedia.org/wiki/Differential_privacy">Differential Privacy (DP)</Link>.</P>
          <P>Use Qrlew if you want to bring privacy guarantees to your SQL pipelines. It is:</P>
        </SubSection>
        <div className="w-full max-w-7xl flex items-top flex-row">
          <div className="basis-1/3 p-3">
            <H3>SQL-to-SQL</H3>
            <P>Qrlew turns SQL queries into differentially-private SQL queries that can be executed at scale on many SQL datastore, in many SQL dialects.</P>
          </div>
          <div className="basis-1/3 p-3">
            <H3>Feature-rich</H3>
            <P>Qrlew covers the broadest range of SQL queries, including <code>JOIN</code>, Common Table Expressions (<code>WITH</code>) and nested <code>SELECT</code>.</P>
          </div>
          <div className="basis-1/3 p-3">
            <H3>Privacy-optimized</H3>
            <P>Qrlew automatically optimizes the most important DP parameters to maximize utility.</P>
            <P>It keeps track of value bounds and ranges throughout each computation step, minimizing the amount of noise needed to achieve differential privacy.</P>
          </div>
        </div>
      </Section>
      {/* Temporary announcement */}
      <div className="w-full flex flex-col items-center bg-[#001b37] text-lighter-green p-5 z-10">
        <SubSection>
          <div className="flex flex-row items-center">
            <img src="/AAAI-24_Mark-Inverse-300x277.png" width="100"/>
            <p className="p-5 text-2xl">Meet us at <Link href="https://ppai-workshop.github.io/">PPAI-24: The 5th AAAI Workshop on Privacy-Preserving Artificial Intelligence</Link>, Monday, February 26, 2024.
            Read <Link href="https://arxiv.org/pdf/2401.06273.pdf">the paper</Link> we will present. And give <Link href="mailto:ng@sarus.tech">us</Link> your feedback.</p>
          </div>
        </SubSection>
      </div>
      <Section color="main-green">
        <SubSection>
          <H2>How does Qrlew work?</H2>
          <P>The Qrlew library, solves the problem of running a SQL query with DP guarantees in three steps:</P>
        </SubSection>
        <div className="w-full max-w-7xl flex items-top flex-row">
          <div className="basis-1/3 p-3">
            <P><span className="font-bold text-3xl text-lighter-red">1. </span>  The SQL query submitted by an analyst is parsed and converted into an intermediate representation called Relation.</P>
          </div>
          <div className="basis-1/3 p-3">
            <P><span className="font-bold text-3xl text-lighter-red">2. </span>  The Relation is rewritten into a DP variant.</P>
          </div>
          <div className="basis-1/3 p-3">
            <P><span className="font-bold text-3xl text-lighter-red">3. </span>  The DP variant of the Relation can be rendered as an SQL query string in any dialect.</P>
          </div>
        </div>
        <SubSection>
        <P>At the end of this process, the query string can submitted to the data store of the data owner. The output can be shared with the data practitioner or published without worrying about privacy leakage.
</P>
        </SubSection>
      </Section>
      <Section color="light-green">
        <SubSection>
          <H2>Deep-dive into Qrlew</H2>
          <P>To learn more about qrlew read the <Link href="https://qrlew.readthedocs.io/en/latest/deep_dive.html">deep-dive section</Link> of the documentation, or read <Link href="https://arxiv.org/pdf/2401.06273.pdf">Qrlew white paper</Link>.
          </P>
        </SubSection>
        <div className="w-full max-w-7xl flex flex-row items-top">
          <div className="w-1/2 p-3">
            <H3>Why a Whitepaper?</H3>
            <P>Differential Privacy is hard to implement right. It is a problem for a piece of software one rely on for data protection</P>
            <P>To foster trust, Sarus relies on a two-pronged strategy:
            </P>
            <ul className="list-inside list-disc text-xl my-3">
              <li>Open-source core</li>
              <li>Peer reviewed methodology</li>
            </ul>
            <P>Qrlew — Sarus SQL core — is <Link href="https://github.com/Qrlew/qrlew">open-source</Link> so that anyone, and experts in particular, can check its implementation.</P>
            <P>Qrlew has been reviewed by the Differential Privacy community and <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7168272878751105026">presented </Link>
            in a AAAI-24 workshop: <Link href="https://ppai-workshop.github.io/">PPAI-24</Link> </P>
            <H3>What does the Whitepaper tell us?</H3>
            <P>The paper introduces Qrlew, an open source library that can parse SQL queries into
            Relations — an intermediate representation — that keeps track of rich data types, value
            ranges, and row ownership; so that they can easily be rewritten into differentially-private
            equivalent and turned back into SQL queries for execution in a variety of standard data
            stores.
            </P>
            <P>With Qrlew, a data practitioner can express their data queries in standard SQL; the data
            owner can run the rewritten query without any technical integration and with strong privacy
            guarantees on the output; and the query rewriting can be operated by a privacy-expert who
            must be trusted by the owner, but may belong to a separate organization.
            </P>
          </div>
          <div className="w-1/2 p-3">
            <Pdf url="/2401.06273v1.pdf"/>
          </div>
        </div>
      </Section>
      <Section color="lighter-green">
        <SubSection>
          <H2>Play with Qrlew online</H2>
        </SubSection>
        <div className="w-full max-w-7xl flex flex-row items-top">
          <div className="w-1/2 p-3">
          <H3>Qrlew <Link href="/dot">Relation Viewer</Link></H3>
          <P>To rewrite SQL into Differentially Private SQL, Qrlew parses input queries and represent them in a abstract representation we call Relations.</P>
          <P>Relations are compositions of simple building blocks that simplify the rewriting process.</P>
          <P>To understand, how some SQL is parsed into a Relation, and debug some cases, you can play with the <Link href="/dot">interactive Relation Viewer</Link>.</P>
          </div>
          <div className="w-1/2 p-3">
            <Link href="/dot"><img src="/viewer.png" className="shadow-[0_20px_25px_-5px_rgba(0,0,0,0.7)]"/></Link>
          </div>
        </div>
        <div className="w-full max-w-7xl flex flex-row items-top py-12">
          <div className="w-1/2 p-3">
          <Link href="/dp"><img src="/playground.png" className="shadow-[0_20px_25px_-5px_rgba(0,0,0,0.7)]"/></Link>
          </div>
          <div className="w-1/2 p-3">
          <H3>Qrlew <Link href="/dp">Playground</Link></H3>
            <P>To see how SQL queries are parsed into Relations, which are rewritten into Differentially Private equivalent, and then rendered into safe SQL queries,
              you can have a look at the <Link href="/dot">interactive Qrlew Playground</Link>.
            </P>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}
