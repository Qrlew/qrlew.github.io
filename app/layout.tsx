import './globals.css'

// Import custom fonts
import { Ovo, Red_Hat_Text, Red_Hat_Display, Fira_Code } from 'next/font/google'

const ovo = Ovo({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ovo',
})
const red_hat_text = Red_Hat_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red-hat-text',
})
const red_hat_display = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red-hat-display',
})
const fira_code = Fira_Code({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-fira-code',
})

export const metadata = {
  title: 'Qrlew SQL Framework',
  description: 'Manipulate complex SQL queries as simple composed computation blocks',
}

// Setup font awesoms
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Setup Highlight.js
import 'highlight.js/styles/github-dark.css';

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

// Setup the app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ovo.variable} ${red_hat_text.variable} ${red_hat_display.variable} ${fira_code.variable} overflow-x-clip`}>
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
              <div className="text-lg p-5"><a href="https://qrlew.readthedocs.io/en/latest/">Documentation</a></div>
              <div className="text-lg p-5"><a href="https://qrlew.readthedocs.io/en/latest/tutorials/getting_started.html">Getting Started</a></div>
              <div className="text-lg p-5"><a href="https://qrlew.readthedocs.io/en/latest/api.html">API Reference</a></div>
              <div className="text-lg py-5 px-3"><a className="ml-3" href="https://github.com/Qrlew"><FontAwesomeIcon icon={faGithub} size="xl"/></a></div>
              <div className="text-lg py-5 px-3"><a className="ml-3" href="https://discord.gg/JbvSPgyp"><FontAwesomeIcon icon={faDiscord} size="xl" /></a></div>
              <div className="text-lg py-5 px-3"><a className="ml-3" href="https://x.com/sarus_tech"><FontAwesomeIcon icon={faTwitter} size="xl" /></a></div>
            </div>
          </div>
          {children}
          <div className="w-full flex flex-col items-center bg-dark text-lighter-green py-10 z-10">
            <div className="w-full max-w-7xl text-sm py-1 text-[#999999]">Qrlew project is licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
              you may not use it except in compliance with the License.
              You may obtain a copy of the License at
            </div>
            <div className="w-full max-w-7xl text-sm py-1 text-[#999999]">
              <a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a>
            </div>
            <div className="w-full max-w-7xl text-sm py-1 text-[#999999]">Unless required by applicable law or agreed to in writing, software
              distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
              WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
              See the License for the specific language governing permissions and
              limitations under the License.
            </div>
          </div>
          <div className="w-full flex justify-center bg-dark">
            <div className="font-display text-lg py-5">
              Copyright 2023
            </div>
            <Image
              src="/logo_alt.svg"
              alt="Sarus Logo"
              width={60}
              height={60}
              priority
              className="pt-2"
            />
            <div className="font-display text-lg py-5">
              <a href="http://sarus.tech/" className="font-bold">Sarus</a> Technologies
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
