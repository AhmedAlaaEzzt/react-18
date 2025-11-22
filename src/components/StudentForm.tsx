import TextField from "@mui/material/TextField";

import { Stack } from "@mui/material";

export const StudentForm = () => {
  return (
    <Stack sx={{ p: 1 }} direction={"column"} gap={2}>
      <TextField id="outlined-basic" label="Full Name" variant="outlined" />
      <TextField id="outlined-basic" label="Age" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Class" variant="outlined" />
    </Stack>
  );
};
