import { StudentForm } from "./components/StudentForm";
import { StudentTable } from "./components/StudentTable";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <StudentForm />
      <StudentTable />
    </div>
  );
}

export default App;
