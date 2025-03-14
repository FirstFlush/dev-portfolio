import NavItem from "./nav-item";
import { ArrowDownIcon } from "../icons/icons";

const DesktopNavigation = (props: React.ComponentPropsWithoutRef<'nav'>) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/bio">Bio</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem download href="/resume.pdf">
          Résumé <ArrowDownIcon className="ml-1"/>
        </NavItem>
      </ul>
    </nav>
  )
}

export default DesktopNavigation;