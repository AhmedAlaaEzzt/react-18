import Button from "@mui/material/Button";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { StudentForm } from "./StudentForm";

type StudentEditModalProps = DialogProps;

export const StudentEditModal = (
  studentEditModalProps: StudentEditModalProps
) => {
  return (
    <Dialog {...studentEditModalProps}>
      <DialogTitle>Add a new student</DialogTitle>
      <DialogContent>
        <StudentForm />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  );
};
