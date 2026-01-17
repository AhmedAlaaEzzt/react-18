import { useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { StudentForm } from "./StudentForm";
import { Student } from "@interfaces/student";

const initialStudentState: Omit<Student, "id"> = {
  fullName: "",
  age: "",
  email: "",
  enrolledClass: "",
};

type StudentEditModalProps = DialogProps & {
  onSave: () => void;
  onClose: () => void;
};

export const StudentEditModal = (
  studentEditModalProps: StudentEditModalProps
) => {
  const { onSave, onClose, ...dialogProps } = studentEditModalProps;

  const [formData, setFormData] = useState(initialStudentState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave();
    setFormData(initialStudentState);
  };

  const handleCancel = () => {
    onClose();
  };


  return (
    <Dialog {...dialogProps}>
      <DialogTitle>Add a new student</DialogTitle>
      <DialogContent>
        <StudentForm formData={formData} onHandleChange={handleChange} />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={handleCancel} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
