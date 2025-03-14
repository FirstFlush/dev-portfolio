import { PopoverButton } from "@headlessui/react"
import Link from "next/link"

interface MobileNavItemProps extends React.ComponentPropsWithoutRef<'a'> {
    href: string
    children: React.ReactNode
}

const MobileNavItem = ({ href, children, ...props}: MobileNavItemProps) => {
    return (
      <li>
        <PopoverButton as={Link} href={href} {...props} className="block py-2">
          {children}
        </PopoverButton>
      </li>
    )
  }
  
export default MobileNavItem;  