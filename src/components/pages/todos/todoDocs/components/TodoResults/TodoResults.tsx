// styles
import { cn } from "@/utils/cn";

// components
import TodoHeading from "@/components/pages/todos/shared/htmlTegs/TodoHeading";

// Next Intl
import { useTranslations } from "next-intl";

interface TodoResultsProps {
  title: string;
  results: string[];
}
const TodoResults = ({ title, results }: TodoResultsProps) => {
  const t = useTranslations("TodoApp.todoDocs.results.list");

  return (
    <section id="results">
      <TodoHeading as="h2">{title}</TodoHeading>
      <ul className={cn("flex flex-col gap-5", "sm:gap-6")}>
        {results.map((result, index) => (
          <li
            key={index}
            className={cn(
              "flex gap-3",
              "sm:text-lg",
              "xl:text-xl",
              "2xl:text-2xl",
            )}
          >
            <span
              className={cn(
                "font-title text-xl text-primary",
                "sm:text-2xl",
                "lg:text-3xl",
                "2xl:text-4xl",
              )}
            >
              ({index + 1})
            </span>
            <div>
              {t.rich(result as keyof typeof t.rich, {
                bold: (chunk) => <span className="font-semibold">{chunk}</span>,
              })}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoResults;
