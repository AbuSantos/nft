/** @format */

import React from "react";

const TextField = ({ label, ...props }) => {
  const { name } = props;
  return (
    <>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input className="email" {...props} />
    </>
  );
};

export default TextField;
