const RegisterPage = () => {
  return (
    <form className="bg-gray-100 w-1/2 mx-auto mt-10 space-y-4 border border-gray-200 p-6 rounded-lg shadow-md">
      <h1 className="text-center capitalize text-2xl">Register Page</h1>
      <div>
        <label htmlFor="username">
          <span className="text-sm font-medium text-gray-700">User Name</span>

          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="mt-1 w-full p-2 rounded border-gray-300 shadow-sm sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label htmlFor="Email">
          <span className="text-sm font-medium text-gray-700"> Email </span>

          <input
            type="email"
            id="Email"
            placeholder="Enter your email"
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
            className="mt-1 w-full p-2 rounded border-gray-300 shadow-sm sm:text-sm"
          />
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-gray-700 text-white p-2 rounded hover:bg-gray-800 transition-colors cursor-pointer"
        >
          Register
        </button>
      </div>
      <div className="text-center">
        <span className="text-sm text-gray-600">
          have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </span>
      </div>
    </form>
  );
};

export default RegisterPage;
