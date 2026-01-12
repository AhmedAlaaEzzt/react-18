import TextField from "@mui/material/TextField";

import { Stack } from "@mui/material";
import { ChangeEvent } from "react";
import { Student } from "@interfaces/student";

interface StudentFormProps {
  formData: Omit<Student, "id">;
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const StudentForm = ({ formData, onHandleChange }: StudentFormProps) => {
  const { fullName, age, email, enrolledClass } = formData;

  return (
    <Stack sx={{ pt: 1 }} direction={"column"} gap={2}>
      <TextField
        name="fullName"
        id="full-name"
        label="Full Name"
        variant="outlined"
        value={fullName}
        onChange={onHandleChange}
      />
      <TextField
        name="age"
        id="age"
        label="Age"
        variant="outlined"
        value={age}
        onChange={onHandleChange}
      />
      <TextField
        name="email"
        id="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={onHandleChange}
      />
      <TextField
        name="enrolledClass"
        id="class"
        label="Class"
        variant="outlined"
        value={enrolledClass}
        onChange={onHandleChange}
      />
    </Stack>
  );
};
