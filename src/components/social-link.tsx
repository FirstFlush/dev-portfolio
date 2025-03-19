import Link from "next/link"
import React from "react"
import clsx from "clsx"

interface SocialLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
    icon: React.ComponentType<{ className?: string}>
    label?: string
}

function SocialLink({
  className,
  href,
  children,
  label,
  icon: Icon,
}: SocialLinkProps) {
  return (
    <span className={clsx('flex', className)}>
      <Link
        href={href}
        aria-label={label}
        target="_blank" rel="noopener noreferrer"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-800 dark:fill-zinc-400 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </span>
  )
}


// const SocialLink = ({ icon: Icon, children, ...props }: SocialLinkProps) => {

//   return (
//     <Link target="_blank" rel="noopener noreferrer" className="group -m-1 p-1" {...props}>
//       <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
//     </Link>
//   )
// }

export default SocialLink;
