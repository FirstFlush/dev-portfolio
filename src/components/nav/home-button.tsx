import { HomeIcon } from '../icons/icons'
import Link from 'next/link'


const HomeButton = () => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className='pointer-events-auto'
    >
      <button
        type="button"
        aria-label="home"
        className="group cursor-pointer group rounded-full bg-white/90 hover:bg-zinc-100 dark:hover:bg-zinc-800/90 px-2 py-2 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        >
        <HomeIcon className="text-zinc-500 dark:text-teal-400 h-6 w-6 group-hover:fill-zinc-200" />
      </button>
    </Link>
  )
}

export default HomeButton;