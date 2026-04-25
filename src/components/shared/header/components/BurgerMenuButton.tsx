// styles
import { cn } from "@/utils/cn";

interface BurgerMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenuButton = ({
  isMenuOpen,
  toggleMenu,
}: BurgerMenuButtonProps) => {
  const burgerLines = [
    "rotate-45 translate-y-3",
    "opacity-0",
    "-rotate-45 -translate-y-3",
  ];

  return (
    <button
      onClick={toggleMenu}
      className={cn("grid w-10 grid-cols-1 gap-2", "lg:hidden")}
    >
      {burgerLines.map((line) => (
        <span
          key={line}
          className={cn(
            "h-1 w-full transform rounded-md bg-black transition-transform-opacity duration-300 dark:bg-white",
            isMenuOpen && line,
          )}
        />
      ))}
    </button>
  );
};

export default BurgerMenuButton;
