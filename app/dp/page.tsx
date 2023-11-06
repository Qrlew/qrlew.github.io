import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link, Section, SubSection, Title, H1, H2, P } from '@/app/components'
import Playground from '@/app/dp/playground'


export default async function Page() {
  return (
    <React.Fragment>
    <Section>
      <H1>Qrlew <span className="text-light-green">Viewer</span></H1>
      <SubSection>
        <H2>Simple Dataset and Query</H2>
        <Playground dataset={
`{
  "tables":[
    {
      "name": "data_table",
      "path": ["schema", "data_table"],
      "schema": { "fields": [
        {"name": "a", "data_type": "Float"},
        {"name": "b", "data_type": "Integer"}
      ]},
      "size": 1000
    }
  ]
}`
        } query={
`SELECT * FROM data_table`
        } dark_mode={true}></Playground>
        <P>Qrlew is an <Link href="https://github.com/Qrlew">open source library</Link> that
          aims to parse and compile SQL queries into an <Link href="https://en.wikipedia.org/wiki/Intermediate_representation">Intermediate Representation (IR)</Link> that
          is well-suited for various rewriting tasks.
          Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</P>
      </SubSection>
    </Section>
    <Section color="main-green">
      <SubSection>
        <H2>Query with Join</H2>
        <Playground dataset={
`{
  "tables":[
    {
      "name": "data_table",
      "path": ["schema", "data_table"],
      "schema": { "fields": [
        {"name": "a", "data_type": "Float"},
        {"name": "b", "data_type": "Integer"}
      ]},
      "size": 1000
    }
  ]
}`
        } query={
`SELECT * FROM data_table`
        } dark_mode={true}></Playground>
        <P>Qrlew is an <Link href="https://github.com/Qrlew">open source library</Link> that
          aims to parse and compile SQL queries into an <Link href="https://en.wikipedia.org/wiki/Intermediate_representation">Intermediate Representation (IR)</Link> that
          is well-suited for various rewriting tasks.
          Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</P>
      </SubSection>
    </Section>
    <Section color="light-green">
      <SubSection>
        <H2>Query with Join</H2>
        <Playground dataset={
`{
  "tables":[
    {
      "name": "data_table",
      "path": ["schema", "data_table"],
      "schema": { "fields": [
        {"name": "a", "data_type": "Float"},
        {"name": "b", "data_type": "Integer"}
      ]},
      "size": 1000
    }
  ]
}`
        } query={
`SELECT * FROM data_table`
        } dark_mode={true}></Playground>
        <P>Qrlew is an <Link href="https://github.com/Qrlew">open source library</Link> that
          aims to parse and compile SQL queries into an <Link href="https://en.wikipedia.org/wiki/Intermediate_representation">Intermediate Representation (IR)</Link> that
          is well-suited for various rewriting tasks.
          Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</P>
      </SubSection>
    </Section>
    <Section color="lighter-green">
      <SubSection>
        <H2>Query with Join</H2>
        <Playground dataset={
`{
  "tables":[
    {
      "name": "data_table",
      "path": ["schema", "data_table"],
      "schema": { "fields": [
        {"name": "a", "data_type": "Float"},
        {"name": "b", "data_type": "Integer"}
      ]},
      "size": 1000
    }
  ]
}`
        } query={
`SELECT * FROM data_table`
        } dark_mode={false}></Playground>
        <P>Qrlew is an <Link href="https://github.com/Qrlew">open source library</Link> that
          aims to parse and compile SQL queries into an <Link href="https://en.wikipedia.org/wiki/Intermediate_representation">Intermediate Representation (IR)</Link> that
          is well-suited for various rewriting tasks.
          Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</P>
      </SubSection>
    </Section>
  </React.Fragment>
  )
}
