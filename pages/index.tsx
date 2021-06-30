import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Nav from './components/nav';
import {
  ArrowSmDownIcon
} from '@heroicons/react/outline';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen py-2 overflow-hidden">
      <Nav />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="w-screen h-screen flex flex-wrap justify-center items-center bg-white bg-opacity-50 overflow-hidden">
            <div className="w-full max-w-screen-xl flex justify-between items-center">
                <div className="w-1/3 h-96 flex flex-wrap content-between">
                    <h6>PREMIUM BRAVO</h6>
                    <h1>Multidisciplinary solutions for your business.</h1>
                    <h2>PREMIUMBRAVO presents customized solutions for the benefit of its customers.</h2>
                    <Link href="/">
                      <a className="bg-premiumGreen rounded-tr-xl"><ArrowSmDownIcon className="h-6 w-6 m-2 text-white" /></a>
                    </Link>
                </div>
                <div className="w-1/3">
                    <img className="w-full" src="./background.png" alt="Premium Bravo" />
                </div>
                <div className="w-1/3 pl-10 h-96 flex flex-wrap content-end space-y-6">
                    <h6>WHAT WE DO?</h6>
                    <h1>There Was Any Question?</h1>
                    <Link href="/">
                      <a className="text-sm text-premiumGreen underline	font-semibold">THERE WAS ANY QUESTION</a>
                    </Link>
                </div>
            </div>
            <div className="w-full max-w-screen-xl flex flex-row flex-wrap justify-between items-center">
                <h2 className="w-full">We proudly work with</h2>
                <img src="/assets/companies/xerox-logo.png" className="w-32 filter grayscale" alt="xerox" />
                <img src="/assets/companies/loreal.png" className="w-32 filter grayscale" alt="loreal" />
                <img src="/assets/companies/aspen.png" className="w-32 filter grayscale" alt="aspen" />
                <img src="/assets/companies/cadbury.png" className="w-32 filter grayscale" alt="cadbury" />
                <img src="/assets/companies/bhg.png" className="w-32 filter grayscale" alt="bhg" />
            </div>
            <div className="w-16 h-32 bg-premiumGreen absolute rounded-l-full right-0 bottom-40"></div>
            <div className="w-16 h-32 bg-premiumGreen absolute rounded-r-full left-0 top-40"></div>
        </div>
        <div className="w-screen  bg-gray-100 p-20 flex justify-center" id="services">
            <div className="max-w-screen-xl">
                <h1>Explore Our Services</h1>
            </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://evolvesrio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/evolvesrio.png" alt="EvolvesRio Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

export default Home;