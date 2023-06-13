import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GitHub, Twitter } from './buttons'
import { SQL, Rust, Python } from './code'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-main-green text-lighter-green font-body">
      <div className="flex w-full justify-between bg-dark-green">
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
      <div className="w-full flex flex-col items-center bg-dark-green text-light-green py-10">
        <div className="w-full max-w-7xl text-center">
          <h1 className="font-serif text-9xl"><span className="text-lightest-green">Qrlew</span> framework</h1>
          <p className="font-sans text-2xl">Open source SQL manipulation framework written in Rust</p>
        </div>
        <div className="w-80 flex justify-between py-10 content-center">
          <GitHub/>
          <Twitter/>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-dark-green text-lighter-green py-10">
        <div className="w-full max-w-7xl">
          <h2 className="font-serif text-4xl">What is Qrlew?</h2>
          <SQL>
            SELECT * FROM
            table</SQL>
          <Python>
            def run():
              return None
          </Python>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-main-green text-lighter-green py-10">
        <div className="w-full max-w-7xl">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="font-sans text-2xl">Open source SQL manipulation framework written in Rust</p>
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
      
    </main>
  )
}
