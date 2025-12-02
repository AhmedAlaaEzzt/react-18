import TextField from "@mui/material/TextField";

import { Stack } from "@mui/material";
import { ChangeEvent } from "react";

export const StudentForm = () => {
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <Stack sx={{ pt: 1 }} direction={"column"} gap={2}>
      <TextField
        name="fullName"
        id="full-name"
        label="Full Name"
        variant="outlined"
        onChange={handelChange}
      />
      <TextField
        name="age"
        id="age"
        label="Age"
        variant="outlined"
        onChange={handelChange}
      />
      <TextField
        name="email"
        id="email"
        label="Email"
        variant="outlined"
        onChange={handelChange}
      />
      <TextField
        name="enrolledClass"
        id="class"
        label="Class"
        variant="outlined"
        onChange={handelChange}
      />
    </Stack>
  );
};
