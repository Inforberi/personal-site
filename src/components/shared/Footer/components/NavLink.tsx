// styles
import { cn } from "@/utils/cn";

// hooks
import TransitionLink from "../../TransitionLink/TransitionLink";

interface NavLinkProps {
  navList: NavList[];
}

interface NavList {
  title: string;
  href: string;
}

const NavLink = ({ navList }: NavLinkProps) => {
  return (
    <ul
      className={cn("hidden", "lg:flex lg:flex-col lg:items-center lg:gap-7")}
    >
      {navList.map((nav, index) => (
        <li key={index}>
          <TransitionLink
            className={cn(
              "transition-opacity duration-300 lg:text-2xl lg:hover:opacity-60",
            )}
            href={nav.href}
          >
            {nav.title}
          </TransitionLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLink;
