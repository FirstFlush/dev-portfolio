import DesktopNavigation from "./desktop-nav";
import MobileNavigation from "./mobile-nav";
import ThemeToggle from "./theme-toggle";
import { Container } from "@/components/container";
import HomeButton from "./home-button";

const Header = () => {

  return (
    <header
      className="relative z-50 flex flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <Container className="top-0 mt-16 w-full">
        <div className="relative flex gap-4">
          <div className="flex flex-1">
            <HomeButton />
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
  );
}

export default Header;