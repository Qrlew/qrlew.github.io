import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { SQL, Rust, Python, Shell } from '../code'
import { Rewrite, Protect, Private } from '../dot'
import Simple from './simple'

export default async function Page() {
  return (
    <div className="w-full flex flex-col items-center text-lighter-green py-10 z-10">
      <h1>Title</h1>
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
      <div className="w-full max-w-7xl flex items-center flex-row">
        <div className="basis-1/3 p-3">
          <h3 className="text-3xl my-3">SQL Query IR</h3>
          <p className="text-xl my-3">Qrlew transforms a SQL query into a combination of simple operations such as <code>Map</code>, <code>Reduce</code> and <code>Join</code> that are applied to  <code>Tables</code>.
            This representation simplifies the process of rewriting queries and reduces dependencies on the diverse range of syntactic constructs present in SQL.</p>
        </div>
        <div className="basis-1/3 p-3">
          <h3 className="text-3xl my-3">Type Inference Engine</h3>
          <p className="text-xl my-3">Differential Privacy (DP) guaranrtees are hard to obtain without destroying too much information.
            In <a href="https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf" className="text-lighter-red hover:text-light-red">many mechanisms</a> having prior bounds on values can
            improve the utility of DP results dramatically. By propagating types cleverly, Qrlew can returns bounds for all values.</p>
        </div>
        <div className="basis-1/3 p-3">
          <h3 className="text-3xl my-3">Differential Privacy compiler</h3>
          <p className="text-xl my-3">Qrlew can compile SQL queries into Differentially Private ones.
            The process is inspired by <a href="https://petsymposium.org/popets/2020/popets-2020-0025.pdf" className="text-lighter-red hover:text-light-red">Wilson et al. 2020</a>.
            The complexity of the compilation process makes Qrlew IR very useful at delivering clean, readable and reliable code.</p>
        </div>
      </div>
    </div>
  )
}
