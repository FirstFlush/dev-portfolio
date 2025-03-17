import { type Metadata } from 'next'
import TiltedImage from '@/components/tilted-image'
import SocialLink from '@/components/social-link'
import { MailIcon } from '@/components/icons/icons'
import { links } from '@/data/links'
import { Container } from '@/components/container'
import {
  GitHubIcon,
  LinkedInIcon,
  StreetNinjaIcon,
} from '@/components/icons/social-icons'
import restaurantImage from '@/images/photos/restaurant_smile_cropped.webp'


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
            <TiltedImage
              src={restaurantImage}
              alt="Me at a restaurant"
            />

          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Who I Am & What I Do
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            I'm a self-taught full-stack developer with a passion for building software that solves real-world problems. My main stack is Python and TypeScript, but I’ve also been diving into C# lately. Before tech, I worked in construction, so I know how deeply satisfying it is to build things from the ground up—whether it’s with concrete or code.
          </p>
          <p>
            I started Street Ninja, my non-profit, to help people on Vancouver’s Downtown Eastside find essential resources when they need them. It’s an SMS-based tool designed to help people living on the street quickly locate shelters, food services, washrooms, public wifi, and other critical resources—without hassle. The guiding philosophy behind Street Ninja is <span className="font-semibold dark:text-zinc-300">immediate usefulness</span>. It’s not a solution to homelessness, and it won’t turn someone’s life around by itself. But it can help them find what they need <span className="font-semibold dark:text-zinc-300">right now</span>, so they can keep pushing forward.
          </p>
          <p>
            What is currently a local, Vancouver-based project is something I believe every city could use. My long-term goal is to see it expand beyond Vancouver.
          </p>
          <p>
            Beyond that, I have a strong hobbyist interest in cybersecurity (I enjoy CTFs on TryHackMe and VulnHub) and messing around with microcontrollers—though I try not to burn my house down in the process.
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
            <SocialLink href={links.github} icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href={links.linkedin} icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href={links.street_ninja} icon={StreetNinjaIcon} className="mt-4">
              Street Ninja
            </SocialLink>
            <SocialLink
              href={`mailto:${links.email}`}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {links.email}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
