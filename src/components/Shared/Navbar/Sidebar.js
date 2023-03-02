import React, { useState } from 'react';
import { HiHome } from 'react-icons/hi'
import { BiSort } from 'react-icons/bi'
import { BsCaretDownFill, BsInfoCircleFill, BsUiChecksGrid } from 'react-icons/bs'
import { RiGamepadFill } from 'react-icons/ri'
import { FaBook } from 'react-icons/fa'

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    if (openDropdown === false) {
      setOpenDropdown(true)
    }
    if (openDropdown === true) {
      setOpenDropdown(false)
    }
  }
  return (
    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul className="space-y-2">
        <li>
          <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiHome className='text-2xl' />
            <span className="ml-3">Home</span>
          </a>
        </li>

        <li>
          <a href="#" className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            onClick={toggleDropdown}
          >
            <BiSort className="text-2xl" />
            <span className="flex-1 ml-3 whitespace-nowrap">Exchange</span>
            <BsCaretDownFill />
          </a>

          <ul id="exchange" class={`py-2 space-y-2 ${openDropdown ? '' : 'hidden'}`}>
            <li>
              <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Swap</a>
            </li>
            <li>
              <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Limit</a>
            </li>
            <li>
              <a href="#" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Futures</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <BsUiChecksGrid className='text-xl' />
            <span className="flex-1 ml-3 whitespace-nowrap">Earn</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <RiGamepadFill className='text-2xl' />
            <span className="flex-1 ml-3 whitespace-nowrap">Pad</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <FaBook className="text-xl" />
            <span className="flex-1 ml-3 whitespace-nowrap">Docs</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <BsInfoCircleFill className='text-2xl' />
            <span className="flex-1 ml-3 whitespace-nowrap">Helps</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;