// styles
import { cn } from "@/utils/cn";

// components
import SocialIcon from "./SocialIcon";

interface SocialListProps {
  className?: string;
}

interface Social {
  icon: "githubIcon" | "telegramIcon" | "whatsappIcon";
  href: string;
  ariaLabel: "Github" | "Telegram" | "WhatsApp";
}

const socials: Social[] = [
  {
    icon: "githubIcon",
    href: "https://github.com/Inforberi",
    ariaLabel: "Github",
  },
  {
    icon: "telegramIcon",
    href: "https://t.me/kn9jee",
    ariaLabel: "Telegram",
  },
  {
    icon: "whatsappIcon",
    href: "https://wa.me/89967987789",
    ariaLabel: "WhatsApp",
  },
];

const SocialList = ({ className }: SocialListProps) => {
  return (
    <ul className={cn("flex gap-7", "lg:gap-6", "2xl:gap-8", className)}>
      {socials.map((social, index) => (
        <SocialIcon
          href={social.href}
          ariaLabel={social.ariaLabel}
          key={index}
          icon={social.icon}
        />
      ))}
    </ul>
  );
};

export default SocialList;
