// components
import TodoHeading from "@/components/pages/todos/shared/htmlTegs/TodoHeading";
import AnimationP from "@/components/pages/todos/shared/htmlTegs/AnimationP";

interface TodoDescriptionProps {
  title: string;
  text: string;
}

const TodoDescription = ({ title, text }: TodoDescriptionProps) => {
  return (
    <section id="description-docs">
      <TodoHeading as="h2">{title}</TodoHeading>
      <AnimationP>{text}</AnimationP>
    </section>
  );
};

export default TodoDescription;
