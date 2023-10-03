import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import { Button, Container, Grid } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
import Dialog from "@mui/material/Dialog";
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

function CreateFormDialog({
  isOpenDialog,
  handleCloseDialog,
  setIsOpenDialog,
  setFormInputDetails,
}) {
  //   const [isOpenDialog, setIsOpenDialog] = React.useState(false);
  const [selectedInputType, setSelectedInputType] = useState("");
  const [inputLabelName, setInputLabelName] = useState("");
  const [formName, setFormName] = useState("");
  const [checkBoxDefaultValue, setCheckBoxDefaultValue] = useState(true);
  const [inputDetails, setInputDetails] = useState([]);

  const inputTypesList = [
    { typeName: "Radio", value: "radio" },
    { typeName: "Text Input", value: "textInput" },
    { typeName: "Dropdown", value: "dropdown" },
    { typeName: "Checkbox", value: "checkbox" },
    { typeName: "Radio Button", value: "radioButton" },
  ];

  const handleOpenDialog = () => {
    console.log("handleOpenDialog");
    // setIsOpenDialog(true);
  };

  const handleChangeInputFieldType = (event) => {
    console.log("event", event.target);
    setSelectedInputType(event.target.value);
  };

  const handleChangeLabelName = (event) => {
    setInputLabelName(event.target.value);
  };

  const handleClickDone = () => {
    handleCreateMoreInputFields();
    setFormInputDetails(inputDetails);
    setFormName("");
    handleCloseDialog();
  };

  const handleCreateMoreInputFields = () => {
    let formDetails = {
      input_label_name: inputLabelName,
      inputType: selectedInputType,
      checkBoxDefaultValue: checkBoxDefaultValue,
    };

    let updatedInputDetails = inputDetails.formElements || [];

    updatedInputDetails.push(formDetails);

    let formDetail = {
      formName: formName,
      formElements: updatedInputDetails,
    };

    setInputDetails(formDetail);

    setInputLabelName("");
    setSelectedInputType("");
  };

  const handleChangeFormName = (event) => {
    setFormName(event.target.value);
  };

  const handleChangeCheckDefaultValue = (event) => {
    setCheckBoxDefaultValue(event.target.checked);
  };

  console.log("inputDetails", inputDetails);
  return (
    <Dialog open={isOpenDialog} onClose={handleCloseDialog}>
      <DialogTitle>Create Input Fields</DialogTitle>
      <DialogContent>
        <Typography> This is body</Typography>
        <Grid
          sx={{
            width: "400px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Input Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedInputType}
              label="Input Type"
              onChange={(event) => handleChangeInputFieldType(event)}
            >
              {inputTypesList.map((item) => (
                <MenuItem value={item?.value}>{item?.typeName}</MenuItem>
              ))}
            </Select>

            <TextField
              placeholder="Form Name"
              variant="outlined"
              value={formName}
              onChange={(event) => handleChangeFormName(event)}
            />

            <TextField
              placeholder="Label"
              variant="outlined"
              value={inputLabelName}
              onChange={(event) => handleChangeLabelName(event)}
            />

            {selectedInputType === "checkbox" && (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={"Check Box Default Value"}
                  onChange={handleChangeCheckDefaultValue}
                />
              </FormGroup>
            )}
            <Button onClick={handleCreateMoreInputFields}>Create More</Button>
            <Button onClick={handleClickDone}>Done</Button>
          </FormControl>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormDialog;
