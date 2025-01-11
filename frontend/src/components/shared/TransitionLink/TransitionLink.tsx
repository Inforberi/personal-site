"use client";

// hooks
import { Link, useRouter, usePathname } from "@/i18n/routing";

// types
import { useCallback, type ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

interface TransitionLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  children: React.ReactNode;
}
const TransitionLink = ({ href, children, ...props }: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const app = document.querySelector(".app");
      if (!app || pathname === href) return;

      app.classList.remove("page-transition");

      setTimeout(() => {
        router.push(href);
      }, 500);
    },
    [href, pathname, router],
  );

  return (
    <Link onClick={handleTransition} {...props} href={href}>
      {children}
    </Link>
  );
};

export default TransitionLink;
