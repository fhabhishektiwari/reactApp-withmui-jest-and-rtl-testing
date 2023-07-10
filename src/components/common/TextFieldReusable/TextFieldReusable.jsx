import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
const TextFieldReusable = ({ label, value, onChange }) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
  />
);

TextFieldReusable.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextFieldReusable;