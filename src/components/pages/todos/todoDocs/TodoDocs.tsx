// styles
import { cn } from "@/utils/cn";

// components
import TodoHeading from "@/components/pages/todos/shared/htmlTegs/TodoHeading";
import TodoDescription from "./components/TodoDescription/TodoDescription";
import TodoTechnologies from "./components/TodoTechnologies/TodoTechnologies";
import HowTodoWorks from "./components/HowTodoWorks/HowTodoWorks";
import TodoResults from "./components/TodoResults/TodoResults";

//next intl
import { useTranslations } from "next-intl";

const TodoDocs = () => {
  const t = useTranslations("TodoApp.todoDocs");

  return (
    <div>
      <TodoHeading as="h1">{t("title")}</TodoHeading>

      <div className={cn("grid gap-20", "sm:gap-24", "xl:gap-28")}>
        <TodoDescription
          title={t("todoDescription.title")}
          text={t("todoDescription.text")}
        />
        <TodoTechnologies title={t("todoTechnologies.title")} />
        <HowTodoWorks title={t("howTodoWorks.title")} />
        <TodoResults
          title={t("results.title")}
          results={["item1", "item2", "item3"]}
        />
      </div>
    </div>
  );
};

export default TodoDocs;
