import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const StudentForm = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
      }}
    >
      <TextField id="outlined-basic" label="Full Name" variant="outlined" />
      <TextField id="outlined-basic" label="Age" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Class" variant="outlined" />
      <Button variant="contained">Save</Button>
    </Paper>
  );
};
