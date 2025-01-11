// hooks
// import { Link } from "@/i18n/routing";
import TransitionLink from "../../TransitionLink/TransitionLink";

interface NavBarDesktopProps {
  navbar: {
    text: string;
    href: string;
  }[];
}
const NavBarDesktop = ({ navbar }: NavBarDesktopProps) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-24 xl:gap-32 2xl:gap-44">
        {navbar.map((item, index) => (
          <li key={index}>
            <TransitionLink
              className="inline-block text-xl transition-opacity duration-300 lg:hover:opacity-60 2xl:text-2xl"
              href={item.href}
            >
              {item.text}
            </TransitionLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarDesktop;
{
  /* <Link
              className="inline-block text-xl transition-opacity duration-300 lg:hover:opacity-60 2xl:text-2xl"
              href={item.href}
            >
              {item.text}
            </Link> */
}
