import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StudentTable } from "@components/StudentTable";
import { StudentEditModal } from "@components/StudentEditModal";

function App() {
  const [isStudentEditOpen, setIsStudentEditOpen] = useState(false);

  const handleClickOpen = () => {
    setIsStudentEditOpen(true);
  };

  const handleClose = () => {
    setIsStudentEditOpen(false);
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
        <StudentTable />
      </Box>
      <StudentEditModal
        open={isStudentEditOpen}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"xs"}
      />
    </>
  );
}

export default App;
