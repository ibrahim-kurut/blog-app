"use client";
import UpdateProfileModel from "@/components/profile/UpdateProfileModel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const [showUpdateModel, setShowUpdateModel] = useState(false);

  // handle update profile
  const handleUpdateProfile = () => {
    setShowUpdateModel(true);
  };
  return (
    <div className="">
      <div className="container mx-auto w-[90%] h-[70%] bg-gray-400 mt-10 rounded-lg shadow-lg p-6">
        <div className="relative">
          <Image
            src="/assets/user.png"
            alt="Profile Picture"
            width={150}
            height={150}
            priority
            className="rounded-full mx-auto mb-4"
          />
          <div>
            <h1 className="text-center text-2xl font-bold mb-2">John Doe</h1>
            <h3 className="text-center font-bold mb-2">email@gmail.com</h3>
          </div>
          {/* delete update profile */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <button
                onClick={handleUpdateProfile}
                className="bg-green-400 py-1 px-2 rounded hob=ver:bg-green-500 transition-colors hover:text-white cursor-pointer capitalize"
              >
                update profile
              </button>
              <button className="bg-red-400 py-1 px-2 rounded hob=ver:bg-green-500 transition-colors hover:text-white cursor-pointer capitalize">
                delete profile
              </button>
            </div>
            {/* add post btn */}
            <div>
              <Link
                href="/posts/add-post"
                className="bg-blue-400 py-1 px-2 rounded cursor-pointer capitalize hover:bg-blue-500 transition-colors hover:text-white"
              >
                add post
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* update profile model */}
      {showUpdateModel && (
        <UpdateProfileModel setShowUpdateModel={setShowUpdateModel} />
      )}
    </div>
  );
};

export default ProfilePage;
