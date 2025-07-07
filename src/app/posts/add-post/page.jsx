"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation values
    if (title === "") return toast.error("Title is required");
    if (title.length < 3)
      return toast.error("Title must be at least 3 characters long");

    console.log({ title, description, image });
  };

  return (
    <div className="bg-gray-100 w-1/2 mx-auto mt-10 space-y-4 border border-gray-200 p-6 rounded-lg shadow-md">
      <h1 className="capitalize text-2xl text-center">add post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="capitalize mb-4">
          <label htmlFor="title">
            <span className="text-sm font-medium text-gray-700"> title </span>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="mt-1 p-2 w-full rounded border-gray-300 shadow-sm sm:text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="capitalize mb-4">
          <label htmlFor="description">
            <span className="text-sm font-medium text-gray-700">
              Description
            </span>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter post description"
              className="mt-1 p-2 w-full rounded border-gray-300 shadow-sm sm:text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="capitalize mb-4">
          <label htmlFor="image">
            <span className="text-sm font-medium text-gray-700">image</span>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              placeholder="Enter post description"
              className="mt-1 p-2 w-full rounded border-gray-300 shadow-sm sm:text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className={`w-full bg-gray-700 text-white p-2 rounded hover:bg-gray-800 transition-colors cursor-pointer ${
              title.length < 3 ? "opacity-50 cursor-not-allowed disabled " : ""
            } `}
            disabled={title.length > 10}
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
