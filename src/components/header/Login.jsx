import Link from "next/link";
import React from "react";
import { FaUserPlus } from "react-icons/fa6";

const Login = () => {
  return (
    <Link href="/login">
      <div className="">
        <FaUserPlus size={25} />
      </div>
    </Link>
  );
};

export default Login;
