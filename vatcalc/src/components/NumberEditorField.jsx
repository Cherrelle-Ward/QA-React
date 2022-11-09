import React from "react";
const NumberEditorField = (props) => {
  return (
    <input
      type="number"
      id="num"
      value={props.value}
      onChange={(e) => {
        props.valueChanged(e.target.value);
      }}
    />
  );
};

export default NumberEditorField;
