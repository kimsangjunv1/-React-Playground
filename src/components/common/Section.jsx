import React from "react";

const Section = ({ children }) => {
  return (
    <section id="contents">
      <section className="section_inner">{children}</section>
    </section>
  );
};

export default Section;
