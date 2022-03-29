import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioComp({ options, id, setValue }) {
  const [value, setRValue] = React.useState("");

  const handleChange = event => {
    setRValue(event.target.value);
    setValue(id, event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={handleChange}
        value={value}
      >
        {options.map((data, index) => (
          <FormControlLabel
            key={index}
            value={data}
            control={<Radio />}
            label={data}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
