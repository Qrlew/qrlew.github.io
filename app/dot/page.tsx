import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { SQL, Rust, Python, Shell } from '../code'
import { Rewrite, Protect, Private } from '../dot'
import Simple from './simple'

export default async function Page() {
  return (
    <React.Fragment>
    <div className="w-full flex flex-col items-center text-lighter-green py-10 z-10">
      <h1 className="font-serif text-7xl text-light-green my-9">Qrlew Viewer</h1>
      <div className="w-full max-w-7xl p-3">
        <h2 className="font-serif text-4xl my-3">Simple Dataset and Query</h2>
        <Simple dataset={
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
        } dark_mode={true}></Simple>
        <p className="text-xl my-3">Qrlew is an <a href="https://github.com/Qrlew" className="text-lighter-red hover:text-light-red">open source library</a> that
          aims to parse and compile SQL queries into an <a href="https://en.wikipedia.org/wiki/Intermediate_representation" className="text-lighter-red hover:text-light-red">Intermediate Representation (IR)</a> that
          is well-suited for various rewriting tasks.
          Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</p>
      </div>
    </div>
    <div className="w-full flex flex-col items-center bg-main-green text-lighter-green py-10">
      <div className="w-full max-w-7xl p-3">
        <h2 className="font-serif text-4xl my-3">Query with Join</h2>
        <Simple dataset={
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
        } dark_mode={true}></Simple>
        <p className="text-xl my-3">Qrlew is an <a href="https://github.com/Qrlew" className="text-lighter-red hover:text-light-red">open source library</a> that
          aims to parse and compile SQL queries into an <a href="https://en.wikipedia.org/wiki/Intermediate_representation" className="text-lighter-red hover:text-light-red">Intermediate Representation (IR)</a> that
          is well-suited for various rewriting tasks.
          Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</p>
      </div>
    </div>
    <div className="w-full flex flex-col items-center bg-light-green text-lighter-green py-10">
    <div className="w-full max-w-7xl p-3">
        <h2 className="font-serif text-4xl my-3">Query with Join</h2>
        <Simple dataset={
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
        } dark_mode={true}></Simple>
        <p className="text-xl my-3">Qrlew is an <a href="https://github.com/Qrlew" className="text-lighter-red hover:text-light-red">open source library</a> that
          aims to parse and compile SQL queries into an <a href="https://en.wikipedia.org/wiki/Intermediate_representation" className="text-lighter-red hover:text-light-red">Intermediate Representation (IR)</a> that
          is well-suited for various rewriting tasks.
          Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</p>
      </div>
    </div>
    <div className="w-full flex flex-col items-center bg-lighter-green text-main-green py-10">
      <div className="w-full max-w-7xl p-3">
        <h2 className="font-serif text-4xl my-3">Query with Join</h2>
        <Simple dataset={
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
        } dark_mode={false}></Simple>
        <p className="text-xl my-3">Qrlew is an <a href="https://github.com/Qrlew" className="text-lighter-red hover:text-light-red">open source library</a> that
          aims to parse and compile SQL queries into an <a href="https://en.wikipedia.org/wiki/Intermediate_representation" className="text-lighter-red hover:text-light-red">Intermediate Representation (IR)</a> that
          is well-suited for various rewriting tasks.
          Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</p>
      </div>
    </div>
  </React.Fragment>
  )
}
