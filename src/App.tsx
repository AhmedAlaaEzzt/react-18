import { useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StudentTable } from "@components/StudentTable";
import { StudentEditModal } from "@components/StudentEditModal";
import { Student } from "@interfaces/student";
import { fetchStudents } from "./api/students";

function App() {
  const [isStudentEditOpen, setIsStudentEditOpen] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);

  const getStudents = async () => {
    const data = await fetchStudents();
    setStudents(data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleClickOpen = () => {
    setIsStudentEditOpen(true);
  };

  const handleClose = () => {
    setIsStudentEditOpen(false);
  };
  const handleSave = (newStudent: Omit<Student, "id">) => {
    const id = crypto.randomUUID();
    setStudents((prev) => [{ ...newStudent, id }, ...prev]);
    handleClose();
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Stack direction="row" justifyContent="flex-end">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            Add Student
          </Button>
        </Stack>
        <StudentTable students={students} />
      </Box>
      <StudentEditModal
        open={isStudentEditOpen}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"xs"}
        onSave={handleSave}
      />
    </>
  );
}

export default App;
