import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Dropdown = (props) => {
  const { options, label, className } = props;

  return (
    <Autocomplete
      disablePortal
      className={`${className}`}
      options={options}
      renderInput={(params) => (
        <TextField 
            {...params} 
            label={label} 
            />
        )}
    />
  );
};

export default Dropdown;
