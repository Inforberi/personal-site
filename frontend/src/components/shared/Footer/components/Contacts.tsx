// styles
import { cn } from "@/utils/cn";

// components
import SocialList from "../../SocialList/SocialList";

const contacts = [
  {
    title: "+7 (996) 798-77-89",
    href: "tel:89967987789",
  },
  {
    title: "gmail.com",
    href: "mailto:tatarchuk.a.s.1997@gmail.com?subject=&amp;body=Здравствуйте!",
  },
];

const Contacts = () => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-start gap-6",
        "sm:gap-8",
        "2xl:gap-10",
      )}
    >
      <h3
        className={cn(
          "text-2xl font-semibold text-primary",
          "sm:text-3xl",
          "lg:text-4xl",
          "2xl:text-5xl",
        )}
      >
        КОНТАКТЫ:
      </h3>
      {/* <ul className={cn("flex gap-7", "lg:gap-6", "2xl:gap-8")}>
        {socials.map((social, index) => (
          <SocialIcon
            href={social.href}
            ariaLabel={social.ariaLabel}
            key={index}
            icon={social.icon}
          />
        ))}
      </ul> */}
      <SocialList />
      <ul className={cn("flex flex-col items-center justify-center gap-3")}>
        {contacts.map((contact, index) => (
          <li key={index}>
            <a
              href={contact.href}
              className={cn("text-xl font-medium", "2xl:text-3xl")}
            >
              {contact.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
