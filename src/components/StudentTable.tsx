import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Student } from "@interfaces/student";

interface StudentTableProps {
  students: Student[];
}


export const StudentTable = ({ students }: StudentTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Class</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(({ id, fullName, age, email, enrolledClass }) => (
            <TableRow key={id}>
              <TableCell align="left">{fullName}</TableCell>
              <TableCell align="left">{age}</TableCell>
              <TableCell align="left">{email}</TableCell>
              <TableCell align="left">{enrolledClass}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
