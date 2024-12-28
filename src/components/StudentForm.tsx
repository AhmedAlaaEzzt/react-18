import { useRef } from "react";

export function StudentForm() {
  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <div className="p-4 rounded shadow-md inline-flex flex-col gap-2">
      <span className="font-medium">{`${
        nameRef.current?.value || "Student"
      }'s Form`}</span>

      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          ref={nameRef}
          className="border border-gray-300 rounded-md p-2"
          type="text"
          id="name"
          placeholder="Enter your name"
          onChange={() => {
            console.log(nameRef.current?.value);
          }}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition duration-150 ease-in-out mt-4"
        onClick={() => console.log("button clicked!")}
      >
        Add Student
      </button>
    </div>
  );
}
