import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { GitHub, Twitter } from '@/app/buttons'
import { SQL, Rust, Python, Shell } from '@/app/code'
import { Rewrite, TrackPrivacyUnit, Private } from '@/app/dot'
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
            <P>Qrlew covers the broadest range of SQL queries, including JOIN and nested queries.</P>
          </div>
          <div className="basis-1/3 p-3">
            <H3>Privacy-optimized</H3>
            <P>Qrlew keeps track of tight bounds and ranges throughout each step, minimizing the amount of noise needed to achieve differential privacy.</P>
          </div>
        </div>
      </Section>
      {/* Temporary announcement */}
      <div className="w-full flex flex-col items-center bg-[#001b37] text-lighter-green p-5 z-10">
        <SubSection>
        <div className="flex flex-row items-center"><img src="/AAAI-24_Mark-Inverse-300x277.png" width="100"/><p className="p-5 text-2xl">Meet us at <Link href="https://ppai-workshop.github.io/">PPAI-24: The 5th AAAI Workshop on Privacy-Preserving Artificial Intelligence</Link>, Monday, February 26, 2024.</p> </div>
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
          <H2>Parse SQL queries into Qrlew intermediate representation</H2>
          <P>Qrlew transforms a SQL query into a combination of simple operations such as Map, Reduce and Join that are applied to Tables.
            This representation simplifies the process of rewriting queries and reduces dependencies on the diverse range of syntactic constructs present in SQL.</P>
          <P>You can try this interactively below.</P>
          <P>And <Link href="/dot">see more examples.</Link></P>
        </SubSection>
        <div className="w-full max-w-7xl flex flex-row items-center">
        <Playground dataset={
`{
  "tables":[
    {
      "name": "customer",
      "path": ["schema", "customer"],
      "schema": { "fields": [
        {"name": "id", "data_type": "Integer", "constraint": "Unique"},
        {"name": "name", "data_type": "Text"},
        {"name": "age", "data_type": "Float"}
      ]},
      "size": 1000
    },
    {
      "name": "purchase",
      "path": ["schema", "purchase"],
      "schema": { "fields": [
        {"name": "id", "data_type": "Integer", "constraint": "Unique"},
        {"name": "customer_id", "data_type": "Integer"},
        {"name": "item", "data_type": "Text"},
        {"name": "price", "data_type": "Float"}
      ]},
      "size": 10000
    }
  ]
}`
          } query={
`WITH customer_class AS (SELECT id, CASE WHEN age>=18 THEN 'adult' ELSE 'kid' END AS class FROM customer)
SELECT class, avg(price) AS avg_purchase FROM customer_class JOIN purchase ON customer_class.id = purchase.customer_id GROUP BY class;`
          } dark_mode={true}></Playground>
        </div>
        <SubSection>
          <P>The Relation can then be turned into a DP-equivalent Relation and rendered into a SQL query.</P>
          <P><Link href="/dp">Test it in Qrlew playground.</Link></P>
        </SubSection>
      </Section>
      <Section color="lighter-green">
        <SubSection>
        <H2>Deep Dive into Qrlew</H2>
        <P>To learn more about qrlew read the <Link href="https://qrlew.readthedocs.io/en/latest/deep_dive.html">deep-dive section</Link> of the documentation, or read <Link href="https://arxiv.org/pdf/2401.06273.pdf">Qrlew white paper</Link>.</P>
        </SubSection>
      </Section>
    </React.Fragment>
  )
}
