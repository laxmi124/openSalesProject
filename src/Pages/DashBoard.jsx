import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormList from "../Components/FormList";
import CreateForm from "../Components/CreateForm";

function DashBoard() {
  return (
    <div
      style={{
        display: "flex",
        height: "700px",
        width: "100%",
      }}
    >
      <FormList formList={[{ formLabelName: "form1" }]} />

      {/* <Box
        sx={{
          width: "70%",
          border: "1px solid black",
          height: "100%",
        }}
      ></Box> */}
      <CreateForm />
    </div>
  );
}

export default DashBoard;
