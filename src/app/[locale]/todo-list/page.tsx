// components
import TodoDocs from "@/components/pages/todos/todoDocs/TodoDocs";
import Todos from "@/components/pages/todos/todoLogic/Todos";

// next intl
import { setRequestLocale, getTranslations } from "next-intl/server";

// types
import type { Params } from "@/types/types";

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TodoListMetadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    locale: locale,
    alternates: {
      canonical: "/todo-list",
    },
  };
}

const TodoListPage = async ({ params }: { params: Params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Todos />
      <TodoDocs />
    </>
  );
};

export default TodoListPage;
