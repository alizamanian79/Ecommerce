/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UraBvvtfwQT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <>
     <div className="relative">
      <nav className="justify-between items-center py-4 px-8 bg-white md:hidden lg:flex ">
        <div className="font-bold text-xl">EBUY COMMERCE</div>
        <ul className="hidden md:flex space-x-8">
          <li className="text-gray-600 hover:text-black" >
            HOME
          </li>
          <li className="text-gray-600 hover:text-black" >
            ABOUT
          </li>
          <li className="text-gray-600 hover:text-black" >
            SHOP
          </li>
          <li className="text-gray-600 hover:text-black" >
            VENDORS
          </li>
          <li className="text-gray-600 hover:text-black" >
            BLOG
          </li>
          <li className="text-gray-600 hover:text-black" >
            CONTACT
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <SearchIcon className="text-gray-600 hover:text-black" />
          <UserIcon className="text-gray-600 hover:text-black" />
          <HeartIcon className="text-gray-600 hover:text-black" />
          <div className="relative">
            <ShoppingCartIcon className="text-gray-600 hover:text-black" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">5</span>
          </div>
        </div>
      </nav>


    </div>


    <nav className="md:flex sm:flex lg:hidden mf:flex-wrap items-center justify-between">
      <div className="flex items-center w-1/2">
        <span className="text-xl font-bold">BUY</span>
      </div>
      <button aria-label="Menu" className="text-2xl w-1/2">
        ☰
      </button>
    </nav>

    </>
   
  )
}

function ChevronLeftIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function HeartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UserIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
