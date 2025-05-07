import React from "react";

const Student = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.age}
      </p>
      <p>Is single:{props.isSingle ? "Yes" : "No"}</p>
    </div>
  );
};

export default Student;
