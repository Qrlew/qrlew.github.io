import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GitHub, Twitter } from './buttons'
import { SQL, Rust, Python } from './code'
import { Rewrite, Protect, Private } from './dot'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-dark-green text-lighter-green font-body">
      <div className="flex w-full justify-between">
        <div className="flex justify-center">
          <Image
            src="/logo_alt.svg"
            alt="Sarus Logo"
            width={60}
            height={60}
            priority
            className="pt-2"
          />
          <div className="font-display font-bold text-lg py-5">
            <a href="http://sarus.tech/">Sarus</a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-lg p-5"><a>Get Started</a></div>
          <div className="text-lg p-5"><a href="https://docs.rs/qrlew/latest/qrlew/">Docs</a></div>
          <div className="text-lg p-5"><FontAwesomeIcon icon={faGithub} size="xl"/><a className="ml-3" href="https://github.com/Qrlew">Github</a></div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center text-light-green py-10 z-10">
        <div className="w-full max-w-7xl text-center">
          <h1 className="font-serif text-9xl my-9"><span className="text-lightest-green">Qrlew</span> framework</h1>
          <p className="font-sans text-2xl my-3">Open source SQL manipulation framework written in Rust</p>
        </div>
        <div className="w-80 flex justify-between py-5 content-center">
          <GitHub/>
          <Twitter/>
        </div>
      </div>
      <div className="w-full flex flex-col items-center text-lighter-green py-10 z-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl my-3">What is Qrlew?</h2>
          <p className="text-xl my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="w-full max-w-7xl flex items-center flex-row">
          <div className="basis-1/3 p-3">
            <h3 className="text-3xl my-3">SQL Query Intermediate Representation</h3>   
            <p className="text-xl my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="basis-1/3 p-3">
            <h3 className="text-3xl my-3">Type Inference Engine</h3>   
            <p className="text-xl my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="basis-1/3 p-3">
            <h3 className="text-3xl my-3">Differantial Privacy compiler</h3>   
            <p className="text-xl my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-main-green text-lighter-green py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl my-3">Why Qrlew?</h2>
          <p className="text-xl my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="text-xl my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl my-3">Where is it Going?</h2>
          <p className="text-xl my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className="text-xl my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-main-red text-lighter-red py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="font-sans text-lg">Open source SQL manipulation framework written in Rust</p>
        </div>
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
            <FontAwesomeIcon icon={faArrowRight} size="xl"/>
          </div>
          <div className="flex flex-col basis-2/5 p-3 items-center">
            <Rewrite/>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-light-red text-lightest-red py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl">Output SQL</h2>
          <p className="font-sans text-lg">After the intermediate representation has been rewritten</p>
        </div>
        <div className="w-full max-w-7xl flex flex-row items-center">
          <div className="basis-2/5 p-3">
            <Rust>
{`use sqlparser::ast::Query;

let query = Query::from(&relation);`}</Rust>
          </div>
          <div className="flex flex-col basis-1/5 p-3 items-center">
            <FontAwesomeIcon icon={faArrowRight} size="xl"/>
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
      </div>
      <div className="w-full flex flex-col items-center bg-lighter-red text-dark-red py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl">Track the protected entity accross SQL queries</h2>
          <p className="text-xl my-3">Open source SQL manipulation framework written in Rust</p>
        </div>
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
).unwrap();`}</Rust>
          </div>
          <div className="p-3">
            <FontAwesomeIcon icon={faArrowDown} size="xl"/>
          </div>
          <div className="w-full p-3">
            <Protect/>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-light-green text-lighter-green py-10">
        <div className="w-full max-w-7xl">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="text-xl my-3">Open source SQL manipulation framework written in Rust</p>
        </div>
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
).unwrap();`}</Rust>
          </div>
          <div className="p-3">
            <FontAwesomeIcon icon={faArrowDown} size="xl"/>
          </div>
          <div className="w-full p-3">
            <Private/>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-lighter-green text-main-green py-10">
        <div className="w-full max-w-7xl">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="text-xl my-3">Open source SQL manipulation framework written in Rust</p>
        </div>
      </div>
    </main>
  )
}
