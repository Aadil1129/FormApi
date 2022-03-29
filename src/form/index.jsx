import React, { useState } from "react";
import formComponent from "./index.js";
import Components from "./components";
import Button from "@mui/material/Button";

function Form() {
  const [resData, setResData] = useState(formComponent);
  const setValue = (id, value) => {
    // console.log("form", id, value);
    resData.forEach(item => {
      if (item.id === id) {
        item.value = value;
      }
    });
    setResData([...resData]);
  };
  console.log(resData);
  const clickHandler = e => {
    e.preventDefault();

    let newArr = [];
    if (resData.value === undefined) {
      alert("fill required field");
    }
    resData.forEach(item => {
      newArr.push({ id: item.id, value: item.value });
    });
    console.log(newArr);

    // for (let i = 0; i < resData.length; i++) {
    //   newArr.push({ id: resData[i].id, value: resData[i].value });
    // }

    // let dd = resData.map(item => {
    //   return { id: item.id, value: item.value };
    // });
    // console.log(dd);
  };
  return (
    <div className="formContainer">
      {resData.map((data, index) => (
        <div className="fullform" key={index}>
          <Components data={data} setValue={setValue} />
        </div>
      ))}

      <Button variant="contained" onClick={clickHandler}>
        Submit
      </Button>
    </div>
  );
}
export default Form;
