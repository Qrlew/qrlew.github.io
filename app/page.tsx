import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { GitHub, Twitter } from '@/app/buttons'
import { SQL, Rust, Python, Shell } from '@/app/code'
import { Rewrite, TrackPrivacyUnit, Private } from '@/app/dot'
import { Link, Section, SubSection, Title, Subtitle, H1, H2, H3, P } from '@/app/components'

export default function Page() {
  return (
    <React.Fragment>
      <Section color="dark-green-alt">
        <div className="w-full max-w-7xl text-center mt-20">
          <Title><span className="text-lightest-green">Qrlew</span> framework</Title>
          <Subtitle>Open source SQL manipulation framework written in Rust</Subtitle>
        </div>
        <div className="w-80 flex justify-between py-10 mb-10 content-center">
          <GitHub />
          <Twitter />
        </div>
      </Section>
      <Section color="dark-green">
        <SubSection>
          <H2>What is Qrlew?</H2>
          <P>Qrlew is an <Link href="https://github.com/Qrlew">open source library</Link> that
            aims to parse and compile SQL queries into an <Link href="https://en.wikipedia.org/wiki/Intermediate_representation">Intermediate Representation (IR)</Link> that
            is well-suited for various rewriting tasks.
            Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</P>
        </SubSection>
        <div className="w-full max-w-7xl flex items-center flex-row">
          <div className="basis-1/3 p-3">
            <H3>SQL Query IR</H3>
            <P>Qrlew transforms a SQL query into a combination of simple operations such as <code>Map</code>, <code>Reduce</code> and <code>Join</code> that are applied to  <code>Tables</code>.
              This representation simplifies the process of rewriting queries and reduces dependencies on the diverse range of syntactic constructs present in SQL.</P>
          </div>
          <div className="basis-1/3 p-3">
            <H3>Type Inference Engine</H3>
            <P>Differential Privacy (DP) guaranrtees are hard to obtain without destroying too much information.
              In <Link href="https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf">many mechanisms</Link> having prior bounds on values can
              improve the utility of DP results dramatically. By propagating types cleverly, Qrlew can returns bounds for all values.</P>
          </div>
          <div className="basis-1/3 p-3">
            <H3>Differential Privacy compiler</H3>
            <P>Qrlew can compile SQL queries into Differentially Private ones.
              The process is inspired by <Link href="https://petsymposium.org/popets/2020/popets-2020-0025.pdf">Wilson et al. 2020</Link>.
              The complexity of the compilation process makes Qrlew IR very useful at delivering clean, readable and reliable code.</P>
          </div>
        </div>
      </Section>
      <Section color="main-green">
        <SubSection>
          <H2 id="get-started">Get Started</H2>
          <P>Qrlew is a <Link href="https://crates.io/crates/qrlew">Rust library</Link>. To add it to your project, simply type:</P>
          <Shell>
            {`# Create a new project
cargo new super-sql-app
# Change directory
cd super-sql-app
# Add qrlew library
cargo add qrlew`}</Shell>
          <P>Qrlew comes as a <Link href="https://pypi.org/project/pyqrlew/">python library</Link>. For now it has limited features.
            To install it simply type:</P>
          <Shell>
            {`pip install pyqrlew`}</Shell>
        </SubSection>
      </Section>
      <Section color="main-red">
        <SubSection>
          <H2>Parse SQL queries into Qrlew intermediate representation</H2>
          <P>Qrlew transforms a SQL query into a combination of simple operations such as Map, Reduce and Join that are applied to Tables.
            This representation simplifies the process of rewriting queries and reduces dependencies on the diverse range of syntactic constructs present in SQL.</P>
        </SubSection>
        <div className="w-full max-w-7xl flex flex-row items-center">
          <div className="basis-2/5 p-3">
            <SQL>{`SELECT * FROM order_table JOIN item_table
ON id=order_id;`}</SQL>
            <Rust>
              {`use qrlew::{sql::parse, Relation};

let relation = Relation::try_from(
  parse("SELECT * FROM order_table JOIN
    item_table ON id=order_id;")
    .unwrap()
    .with(&relations),
).unwrap();`}</Rust>
          </div>
          <div className="flex flex-col basis-1/5 p-3 items-center">
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </div>
          <div className="flex flex-col basis-2/5 p-3 items-center">
            <Rewrite />
          </div>
        </div>
      </Section>
      <Section color="light-red">
        <SubSection>
          <H2>Output SQL</H2>
          <P>After the rewritting process has happened in the intermediate representation, Qrlew can outputs plain SQL.</P>
        </SubSection>
        <div className="w-full max-w-7xl flex flex-row items-center">
          <div className="basis-2/5 p-3">
            <Rust>
              {`use sqlparser::ast::Query;

let query = Query::from(&relation);`}</Rust>
          </div>
          <div className="flex flex-col basis-1/5 p-3 items-center">
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </div>
          <div className="basis-2/5 p-3">
            <SQL>{
              `WITH
  join__e_y (field_eygr, field_0wjz, field_cg0j,
    field_idxm, field_0eqn, field_3ned, field_gwco)
  AS (SELECT * FROM order_table JOIN item_table
    ON (order_table.id) = (item_table.order_id)),
  map_8r2s (field_eygr, field_0wjz, field_cg0j,
    field_idxm, field_0eqn, field_3ned, field_gwco)
  AS (SELECT field_eygr AS field_eygr, field_0wjz AS
    field_0wjz, field_cg0j AS field_cg0j, field_idxm
    AS field_idxm, field_0eqn AS field_0eqn,
    field_3ned AS field_3ned, field_gwco AS field_gwco
    FROM join__e_y)
SELECT * FROM map_8r2s;`}</SQL>
          </div>
        </div>
      </Section>
      <Section color="lighter-red">
        <SubSection>
          <H2 >Track the privacy unit accross SQL queries</H2>
          <P>Differential Privacy (DP) is defined with respect to a <em>distance</em> between datasets.
            A DP mechanisms is such that computations on neighboring datasets yield indistinguishable
            results. <em>Neighboring</em> datasets are datasets at distance 1.
            In Qrlew, the distance is defined in terms of number if differing <em>protected entities</em> (PE).
            The PE is defined as an identifying string <code>_PROTECTED_ENTITY_ID_</code> added to each table.
          </P>
        </SubSection>
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full p-3">
            <SQL>{`SELECT * FROM order_table JOIN item_table
ON id=order_id;`}</SQL>
            <Rust>
              {`use qrlew::{sql::parse, Relation};

let relation = Relation::try_from(
  parse("SELECT * FROM order_table JOIN
    item_table ON id=order_id;")
    .unwrap()
    .with(&relations),
).unwrap();
// Define the privacy unit: here the name of the user
let relation = relation.force_protect_from_field_paths(
  &relations,
  &[
      (
        "item_table",
        &[
          ("order_id", "order_table", "id"),
          ("user_id", "user_table", "id"),
        ],
        "name",
      ),
      ("order_table", &[("user_id", "user_table", "id")], "name"),
      ("user_table", &[], "name"),
  ],
);`}</Rust>
          </div>
          <div className="p-3">
            <FontAwesomeIcon icon={faArrowDown} size="xl" />
          </div>
          <div className="w-full p-3">
            <TrackPrivacyUnit />
          </div>
        </div>
      </Section>
      <Section color="light-green">
        <SubSection>
          <H2 >Compile SQL queries into Differentially Private ones</H2>
          <P>The process is inspired by <Link href="https://petsymposium.org/popets/2020/popets-2020-0025.pdf">Wilson et al. 2020</Link>.
            The complexity of the compilation process makes Qrlew IR very useful at delivering clean, readable and reliable code.</P>
        </SubSection>
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full p-3">
            <SQL>{`SELECT * FROM order_table JOIN item_table
ON id=order_id;`}</SQL>
            <Rust>
              {`use qrlew::{sql::parse, Relation};

let relation = Relation::try_from(
  parse("SELECT * FROM order_table JOIN
    item_table ON id=order_id;")
    .unwrap()
    .with(&relations),
).unwrap();
// Add noise to get 𝜀,𝛿-DP
let relation = relation.dp_compilation(
  &relations,
  &[
    (
      "item_table",
      &[
        ("order_id", "order_table", "id"),
        ("user_id", "user_table", "id"),
      ],
      "name",
    ),
    ("order_table", &[("user_id", "user_table", "id")], "name"),
    ("user_table", &[], "name"),
  ],
  1., // epsilon
  1e-5 // delta
);`}</Rust>
          </div>
          <div className="p-3">
            <FontAwesomeIcon icon={faArrowDown} size="xl" />
          </div>
          <div className="w-full p-3">
            <Private />
          </div>
        </div>
      </Section>
      <Section color="lighter-green">
        <SubSection>
          <H2>Why Qrlew?</H2>
          <P>Sarus Technologies builds a state-of-the art product to access private data without seeing it.
            Giving the possibility to run SQL queries safely is an important part of Sarus.
            Qrlew is at the core of the next iteration of Sarus SQL engine. It is not yet in production but should be gradually integrated in Sarus and fully integrated by the end of the year.
            Besides the DP algorithm need to be trusted, hence the open source release.</P>
        </SubSection>
        <SubSection>
          <H2>Where is it Going?</H2>
          <P>Qrlew is actively developped as the core of Sarus SQL offer, but it aims at being used elsewhere.
            Many connectors to other tools in Differential Privacy should be developped in the coming months.</P>
        </SubSection>
      </Section>
    </React.Fragment>
  )
}
