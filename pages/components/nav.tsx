import { NextPage } from "next";
import Link from "next/link";
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';

const Nav: NextPage = () => {
    return (
      <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="w-screen border-b-2 border-gray-100">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center md:justify-start md:space-x-10">
              <div className="flex justify-start">
              <Link href="/">
                  <a>
                    <span className="sr-only">Premium Bravo</span>
                    <img
                      className="h-20 w-auto sm:h-20"
                      src="/logo.svg"
                      alt="Premium Bravo"
                    />
                    </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-premiumGreen">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
             
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link href="/login">
                  <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
                </Link>
                <Link
                  href="/register"
                >
                  <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-premiumGreen hover:bg-premiumGreen">Sign up</a>
                </Link>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/logo.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-premiumGreen">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                 
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div>
                    <Link
                      href="/register"
                    >
                      <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-premiumGreen hover:black"></a>Sign up
                    </Link>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{' '}
                      <Link href="/login">
                        <a className="text-premiumGreen hover:text-white">Sign in</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
      )
}

export default Nav;