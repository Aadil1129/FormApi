import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ id, placeholder, setValue }) {
  const handleChange = e => {
    setValue(id, e.target.value);
  };
  return (
    <TextField
      id="outlined-basic"
      size="small"
      label={placeholder}
      onChange={handleChange}
      variant="outlined"
    />
  );
}
