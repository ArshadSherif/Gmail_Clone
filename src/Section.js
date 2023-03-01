import React from "react";
import "./Section.css";

function Section({ Icon, title, colour, selected }) {
  return (
    <div
      className={`section ${selected && "section_selected"}`}
      style={{
        borderBottom: `3px solid ${colour}`,
        color: `${selected && colour}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
