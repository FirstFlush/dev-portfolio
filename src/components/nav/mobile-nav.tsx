import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverBackdrop,
} from '@headlessui/react'
import { links } from '@/data/links'
import { ChevronDownIcon, CloseIcon, ArrowDownIcon } from '../icons/icons'
import MobileNavItem from './mobile-nav-item'

const MobileNavigation = (
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) => {
  return (
    <Popover {...props}>
      <PopoverButton className="cursor-pointer group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            {/* <MobileNavItem href="/">Home</MobileNavItem> */}
            <MobileNavItem href="/bio">Bio</MobileNavItem>
            <MobileNavItem href="/blog">Blog</MobileNavItem>
            <MobileNavItem href="/projects">Projects</MobileNavItem>
            <MobileNavItem href="/street-ninja">Street Ninja</MobileNavItem>
            <MobileNavItem download href={links.resume}>
              Résumé <ArrowDownIcon className="ml-1" />
            </MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

export default MobileNavigation
