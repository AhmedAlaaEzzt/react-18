import { Box, Button, Stack } from "@mui/material";
import { StudentTable } from "./components/StudentTable";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Stack direction="row" justifyContent="flex-end">
        <Button variant="contained">Add Student</Button>
      </Stack>
      <StudentTable />
    </Box>
  );
}

export default App;
