"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import clsx from "clsx"


interface NavItemProps extends React.ComponentPropsWithoutRef<'a'> {
    children: React.ReactNode
    href: string
}

const NavItem = ({ href, children, ...props }: NavItemProps) => {

  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400',
        )}
        {...props}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

export default NavItem;