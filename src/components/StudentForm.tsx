import TextField from "@mui/material/TextField";

import { Stack } from "@mui/material";
import { ChangeEvent } from "react";

export const StudentForm = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <Stack sx={{ pt: 1 }} direction={"column"} gap={2}>
      <TextField
        name="fullName"
        id="full-name"
        label="Full Name"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        name="age"
        id="age"
        label="Age"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        name="email"
        id="email"
        label="Email"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        name="enrolledClass"
        id="class"
        label="Class"
        variant="outlined"
        onChange={handleChange}
      />
    </Stack>
  );
};
