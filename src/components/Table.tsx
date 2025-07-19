import { students } from "../utils/studentsData";

export const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        {students.map(({ id, fullName, age, email, enrolledClass }) => (
          <tr key={id}>
            <td>{fullName}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td>{enrolledClass}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
