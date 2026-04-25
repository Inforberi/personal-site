// styles
import { cn } from "@/utils/cn";

// icons
import GithubIcon from "./../icons/GithubIcon";
import TelegramIcon from "./../icons/TelegramIcon";
import WhatsappIcon from "./../icons/WhatsappIcon";

const icons = {
  githubIcon: GithubIcon,
  telegramIcon: TelegramIcon,
  whatsappIcon: WhatsappIcon,
};

interface SocialIconProps {
  ariaLabel: string;
  href: string;
  icon: "githubIcon" | "telegramIcon" | "whatsappIcon";
}

const SocialIcon = ({ icon, href, ariaLabel }: SocialIconProps) => {
  const IconComponent = icons[icon] || null;

  return (
    <li className={cn("transform duration-500 no-touch:hover:scale-110")}>
      <a href={href} aria-label={ariaLabel} target="_blank" title={ariaLabel}>
        <IconComponent
          className={cn("h-14 w-14", "lg:h-16 lg:w-16", "2xl:h-22 2xl:w-22")}
        />
      </a>
    </li>
  );
};

export default SocialIcon;
