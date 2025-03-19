import SocialLink from '@/components/social-link'
import { Container } from '@/components/container'
import {
  GitHubIcon,
  LinkedInIcon,
  StreetNinjaIcon,
} from '@/components/icons/social-icons'
import Link from 'next/link'
import TiltedImage from '@/components/tilted-image'
import mountainImage from '@/images/photos/mountain_squat.webp'
import { links } from '@/data/links'
import { getAllArticles } from '@/utils/articles'
import BlogSnippet from '@/components/blog-snippet'
// import Newsletter from '@/components/newsletter'
// import Photos from '@/components/photos'
// import JobHistory from '@/components/history'


export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4)

  return (
    <>

      <Container className="mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-0">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <TiltedImage
              src={mountainImage}
              alt="Me with mountains"
              loading="eager"
            />

          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 ">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Non-Profit Founder & Full-Stack Developer
          </h1>
          <div className="my-6 text-base text-zinc-600 dark:text-zinc-400">
            <p className="mb-2">
              I’m Michael Pearce, a full-stack developer and the founder of{' '}
              <Link
                className="link"
                href={links.street_ninja}
                target="_blank"
                rel="noopener noreferrer"
              >
                Street Ninja
              </Link>
              , a non-profit project that helps vulnerable people find essential
              resources. I specialize in building practical, impact-driven
              software that solves real-world problems.
            </p>
            <p>
              This is my developer portfolio—a place to showcase my projects, share what I’ve learned, and write about the things that interest me, from coding to cybersecurity to tech philosophy.
            </p>
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={links.github}
              label="My GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={links.linkedin}
              label="My Linkedin"
              icon={LinkedInIcon}
            />
            <SocialLink
              href={links.street_ninja}
              label="Street Ninja website"
              icon={StreetNinjaIcon}
            />
          </div>
        </div>
        </div>
        {/* <TiltedImage src={meImage} alt="Me" /> */}
      </Container>







      {/* <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Non-Profit Founder & Full-Stack Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Michael Pearce, a full-stack developer and the founder of{' '}
            <Link
              className="link"
              href="https://streetninja.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Street Ninja
            </Link>
            , a non-profit project that helps vulnerable people find essential
            resources. I specialize in building practical, impact-driven
            software that solves real-world problems.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={links.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={links.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href={links.street_ninja}
              aria-label="Street Ninja website"
              icon={StreetNinjaIcon}
            />
          </div>
        </div>
      </Container> */}
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <BlogSnippet key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter />
            <JobHistory /> */}
          </div>
        </div>
      </Container>
    </>
  )
}
