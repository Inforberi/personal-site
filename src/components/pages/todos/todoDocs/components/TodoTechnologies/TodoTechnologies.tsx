// components
import TodoHeading from "@/components/pages/todos/shared/htmlTegs/TodoHeading";
import TechnologyList from "./Components/TodoTechnologyList";

interface TodoTechnologiesProps {
  title: string;
}

const TodoTechnologies = ({ title }: TodoTechnologiesProps) => {
  return (
    <section id="technologies">
      <TodoHeading as="h2">{title}</TodoHeading>
      <TechnologyList />
    </section>
  );
};

export default TodoTechnologies;
