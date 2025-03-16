import SocialLink from '@/components/social-link'
import { Container } from '@/components/container'
import {
  GitHubIcon,
  LinkedInIcon,
  StreetNinjaIcon,
} from '@/components/icons/social-icons'
import Newsletter from '@/components/newsletter'
// import Photos from '@/components/photos'
import { links } from '@/data/links'
import { getAllArticles } from '@/utils/articles'
import JobHistory from '@/components/history'
import BlogSnippet from '@/components/blog-snippet'


export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Non-Profit Founder & Full-Stack Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Michael Pearce, a full-stack developer and the founder of Street Ninja, a non-profit project that helps vulnerable people find essential resources. I specialize in building practical, impact-driven software that solves real-world problems.
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
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <BlogSnippet key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <JobHistory />
          </div>
        </div>
      </Container>
    </>
  )
}
