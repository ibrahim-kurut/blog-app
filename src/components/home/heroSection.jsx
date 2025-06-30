import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="relative w-full h-[50vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-70"></div>
      <Image
        src={"/assets/hero.jpg"}
        alt="Hero Image"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute -top-20  w-full h-full flex flex-col items-center justify-center z-20 text-white">
        <h1 className="text-2xl mb-4">
          Lorem ipsum dolor sit amet consectetur,
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
