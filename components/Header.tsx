/** @jsx h */
import { Fragment, h } from 'preact'
import { tw } from '@twind'

const Desktop = () => {
  return (
    <section
      class={tw`hidden h-14 items-center justify-center 
    sm:hidden md:flex md:justify-start md:space-x-10`}
    >
      <a href='/'>
        <h1 class={tw`text-xl font-semibold text-gray-900 hover:underline`}>
          Arzivre
        </h1>
      </a>
      <div
        class={tw`hidden items-center justify-end 
      sm:hidden md:flex md:flex-1 lg:w-0'`}
      >
        <a
          href='/'
          class={tw`whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900`}
        >
          Home
        </a>
        <a
          href='/blog'
          class={tw`ml-8 whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900`}
        >
          Blog
        </a>
        <a
          href='/contact'
          class={tw`ml-8 whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900`}
        >
          Contact
        </a>
      </div>
    </section>
  )
}

const Mobile = () => {
  return (
    <section class={tw`flex items-baseline justify-between md:hidden`}>
      <a href='/'>
        <h1 class={tw`text-xl font-semibold text-gray-900 hover:underline`}>
          Arzivre
        </h1>
      </a>
      <div class={tw`flex items-center justify-end md:hidden md:flex-1 lg:w-0`}>
        <a
          href='/'
          class={tw`whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900`}
        >
          Home
        </a>
        <a
          href='/blog'
          class={tw`ml-8 whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900`}
        >
          Blog
        </a>
        <a
          href='/contact'
          class={tw`ml-8 whitespace-nowrap rounded-sm p-2 text-base font-medium text-gray-900 hover:bg-blue-200 hover:text-blue-900`}
        >
          Contact
        </a>
      </div>
    </section>
  )
}

const Header = () => {
  return (
    <header
      class={tw`sticky top-0 z-10 
      backdrop-blur-sm backdrop-filter 
      bg-gray-50 bg-opacity-10 bg-clip-padding  
      border border-gray-100 
      hover:shadow-md`}
    >
      <nav class={tw`container mx-auto px-4`}>
        <Desktop />
        <Mobile />
      </nav>
    </header>
  )
}

export default Header
