import Logo from "./Logo";
import Login from "./Login";

const NavBar = () => {
  return (
    <div className="relative z-50 bg-gray-200 shadow-black shadow-lg">
      <div className="conrainer mx-auto h-[60px] flex justify-between items-center px-4">
        <Logo />
        <Login />
      </div>
    </div>
  );
};

export default NavBar;
