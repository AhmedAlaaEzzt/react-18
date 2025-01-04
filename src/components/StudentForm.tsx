import { useEffect, useState } from "react";

const initialFormData = {
  fullName: "",
  age: "",
  email: "",
};

export function StudentForm() {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="p-4 rounded shadow-md inline-flex flex-col gap-2">
      <span className="font-medium">{`${
        formData.fullName || "Student"
      }'s Form`}</span>

      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          value={formData.fullName}
          placeholder="Enter your name"
          onChange={HandleInputChange}
          name="fullName"
          // onChange={(event) => {
          //   setFormData((prev) => ({ ...prev, fullName: event.target.value }));
          // }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name">Age</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          value={formData.age}
          placeholder="Enter your age"
          onChange={HandleInputChange}
          name="age"
          // onChange={(event) => {
          //   setFormData((prev) => ({ ...prev, age: event.target.value }));
          // }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name">Email</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          value={formData.email}
          placeholder="Enter your email"
          onChange={HandleInputChange}
          name="email"
          // onChange={(event) => {
          //   setFormData((prev) => ({ ...prev, email: event.target.value }));
          // }}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition duration-150 ease-in-out mt-4"
        onClick={() => {
          setFormData(initialFormData);
        }}
      >
        Add Student
      </button>
    </div>
  );
}
