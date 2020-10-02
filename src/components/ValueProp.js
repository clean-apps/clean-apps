import React from "react";
import Button from "./Button";

const ValueProp = (props) => {
  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1 className="msg-title">Minimal, Open Source Productivity Apps</h1>
          <p className="main-subtitle">
            That gets you busy, for the things that matter.
          </p>
          <Button label="Get Started" />
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  );
};

export default ValueProp;
