"use client";

import { useState } from "react";

const UpdateProfileModel = ({
  setShowUpdateModel,
  name,
  setName,
  email,
  setEmail,
}) => {
  const [image, setImage] = useState("");

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, image });
    setTimeout(() => {
      setShowUpdateModel(false);
    }, 1500);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[50%]">
          <h2 className="text-xl font-bold mb-4">Update Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* name  */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your name"
              />
            </div>
            {/* email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
            </div>
            {/* image */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Update
              </button>
              <div
                onClick={() => setShowUpdateModel(false)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors cursor-pointer"
              >
                close
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModel;
