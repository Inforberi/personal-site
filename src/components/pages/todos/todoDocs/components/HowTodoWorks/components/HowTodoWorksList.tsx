// hooks
import React from "react";

// components
import HowTodoWorksItem from "./HowTodoWorksItem";

// types
import type { Section } from "../../../types/types";
import AnimatedLine from "./AnimatedLine";

interface HowTodoWorksListProps {
  sections: Section[];
}

const HowTodoWorksList = ({ sections }: HowTodoWorksListProps) => {
  return (
    <ul>
      <AnimatedLine />
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <HowTodoWorksItem
            index={index + 1}
            title={section.title}
            descriptions={section.descriptions}
          />
          {index < sections.length - 1 && <AnimatedLine />}
        </React.Fragment>
      ))}
      <AnimatedLine />
    </ul>
  );
};

export default HowTodoWorksList;
