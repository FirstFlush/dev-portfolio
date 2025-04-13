import { type Metadata } from 'next'
import { projects } from './projects'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/simple-layout'
import { LinkIcon } from '@/components/icons/icons'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A mix of open-source, personal, and experimental projects—each one pushing my skills further.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I’ve Built"
      intro="A mix of open-source, personal, and experimental projects—each one pushing my skills further."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className='z-10 flex gap-x-3 items-center'>
              {project.logos.map((Logo, i) => (
                <Logo size={50} key={i} />
              ))}
              
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link target="_blank" rel="noopener noreferrer" href={project.links[0].href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className={clsx(
              "relative z-10 mt-6 flex text-sm font-medium",
              " transition group-hover:text-teal-500 ",
              "sm:text-zinc-400 sm:dark:text-zinc-200",
              "text-teal-500",
            )}>

            <div className="ml-2">
              {project.links.map((link) => (
                <div key={link.href} className="flex items-center gap-2">
                  <link.icon size={14}/>
                  <div>{link.label}</div>
                </div>
              ))}

            </div>

            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
