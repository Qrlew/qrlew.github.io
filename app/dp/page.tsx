import React from 'react'
import { GitHub, Twitter } from '@/app/buttons'
import { Link, Section, SubSection, Title, H1, H2, P } from '@/app/components'
import Playground from '@/app/dp/playground'


export default async function Page() {
  return (
    <React.Fragment>
    <Section>
      <H1>Qrlew <span className="text-light-green">Playground</span></H1>
      <div className="w-72 flex justify-between py-5 content-center">
         <GitHub />
         <Twitter />
      </div>
      <div className="w-full max-w-[2048px] p-3">
        <H2>Simple Query Rewriting with Differential Privacy</H2>
        <P>Qrlew is an <Link href="https://github.com/Qrlew">open source library</Link> that
          aims to parse and compile SQL queries into an <Link href="https://en.wikipedia.org/wiki/Intermediate_representation">Intermediate Representation (IR)</Link> that
          is well-suited for various rewriting tasks.
          Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</P>
        <P>In this playground you can change parameters interactively and see how Qrlew represent your query and rewrite it into a Differentially Private one.
        </P>
        <Playground dataset={
`{
  "tables":[
     {
        "name":"user_table",
        "path":[
           "schema",
           "user_table"
        ],
        "schema":{
           "fields":[
              { "name":"id",  "data_type":"Integer", "constraint": "Unique" },
              { "name":"name", "data_type":"Text" },
              { "name":"age", "data_type":"Integer" },
              { "name":"weight", "data_type":"Float" }
           ]
        },
        "size":10000
     },
     {
        "name":"action_table",
        "path":[
           "schema",
           "action_table"
        ],
        "schema":{
           "fields":[
              { "name":"action", "data_type":"Text" },
              { "name":"user_id", "data_type":"Integer" },
              { "name":"duration", "data_type":"Float" }
           ]
        },
        "size":10000
     }
  ]
}`
        } query={
`SELECT sum(duration) FROM action_table WHERE duration > 0 AND duration < 24`
        } synthetic_data={
`[
  [ "user_table", "synthetic_user_table" ],
  [ "action_table", "synthetic_action_table" ]
]`
        } protected_entity={
`[
  ["user_table",[],"id"],
  ["action_table",[["user_id","user_table","id"]],"id"]
]`
        } epsilon={1} delta={1e-5} dark_mode={true}></Playground>
      </div>
    </Section>
  </React.Fragment>
  )
}
