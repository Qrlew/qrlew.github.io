import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GitHub, Twitter } from './buttons'
import { SQL, Rust, Python } from './code'
import Crane from './crane'

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
          <h1 className="font-serif text-9xl my-3"><span className="text-lightest-green">Qrlew</span> framework</h1>
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
          <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="w-full max-w-7xl flex items-center flex-row">
          <div className="basis-1/3 p-3">
            <h3 className="text-3xl my-3">SQL Query Intermediate Representation</h3>   
            <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="basis-1/3 p-3">
            <h3 className="text-3xl my-3">Type Inference Engine</h3>   
            <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="basis-1/3 p-3">
            <h3 className="text-3xl my-3">Differantial Privacy compiler</h3>   
            <p className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-main-green text-lighter-green py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="font-sans text-2xl">Open source SQL manipulation framework written in Rust</p>
        </div>
        <div className="w-full max-w-7xl flex items-center flex-row">
          <div className="basis-1/3 p-3">
            <SQL>{`SELECT * FROM table;`}</SQL>
          </div>
          <div className="basis-2/3 p-3">
            <Python>
{`def run():
  return None`}
            </Python>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-main-red text-lighter-red py-10">
        <div className="w-full max-w-7xl">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="font-sans text-2xl">Open source SQL manipulation framework written in Rust</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-light-red text-lightest-red py-10">
        <div className="w-full max-w-7xl">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="font-sans text-2xl">Open source SQL manipulation framework written in Rust</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-lighter-red text-dark-red py-10">
        <div className="w-full max-w-7xl">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="font-sans text-2xl">Open source SQL manipulation framework written in Rust</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-light-green text-lighter-green py-10">
        <div className="w-full max-w-7xl">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="font-sans text-2xl">Open source SQL manipulation framework written in Rust</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-lighter-green text-main-green py-10">
        <div className="w-full max-w-7xl">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="font-sans text-2xl">Open source SQL manipulation framework written in Rust</p>
        </div>
      </div>
      <div className="relative w-full h-[500px] text-light-green">
        <h1 className="absolute font-serif text-7xl left-[20%] bottom-[200px] z-10">Made by Sarus with</h1>
        <Crane/>
      </div>
    </main>
  )
}
