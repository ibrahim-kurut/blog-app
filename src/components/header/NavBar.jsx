import Logo from "./Logo";
import Login from "./Login";

const NavBar = () => {
  return (
    <div className="bg-gray-200 shadow-neutral-300 shadow-lg">
      <div className="conrainer mx-auto h-[60px] flex justify-between items-center px-4">
        <Logo />
        <Login />
      </div>
    </div>
  );
};

export default NavBar;
