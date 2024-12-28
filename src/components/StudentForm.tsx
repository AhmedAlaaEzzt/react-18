import { useState } from "react";

export function StudentForm() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="p-4 rounded shadow-md inline-flex flex-col gap-2">
      <span className="font-medium">{`${fullName || "Student"}'s Form`}</span>

      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          value={fullName}
          placeholder="Enter your name"
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name">Age</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          value={age}
          placeholder="Enter your age"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name">Email</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          value={email}
          placeholder="Enter your email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition duration-150 ease-in-out mt-4"
        onClick={() => {
          setFullName("");
          setAge("");
          setEmail("");
        }}
      >
        Add Student
      </button>
    </div>
  );
}
