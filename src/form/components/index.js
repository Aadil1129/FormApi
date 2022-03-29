import React from "react";
import BasicTextFields from "./input";
import RadioComp from "./radio";
import CheckboxComp from "./checkbox";

function Component({ data, setValue }) {
  switch (data.type) {
    case "text":
      return (
        <BasicTextFields
          id={data.id}
          placeholder={data.placeholder}
          setValue={setValue}
        />
      );

    case "checkbox":
      return (
        <CheckboxComp id={data.id} setValue={setValue} options={data.options} />
      );

    case "radio":
      return (
        <RadioComp options={data.options} id={data.id} setValue={setValue} />
      );

    default:
      return <BasicTextFields />;
  }
}

export default Component;
