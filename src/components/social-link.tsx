import Link from "next/link"
import React from "react"


interface SocialLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
    icon: React.ComponentType<{ className?: string}>
}

const SocialLink = ({ icon: Icon, ...props }: SocialLinkProps) => {

  return (
    <Link target="_blank" rel="noopener noreferrer" className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default SocialLink;
