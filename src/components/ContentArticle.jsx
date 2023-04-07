import React from "react";

const Content = (props) => {
  return (
    <>
      <article>
        <h1 className="text-xl lg:text-2xl font-bold mb-5">
          {props.subcontent}
        </h1>
        <p className="mb-8 para-1">
          {props.paragraph}
        </p>
      </article>
    </>
  );
};

export default Content;
