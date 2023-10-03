import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Button, Container, Grid } from "@mui/material";

function FormList({ formList }) {
  console.log("formList", formList);
  return (
    <Box
      sx={{
        width: "30%",
        border: "1px solid red",
        height: "100%",
      }}
    >
      {/* <Button variant="contained">Create Form</Button> */}
      {formList.map((items) => (
        <Typography>{items.formLabelName}</Typography>
      ))}
    </Box>
  );
}

export default FormList;
