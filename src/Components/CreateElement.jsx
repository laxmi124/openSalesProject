import React from "react";
import {
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  Button,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

// checkBoxDefaultValue: true
// form_id: "form1"
// inputType: "textInput"
// input_label_name: "lbl1"

function CreateElement({ element }) {
  console.log("element", element);

  return (
    <>
      {element.inputType === "textInput" && (
        <TextField
          placeholder={element?.input_label_name}
          variant="outlined"
          disabled
        />
      )}
      {element.inputType === "checkbox" && (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={element?.checkBoxDefaultValue} disabled />
            }
            label={element?.input_label_name}
          />
        </FormGroup>
      )}
    </>
  );
}

export default CreateElement;
