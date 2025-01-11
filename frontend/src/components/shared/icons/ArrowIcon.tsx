// styles
import { cn } from "@/utils/cn";

interface ArrowIconProps {
  className: string;
}

const ArrowIcon = ({ className }: ArrowIconProps) => {
  return (
    <svg
      className={cn("fill-primary", className)}
      viewBox="0 0 101 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.585785 13.5858C-0.195259 14.3668 -0.195259 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0947 16.1421 26.3137L4.82843 15L16.1421 3.68628C16.9232 2.90524 16.9232 1.63891 16.1421 0.857857C15.3611 0.0768081 14.0948 0.076808 13.3137 0.857857L0.585785 13.5858ZM101 13L2 13L2 17L101 17L101 13Z" />
    </svg>
  );
};

export default ArrowIcon;
