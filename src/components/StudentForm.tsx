import { useState } from "react";
import TextField from "@mui/material/TextField";

import { Stack } from "@mui/material";
import { ChangeEvent } from "react";

export const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    enrolledClass: "",
  });

  const { fullName, age, email, enrolledClass } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Stack sx={{ pt: 1 }} direction={"column"} gap={2}>
      <TextField
        name="fullName"
        id="full-name"
        label="Full Name"
        variant="outlined"
        value={fullName}
        onChange={handleChange}
      />
      <TextField
        name="age"
        id="age"
        label="Age"
        variant="outlined"
        value={age}
        onChange={handleChange}
      />
      <TextField
        name="email"
        id="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleChange}
      />
      <TextField
        name="enrolledClass"
        id="class"
        label="Class"
        variant="outlined"
        value={enrolledClass}
        onChange={handleChange}
      />
    </Stack>
  );
};
