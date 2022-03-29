import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxComp({ options, id, setValue }) {
  const [checked, setChecked] = React.useState([]);

  const handleChange = e => {
    let newArray = [...checked];
    if (newArray.includes(e.target.value)) {
      const index = newArray.indexOf(e.target.value);
      if (index > -1) {
        newArray.splice(index, 1); // 2nd parameter means remove one item only
      }
    } else {
      newArray.push(e.target.value);
    }
    setChecked(newArray);
    setValue(id, newArray);
  };
  return (
    <FormGroup>
      <div className="form-skills">Enter Your Skills</div>
      {options.map((data, index) => (
        <FormControlLabel
          key={index}
          value={data}
          control={<Checkbox checked={checked.includes(data)} />}
          label={data}
          onChange={handleChange}
        />
      ))}
    </FormGroup>
  );
}
