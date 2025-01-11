// components
import TodoHeading from "@/components/pages/todos/shared/htmlTegs/TodoHeading";
import HowTodoWorksList from "./components/HowTodoWorksList";

// Next Intl
import { useTranslations } from "next-intl";

interface HowTodoWorksProps {
  title: string;
}

const HowTodoWorks = ({ title }: HowTodoWorksProps) => {
  const t = useTranslations("TodoApp.todoDocs.howTodoWorks");

  // const howTodoWorksList = t.raw("howTodoWorksList" as keyof typeof t.raw);
  const howTodoWorksList = t.raw(
    "howTodoWorksList" as keyof typeof t.raw,
  ) as Record<
    string,
    { title: string; descriptionList: Record<string, string> }
  >;

  const sections = Object.entries(howTodoWorksList).map(([, section]) => ({
    title: section.title,
    descriptions: Object.values(section.descriptionList),
  }));

  return (
    <section id="how-it-works">
      <TodoHeading as="h2">{title}</TodoHeading>
      <HowTodoWorksList sections={sections} />
    </section>
  );
};

export default HowTodoWorks;
