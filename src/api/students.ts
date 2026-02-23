export const fetchStudents = async () => {
  const response = await fetch("http://localhost:5000/students");
  return await response.json();
};
