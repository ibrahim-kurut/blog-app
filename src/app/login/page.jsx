"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation values
    if (email === "") return toast.error("Email is required");
    if (password === "") return toast.error("Password is required");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters long");

    // hashed password example (not needed for login, but shown for completeness)
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const fd = { email, password: hashedPassword };
    //! TODO send the data to the server for login
    toast.success("Login successful");
    console.log(fd);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 w-1/2 mx-auto mt-10 space-y-4 border border-gray-200 p-6 rounded-lg shadow-md"
    >
      <h1 className="text-center capitalize text-2xl">Login page</h1>
      <div>
        <label htmlFor="Email">
          <span className="text-sm font-medium text-gray-700"> Email </span>

          <input
            type="email"
            id="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full p-2 rounded border-gray-300 shadow-sm sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label htmlFor="Password">
          <span className="text-sm font-medium text-gray-700"> Password </span>

          <input
            type="Password"
            id="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full p-2 rounded border-gray-300 shadow-sm sm:text-sm"
          />
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-gray-700 text-white p-2 rounded hover:bg-gray-800 transition-colors cursor-pointer"
        >
          Login
        </button>
      </div>
      <div className="text-center">
        <span className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </span>
      </div>
    </form>
  );
};

export default LoginPage;
