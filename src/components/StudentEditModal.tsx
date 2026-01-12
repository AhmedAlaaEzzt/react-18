import { useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { StudentForm } from "./StudentForm";

const initialStudentState = {
  fullName: "",
  age: "",
  email: "",
  enrolledClass: "",
};

type StudentEditModalProps = DialogProps & {
  onSave: () => void;
};

export const StudentEditModal = (
  studentEditModalProps: StudentEditModalProps
) => {
  const { onSave, ...dialogProps } = studentEditModalProps;

  const [formData, setFormData] = useState(initialStudentState);

  const handleSave = () => {
    onSave();
    setFormData(initialStudentState);
  };

  const handleCancel = () => {
    if (dialogProps.onClose) {
      dialogProps.onClose({}, "backdropClick");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Dialog {...dialogProps}>
      <DialogTitle>Add a new student</DialogTitle>
      <DialogContent>
        <StudentForm formData={formData} onHandleChange={handleChange} />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={handleCancel} variant="outlined">
          Cancle
        </Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
