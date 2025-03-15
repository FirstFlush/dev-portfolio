import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/container'
import {
  GitHubIcon,
  LinkedInIcon,
  StreetNinjaIcon,
} from '@/components/icons/social-icons'
import portraitImage from '@/images/photos/mountain_squat.webp'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Bio',
  description:
    "I'm Michael Pearce, a full-stack developer in Vancouver, building software that solves real problems.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Michael Pearce, a full-stack developer in Vancouver, building software that solves real problems.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            I'm a self-taught full-stack developer with a passion for building software that solves real-world problems. My main stack is Python and TypeScript, but I’ve also been diving into C# lately. Before tech, I worked in construction, so I know what it’s like to build things from the ground up—whether it’s with concrete or code.
          </p>
          <p>
            I’m the founder of Street Ninja, a non-profit project designed to help vulnerable people find essential resources in real-time. Beyond that, I have a strong hobbyist interest in cybersecurity (I enjoy CTFs on TryHackMe and VulnHub) and messing around with microcontrollers—though I try not to burn my house down in the process.
          </p>
          <p>
            When I’m not coding, you’ll probably find me cooking, traveling, training calisthenics, or hanging out with my dog. I live in Vancouver, Canada, so like most Vancouverites, I pretend to love the great outdoors. What I truly love, though, is creating—whether it's a new dish in the kitchen, a personal coding project, or figuring out how to make something work in a way it wasn’t intended to.
          </p>
          <p>
            I believe in constant learning and pushing boundaries, which is why I’m always exploring new tech like blockchain and experimenting with different tools. My goal? To keep building, keep growing, and find the right team where I can make an impact.
          </p>

          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/firstflush/" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/michael-pearce-340279286/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://streetninja.ca/" icon={StreetNinjaIcon} className="mt-4">
              Street Ninja
            </SocialLink>
            <SocialLink
              href="michaelpearce604@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              michaelpearce604@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
