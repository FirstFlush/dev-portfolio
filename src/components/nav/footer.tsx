import Link from 'next/link'
import { ContainerInner, ContainerOuter } from '@/components/container'
import React from 'react'
import { links } from '@/data/links'
import { ArrowDownIcon } from '../icons/icons'

interface NavLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  href: string
  children: React.ReactNode
}

function NavLink({
  href,
  children,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 lg:mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 py-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/bio">Bio</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink download href={links.resume}>Résumé <ArrowDownIcon className="ml-1"/></NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Michael Pearce. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
