import { type Metadata } from 'next'
import { projects } from './projects'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/simple-layout'
import clsx from 'clsx'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A mix of open-source, professional, personal, and experimental projects. Each one pushing my skills further.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I’ve Built"
      intro="A mix of open-source, professional, personal, and experimental projects. Each one pushing my skills further."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name} className={clsx(
            "dark:bg-zinc-800/50 bg-zinc-100/75",
            "sm:hover:dark:bg-zinc-800/50 sm:dark:bg-inherit sm:hover:bg-zinc-100/75 sm:bg-inherit",
            "px-4 py-8 transition rounded-xl sm:rounded-2xl",
          )}>
            <div className='z-10 flex gap-x-3 items-center'>
              {project.logos.map((Logo, i) => (
                <Logo size={45} key={i} />
              ))}
              
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <div>{project.name}</div>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <div className={clsx(
              "relative z-10 mt-6 flex text-sm font-medium",
              "sm:text-zinc-400 sm:dark:text-zinc-200",
              "text-teal-500",
            )}>

            <div className="ml-2 z-100">
              {project.links.map((link) => (
                <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.href} className="cursor-pointer flex items-center gap-2 transition dark:hover:text-teal-500 hover:text-teal-700 hover:font-semibold dark:hover:font-normal">
                  <link.icon size={14}/>
                  <div>{link.label}</div>
                </a>
              ))}

            </div>

            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
