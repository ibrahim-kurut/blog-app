import Link from "next/link";

const Logo = () => {
  return (
    <div className="capitalize bg-gray-700 px-3 py-1 rounded text-orange-300 font-bold">
      <Link href="/">blog app</Link>
    </div>
  );
};

export default Logo;
