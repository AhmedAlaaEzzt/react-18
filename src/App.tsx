import { Card } from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-start items-center">
        <Card>
          <h2>Welcome</h2>
          <p>This is a reusable card component using children prop.</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
