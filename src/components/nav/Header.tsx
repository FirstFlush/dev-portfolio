"use client";
import { usePathname } from "next/navigation";
import DesktopNavigation from "./desktop-nav";
import MobileNavigation from "./mobile-nav";
import ThemeToggle from "./theme-toggle";
import { Container } from "@/components/container";
import { Avatar, AvatarContainer } from "./avatar";

const Header = () => {
  const isHomePage = usePathname() === "/";

  return (
    <>
      <header
        className="relative z-50 flex flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        {/* {isHomePage && <div className="mt-16" />} */}
        <Container className="top-0 mt-16 w-full">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
                <AvatarContainer>
                  <Avatar large={false} />
                </AvatarContainer>
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <MobileNavigation className="md:hidden" />
              <DesktopNavigation className="hidden md:block" />
            </div>
            <div className="flex justify-end md:flex-1">
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;