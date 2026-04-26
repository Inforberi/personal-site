// hooks
import Image from "next/image";

// image
import zustand from "/public/icons/zustand.svg";

interface ZustandProps {
  className: string;
}

const Zustand = ({ className }: ZustandProps) => {
  return <Image className={className} src={zustand} alt="" />;
};

export default Zustand;
