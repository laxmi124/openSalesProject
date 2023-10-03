import React, { useEffect, useState } from "react";
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

import CreateFormDialog from "./CreateFormDialog";
import CreateElement from "./CreateElement";

function CreateForm() {
  // TODO : use lodash
  const [isOpenDialog, setIsOpenDialog] = React.useState(false);
  const [selectedInputType, setSelectedInputType] = React.useState("");
  const [formInputDetails, setFormInputDetails] = useState("");

  const inputTypesList = [
    { typeName: "Radio", value: "radio" },
    { typeName: "Text Input", value: "textInput" },
    { typeName: "Dropdown", value: "dropdown" },
    { typeName: "Checkbox", value: "checkbox" },
    { typeName: "Radio Button", value: "radioButton" },
  ];

  const handleOpenDialog = () => {
    console.log("handleOpenDialog");
    setIsOpenDialog(true);
  };
  const handleCloseDialog = () => {
    console.log("handleCloseDialog");
    setIsOpenDialog(false);
  };

  const handleFormSave = () => {
    console.log("save", formInputDetails);

    // let forms = [...localStorage.getItem("forms"), formInputDetails];

    let localStorageFormValues = JSON.parse(localStorage.getItem("forms")) || [];

    localStorageFormValues.push(formInputDetails);
    localStorage.setItem("forms", JSON.stringify(localStorageFormValues));
  };

  return (
    <Box
      sx={{
        width: "70%",
        border: "1px solid black",
        height: "100%",
      }}
    >
      <Button variant="contained" onClick={handleOpenDialog}>
        Create Input
      </Button>

      {formInputDetails?.formElements?.length ? (
        formInputDetails?.formElements?.map((element) => (
          <CreateElement element={element} />
        ))
      ) : (
        <></>
      )}

      {formInputDetails?.formElements?.length ? (
        <Button onClick={handleFormSave}> Save Save</Button>
      ) : (
        <></>
      )}
      <CreateFormDialog
        isOpenDialog={isOpenDialog}
        handleCloseDialog={handleCloseDialog}
        setIsOpenDialog={setIsOpenDialog}
        setFormInputDetails={setFormInputDetails}
      />
    </Box>
  );
}

export default CreateForm;
